import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #f8e8ee, #e3d5ff)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "60px",
      }}
    >
      <div
        style={{
          fontSize: 80,
          fontWeight: 700,
          color: "#2b2b2b",
        }}
      >
        VOOS
      </div>

      <div
        style={{
          fontSize: 42,
          marginTop: 20,
          color: "#444",
        }}
      >
        Estética Integral
      </div>

      <div
        style={{
          fontSize: 32,
          marginTop: 30,
          color: "#666",
        }}
      >
        Centro de Estética en Córdoba Capital
      </div>
    </div>,
    {
      ...size,
    },
  );
}
