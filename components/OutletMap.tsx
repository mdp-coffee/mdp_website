"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import type { OutletAddress } from "@/lib/types";

const outletIcon = L.divIcon({
  className: "",
  html: '<span style="display:block;width:14px;height:14px;border-radius:50%;background:#70120E;border:2px solid #FEC87F;box-shadow:0 0 0 1px rgba(12,12,12,0.35);"></span>',
  iconSize: [14, 14],
  iconAnchor: [7, 7],
  popupAnchor: [0, -8],
});

// Trailing parenthetical in the address (e.g. "(Building Aquila)") is the only
// signal that distinguishes multiple outlets for the same client in the same city.
function extractBranch(address: string): string | null {
  const match = address.match(/\(([^)]+)\)\s*$/);
  return match?.[1] ?? null;
}

export default function OutletMap({ outlets }: { outlets: OutletAddress[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const groups = useMemo(() => {
    const byCity = new Map<string, { outlet: OutletAddress; index: number }[]>();
    outlets.forEach((outlet, index) => {
      const existing = byCity.get(outlet.city);
      if (existing) {
        existing.push({ outlet, index });
      } else {
        byCity.set(outlet.city, [{ outlet, index }]);
      }
    });
    return Array.from(byCity.entries());
  }, [outlets]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Hard guard: if this exact DOM node was already initialized by Leaflet
    // (Strict Mode's dev double-invoke, or a Fast Refresh re-run reusing the
    // same node), bail out immediately instead of trying to init a second
    // map on it — this is the actual, direct fix, not a guess at cleanup timing.
    if ((container as unknown as { _leaflet_id?: number })._leaflet_id) {
      return;
    }

    const map = L.map(container, { scrollWheelZoom: false });
    mapInstanceRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    if (outlets.length > 0) {
      const bounds = L.latLngBounds(outlets.map((o) => [o.lat, o.lng] as [number, number]));
      map.fitBounds(bounds, { padding: [40, 40] });
    }

    outlets.forEach((outlet, i) => {
      const marker = L.marker([outlet.lat, outlet.lng], { icon: outletIcon })
        .addTo(map)
        .bindPopup(
          `<p style="font-weight:bold;margin:0 0 4px;">${outlet.client}</p><p style="margin:0 0 2px;">${outlet.city}</p><p style="margin:0;">${outlet.address}</p>`
        );
      markersRef.current.set(`${outlet.clientSlug}-${i}`, marker);
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
      markersRef.current.clear();
      delete (container as unknown as { _leaflet_id?: number })._leaflet_id;
    };
  }, [outlets]);

  function handleListClick(key: string) {
    const marker = markersRef.current.get(key);
    if (!marker) return;
    mapInstanceRef.current?.flyTo(marker.getLatLng(), 15, { duration: 0.8 });
    marker.openPopup();
  }

  return (
    <div className="flex flex-col md:flex-row md:h-[600px]">
      <div
        ref={containerRef}
        className="h-[500px] w-full md:order-2 md:h-[600px] md:flex-1"
      />
      <div className="w-full border-t border-brown/10 md:order-1 md:h-[600px] md:w-[300px] md:flex-shrink-0 md:overflow-y-auto md:border-t-0 md:border-r">
        {groups.map(([city, items]) => (
          <div key={city}>
            <p className="sticky top-0 bg-paper2 px-4 py-2 font-condensed text-xs uppercase tracking-widest text-rust/70">
              {city}
            </p>
            {items.map(({ outlet, index }) => {
              const key = `${outlet.clientSlug}-${index}`;
              const branch = extractBranch(outlet.address);
              const isActive = activeKey === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setActiveKey(key);
                    handleListClick(key);
                  }}
                  className={`block w-full border-l-2 px-4 py-3 text-left font-sans text-sm transition-colors ${
                    isActive
                      ? "border-rust bg-gold/10 text-brown"
                      : "border-transparent text-brown/70 hover:bg-paper2"
                  }`}
                >
                  {outlet.client}
                  {branch ? ` — ${branch}` : ""}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
