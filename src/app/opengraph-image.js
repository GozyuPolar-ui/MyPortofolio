import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0E12",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ color: "#3ED9C4", fontSize: 24, marginBottom: 20 }}>
          // system evolution log
        </div>
        <div style={{ color: "#E8E6E1", fontSize: 64, fontWeight: 700 }}>
          This is evolution.
        </div>
        <div style={{ color: "#5C6670", fontSize: 26, marginTop: 24 }}>
          tony@build — AI assistants, languages, tools.
        </div>
      </div>
    ),
    { ...size }
  );
}