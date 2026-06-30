"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { galleryItems, type GalleryItem } from "@/content/gallery";

type Category = "all" | "outlets" | "coffee" | "people" | "clients";

const tabs: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "outlets", label: "Our Outlets" },
  { id: "coffee", label: "The Coffee" },
  { id: "people", label: "Our People" },
  { id: "clients", label: "Clients & Campuses" },
];

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ items, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  const item = items[currentIndex];
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        onClick={onClose}
        className="absolute right-6 top-6 font-condensed text-3xl text-white/50 transition-colors hover:text-white"
        aria-label="Close lightbox"
      >
        ×
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 font-condensed text-4xl text-white/40 transition-colors hover:text-white"
        aria-label="Previous image"
      >
        ←
      </button>

      <div
        className="relative h-[90vh] w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-contain"
          sizes="90vw"
        />
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 font-condensed text-4xl text-white/40 transition-colors hover:text-white"
        aria-label="Next image"
      >
        →
      </button>

      <p className="absolute bottom-6 font-condensed text-xs tracking-widest text-white/30">
        {currentIndex + 1} / {items.length}
      </p>
    </div>
  );
}

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  function handleCategoryChange(cat: Category) {
    setActiveCategory(cat);
    setLightboxIndex(null);
  }

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevImage = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + filtered.length) % filtered.length : null
    );
  }, [filtered.length]);

  const nextImage = useCallback(() => {
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % filtered.length : null
    );
  }, [filtered.length]);

  return (
    <>
      {/* Category tabs — sticky below NavBar */}
      <div className="sticky top-16 z-40 border-b border-brown/10 bg-paper">
        <div className="flex overflow-x-auto px-6 md:px-20">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleCategoryChange(tab.id)}
              className={`flex-shrink-0 border-b-2 px-5 py-4 font-condensed text-[13px] tracking-wide transition-colors ${
                activeCategory === tab.id
                  ? "border-brown bg-brown text-cream"
                  : "border-transparent text-brown/50 hover:text-brown"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Photo grid */}
      <div className="px-6 py-12 md:px-20">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
          {filtered.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-square overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown"
              aria-label={`View: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-[#411915] opacity-0 transition-opacity duration-300 group-hover:opacity-25" />
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center font-sans text-brown/40">
            No photos in this category yet.
          </p>
        )}

        <p className="mt-12 font-sans text-sm text-brown/35">
          More photos added as MDP locations expand. Real photography from our outlets coming soon.
        </p>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
