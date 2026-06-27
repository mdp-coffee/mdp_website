import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  suffix?: string;
  locale?: string;
}

export function useCountUp({
  end,
  duration = 1500,
  suffix = "",
  locale = "en-IN",
}: UseCountUpOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(`0${suffix}`);

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
