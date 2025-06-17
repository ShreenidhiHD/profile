import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#111827',
  colorScheme: 'dark'
};

export const metadata: Metadata = {
  title: "Shreenidhi H D | Full-Stack Developer",
  description: "Full-Stack Developer specializing in Python, FastAPI, React, and AWS. Building robust & scalable solutions.",
  keywords: ["Full-Stack Developer", "Python", "FastAPI", "React", "AWS", "Web Development", "Software Engineer"],
  authors: [{ name: "Shreenidhi H D" }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Shreenidhi H D Portfolio',
    title: 'Shreenidhi H D | Full-Stack Developer',
    description: 'Full-Stack Developer specializing in Python, FastAPI, React, and AWS. Building robust & scalable solutions.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-900 text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
