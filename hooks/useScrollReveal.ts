import { useRef } from "react";
import { useInView } from "framer-motion";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });
  return { ref, isInView };
}
