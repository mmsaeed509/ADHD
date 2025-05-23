import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeuroThrive - ADHD Management Platform",
  description: "Transform your ADHD challenges into strengths with our science-backed course. Learn to understand your unique brain, build lasting habits, and live a more focused life.",
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
    apple: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
  },
  manifest: '/manifest.json',
  themeColor: '#1E293B',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#1E293B" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
