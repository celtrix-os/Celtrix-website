import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Bangers } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers", // optional if you want to use CSS variable
});


export const metadata = {
  title: "Celtrix",
  description: "Set up your web app first before building with AI. Celtrix is a CLI that generates a full-stack web app that already runs: frontend, API and database, connected and configured.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bangers.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}