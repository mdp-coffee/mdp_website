/**
 * Minimal in-memory rate limiter — sufficient for a low-volume B2B
 * contact form on a single Vercel instance. If traffic grows, swap
 * for Upstash Redis (rate-limit package) without changing the API.
 */
const requestLog = new Map<string, number[]>();

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5;

export function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const timestamps = requestLog.get(identifier) ?? [];
  const recent = timestamps.filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    requestLog.set(identifier, recent);
    return true;
  }

  recent.push(now);
  requestLog.set(identifier, recent);
  return false;
}
