"use client";

import MapEmbed from "./MapEmbed";

type MapContainerProps = {
  height?: string;
  className?: string;
};

export function MapContainer({
  height = "h-[160px]",
  className = "",
}: MapContainerProps) {
  return (
    <div
      className={`
            realtive w-full max-w-[220px] ${height}
            overflow-hidden rounden-lg
            border border-white/10
            ${className}
            `}
    >
      <MapEmbed className="grayscale brightness-90 contrast-110" />

      <a
        href="https://www.google.com/maps?ll=-31.439361,-64.125882&z=15&t=m&hl=es&gl=AR&mapclient=embed&cid=14953709280445620557"
        target="_blank"
        rel="nooperner noreferrer"
        className="
        absolute bottom-2 right-2
        bg-black/70 backdrop-blur
        text-[11px] text-white
        px-3 py-1 rounded-full
        hover:bg-black transition"
        title="Ubucación de VOOS Estética integral en Córdoba Capital"
        aria-label="Mapa con la ubicación de VOOS Estética Integral en Córdoba Capítal"
      >
        Abrir en Maps
      </a>
    </div>
  );
}
