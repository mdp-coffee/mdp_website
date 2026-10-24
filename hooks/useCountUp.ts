import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  suffix?: string;
  locale?: string;
}

// useLayoutEffect warns when run during SSR, so fall back to useEffect there.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useCountUp({
  end,
  duration = 1500,
  suffix = "",
  locale = "en-IN",
}: UseCountUpOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  // Initialise to the final value so server-rendered HTML carries the real
  // figure (non-JS crawlers would otherwise read "0+" as fact).
  const [display, setDisplay] = useState(
    `${end.toLocaleString(locale)}${suffix}`
  );

  // On the client, drop back to zero before the first paint so the count-up
  // has somewhere to start and no flash of the final number is visible.
  // Reduced-motion users keep the final value and never animate.
  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setDisplay(`0${suffix}`);
  }, [suffix]);

  useEffect(() => {
    if (!isInView) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(`${end.toLocaleString(locale)}${suffix}`);
      return;
    }

    const start = Date.now();
    const frame = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);
      setDisplay(`${current.toLocaleString(locale)}${suffix}`);
      if (progress >= 1) clearInterval(frame);
    }, 16);

    return () => clearInterval(frame);
  }, [isInView, end, duration, suffix, locale]);

  return { ref, display };
}
