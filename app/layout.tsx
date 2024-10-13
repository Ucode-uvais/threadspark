import type { Metadata } from "next";
/* import localFont from "next/font/local"; */
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThreadSpark",
  description:
    "ThreadSpark AI is a powerful Next.js application that leverages AI to generate engaging content for various social media platforms. This project uses cutting-edge technologies to provide users with an intuitive interface for creating X threads, Instagram captions, and LinkedIn posts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`${inter.className} bg-black text-white antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
