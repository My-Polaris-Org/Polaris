import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: "../assets/fonts/Vazir.woff2",
});

export const metadata: Metadata = {
  title: "Polaris",
  description: "Polaris school management system",
  other: {
    enamad: "23274555",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" className={`${myFont.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
