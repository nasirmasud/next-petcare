import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pet Care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          type='image/x-icon'
          sizes='32x32'
          href='/favicon.ico'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-sm text-slate-300 bg-[#3A3B3C] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
