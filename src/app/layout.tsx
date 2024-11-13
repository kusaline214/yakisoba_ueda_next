import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Yuji_Mai } from "next/font/google";

const yujiMai = Yuji_Mai({
  subsets: ["latin"], 
  weight: "400",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "うえだ 焼きそば専門店",
  description: "うえだ 焼きそば専門店",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable}${yujiMai.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
