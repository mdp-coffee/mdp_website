export const MOTION = {
  ease: [0.21, 0.47, 0.32, 0.98] as number[],
  easeIn: [0.4, 0, 1, 1] as number[],
  easeOut: [0, 0, 0.2, 1] as number[],
  fast: 0.4,
  base: 0.65,
  slow: 0.9,
  xslow: 1.1,
  fadeUp: { y: 24 },
  fadeLeft: { x: -24 },
  fadeRight: { x: 60 },
  viewport: { once: true, amount: 0.15 } as const,
  stagger: (index: number, base = 0.08, max = 0.8) =>
    Math.min(index * base, max),
}

export const fadeUpVariants = {
  hidden: { opacity: 0, y: MOTION.fadeUp.y },
  visible: { opacity: 1, y: 0 },
}

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const slideRightVariants = {
  hidden: { opacity: 0, x: MOTION.fadeRight.x },
  visible: { opacity: 1, x: 0 },
}
