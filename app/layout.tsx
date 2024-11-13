import "./globals.css";
import Lenify from "@/hooks/Lenis";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oluwatosin Yuusf",
  description: "Oluwatosin Yusuf's Software Engineer Portfolio",
  applicationName: "Software Engineer Portfolio",
  authors: { name: "Oluwatosin Yusuf", url: "https://www.niyo.co" },
  keywords: [
    "Porfolio",
    "Frontend Developer",
    "Frontend Engineer",
    "Backend Developer",
    "Backend Engineer",
    "Software Engineer",
    "Software Developer",
    "Fullstack Developer",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Lenify>{children}</Lenify>
      </body>
    </html>
  );
}
