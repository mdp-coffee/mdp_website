export function CornerAccents() {
  return (
    <>
      <div
        className="pointer-events-none absolute left-4 top-20 z-10 h-12 w-12 border-l-2 border-t-2 border-gold/40 md:left-8 md:top-24 md:h-16 md:w-16"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-4 right-4 z-10 h-12 w-12 border-b-2 border-r-2 border-gold/40 md:bottom-8 md:right-8 md:h-16 md:w-16"
        aria-hidden="true"
      />
    </>
  );
}
