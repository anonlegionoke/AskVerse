import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AskVerse",
  description: "AskVerse - Powered by LangChain",
  icons: {
    icon: "/askverse-icon-minimal.png",
    apple: "/askverse-icon-minimal.png",
    shortcut: "/askverse-icon-minimal.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
