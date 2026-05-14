import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SeaSoul Wellness | Yacht Crew Mental Health",
    template: "%s | SeaSoul Wellness",
  },
  description:
    "Professional psychology and therapy services designed for yacht crew members. 24/7 crisis support, guided meditation, and specialized maritime mental health care.",
  keywords: [
    "yacht crew mental health",
    "maritime therapy",
    "seafarer counseling",
    "yachting wellness",
    "crew support at sea",
    "ocean mental health",
  ],
  openGraph: {
    title: "SeaSoul Wellness | Yacht Crew Mental Health & Therapy",
    description:
      "Specialized mental health support for yacht crew. Therapy, crisis intervention, meditation, and wellness programs designed for life at sea.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#060a1f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-[#060a1f] text-[#eef0fb]">{children}</body>
    </html>
  );
}