import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "SaaSphere - SaaS Management Platform";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const interSemiBold = await fetch(
    new URL("./Inter_18pt-SemiBold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: "128px",
          background: "linear-gradient(to bottom right, #4F46E5, #7C3AED)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div style={{ fontSize: "96px", fontWeight: "bold" }}>SaaSphere</div>
        <div
          style={{
            fontSize: "36px",
            marginTop: "24px",
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          Streamline your SaaS ecosystem
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
