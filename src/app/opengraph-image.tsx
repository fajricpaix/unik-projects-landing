import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Unik Projects — Aplikasi & Game Handphone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: 80,
          background: "linear-gradient(135deg, #2a0d10 0%, #0a0908 70%)",
          color: "#f5efe4",
        }}
      >
        <img src={`data:image/png;base64,${logo}`} width={260} height={260} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, color: "#d92d3a", fontWeight: 700, letterSpacing: 6 }}>
            UNIK STORE
          </div>
          <div style={{ fontSize: 76, fontWeight: 800, color: "#ffffff", lineHeight: 1.1 }}>
            Unik Projects
          </div>
          <div style={{ fontSize: 36, color: "#f0b429", marginTop: 16 }}>
            Aplikasi & Game Handphone
          </div>
          <div style={{ fontSize: 26, opacity: 0.7, marginTop: 12 }}>
            Studio kecil, karya iseng yang serius.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
