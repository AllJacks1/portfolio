import { ImageResponse } from "next/og"

import { projects, site } from "@/lib/site"

export const alt = `${site.name}, web developer in ${site.city}, ${site.country}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "#ffffff",
        color: "#111111",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", fontSize: 28 }}>
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: 9,
            background: "#1a4be0",
            marginRight: 16,
          }}
        />
        <div style={{ color: "#5a5a5a" }}>
          {`${site.city}, ${site.country}`}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 104,
            fontWeight: 600,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 46,
            letterSpacing: -1,
            lineHeight: 1.2,
            color: "#5a5a5a",
          }}
        >
          Web developer for company websites and internal tools
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "2px solid #e2e2e2",
          paddingTop: 28,
          fontSize: 28,
        }}
      >
        <div>Next.js · React · Supabase</div>
        <div style={{ color: "#1a4be0" }}>
          {`${projects.length} live projects`}
        </div>
      </div>
    </div>,
    size
  )
}
