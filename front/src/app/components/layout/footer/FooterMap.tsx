"use client";

import RevealOnSroll from "../../ui/animation/RevealOnScroll";
import { MapContainer } from "../../ui/map/MapConteiner";

export default function FooterMap() {
  return (
    <div className="flex justify-center lg:justify-end">
      <div
        className="
      relative
      z-0
      w-full
      max-w-[220px]
      h-[160px]
      overflow-hidden
      rounded-lg
      border border-white/10
      poiter-events-none"
      >
        <RevealOnSroll>
          <MapContainer />
        </RevealOnSroll>
      </div>
    </div>
  );
}
