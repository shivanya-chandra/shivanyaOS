import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShivanyaOS · Shivanya Chandra",
  description: "Backend systems, AI infrastructure, observability, and hard-won engineering mental models by Shivanya Chandra.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
