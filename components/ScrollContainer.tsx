interface ScrollContainerProps {
  children: React.ReactNode;
}

/**
 * Applies CSS scroll-snap on all screen sizes (each section is a
 * "slide" the viewport rests on) — mandatory throughout, including
 * mobile. See .snap-container / .snap-slide in globals.css.
 */
export function ScrollContainer({ children }: ScrollContainerProps) {
  return (
    <div className="snap-container h-[100svh] overflow-y-auto md:h-screen">
      {children}
    </div>
  );
}
