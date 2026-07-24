interface ScrollContainerProps {
  children: React.ReactNode;
}

/**
 * Scroll-snap has been removed in favor of natural free scroll.
 * See .snap-container / .snap-slide in globals.css — both are now
 * inert (scroll-snap-type/align: none).
 */
export function ScrollContainer({ children }: ScrollContainerProps) {
  return (
    <div className="snap-container h-[100svh] overflow-y-auto md:h-screen">
      {children}
    </div>
  );
}
