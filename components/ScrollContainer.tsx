interface ScrollContainerProps {
  children: React.ReactNode;
}

/**
 * Applies CSS scroll-snap on desktop (each section is a "slide" the
 * viewport rests on) while falling back to natural free-scroll on
 * mobile, where snap behaviour feels disorienting on touch devices.
 * See .snap-container / .snap-slide in globals.css for the media
 * query that disables snapping under 768px.
 */
export function ScrollContainer({ children }: ScrollContainerProps) {
  return (
    <div className="snap-container h-[100svh] overflow-y-auto md:h-screen">
      {children}
    </div>
  );
}
