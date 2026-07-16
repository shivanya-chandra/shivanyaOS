import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shivanyaos.pages.dev"),
  title: "ShivanyaOS · Shivanya Chandra",
  description: "Backend systems, AI infrastructure, observability, and hard-won engineering mental models by Shivanya Chandra.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    title: "ShivanyaOS · Shivanya Chandra",
    description: "Systems, signals, and the person using them. Explore Shivanya Chandra's interactive portfolio.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "ShivanyaOS by Shivanya Chandra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShivanyaOS · Shivanya Chandra",
    description: "Systems, signals, and the person using them.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
