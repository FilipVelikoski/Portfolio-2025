import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.scss";
import { silka } from "@/fonts";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Filip Velikoski - Portfolio",
  description:
    "A portfolio of Filip Velikoski, a Front-end Software Engineer based in Ohrid, Macedonia.",
  authors: [{ name: "Filip Velikoski", url: "" }],
  openGraph: {
    title: "Filip Velikoski - Portfolio",
    description:
      "A portfolio of Filip Velikoski, a Front-end Software Engineer based in Ohrid, Macedonia",
    url: "",
    siteName: "Filip Velikoski - Portfolio",
    type: "website",
    images: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${silka.className}`}
        data-new-gr-c-s-check-loaded="12.12009.0"
        data-gr-ext-installed=""
      >
        <ThemeProvider attribute="class">
          <div
            style={{
              flex: "none",
              height: "100%",
              left: "calc(50.00000000000002% - 100% / 2)",
              pointerEvents: "none",
              position: "fixed",
              top: "0",
              width: "100%",
              zIndex: "4",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundSize: "64px",
                backgroundRepeat: "repeat",
                backgroundImage: "url(/Static.png)",
                opacity: "0.06",
                borderRadius: "0px",
              }}
            />
          </div>

          {children}
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
