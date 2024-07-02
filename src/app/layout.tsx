import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import AppBarWrapper from "@/components/AppBarWrapper";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "minTunes",
  description: "Create NFTs easily",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      
      <body className={inter.className} >
      <AppBarWrapper/>
      <Toaster position="bottom-center" />
        {children}</body>
    </html>
  );
}
