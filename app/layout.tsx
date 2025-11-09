import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://poudelmadhav.com.np"),
  title: {
    default: "Madhav Paudel - Principal Engineer | Software Developer & Team Leader",
    template: "%s | Madhav Paudel",
  },
  description:
    "Madhav Paudel is a Principal Engineer at Chulo Solutions Pvt. Ltd., specializing in software development, cloud solutions, and engineering leadership. Expert in JavaScript, TypeScript, React, Node.js, Python, AWS, Docker, and MongoDB.",
  keywords: [
    "Madhav Paudel",
    "Principal Engineer",
    "Software Developer",
    "Engineering Leader",
    "Chulo Solutions",
    "Web Development",
    "Mobile Apps",
    "Cloud Solutions",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "MongoDB",
    "Nepal",
    "Kathmandu",
    "Software Engineer",
    "Tech Lead",
  ],
  authors: [{ name: "Madhav Paudel", url: "https://poudelmadhav.com.np" }],
  creator: "Madhav Paudel",
  publisher: "Madhav Paudel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://poudelmadhav.com.np",
    siteName: "Madhav Paudel - Portfolio",
    title: "Madhav Paudel - Principal Engineer | Software Developer & Team Leader",
    description:
      "Principal Engineer at Chulo Solutions Pvt. Ltd., specializing in software development, cloud solutions, and engineering leadership. Building scalable applications and leading high-performing teams.",
    images: [
      {
        url: "/software-engineer-headshot.png",
        width: 1200,
        height: 630,
        alt: "Madhav Paudel - Principal Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madhav Paudel - Principal Engineer | Software Developer & Team Leader",
    description:
      "Principal Engineer at Chulo Solutions Pvt. Ltd., specializing in software development, cloud solutions, and engineering leadership.",
    images: ["/software-engineer-headshot.png"],
    creator: "@poudelmadhav143",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://poudelmadhav.com.np",
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Madhav Paudel",
    url: "https://poudelmadhav.com.np",
    image: "https://poudelmadhav.com.np/software-engineer-headshot.png",
    jobTitle: "Principal Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Chulo Solutions Pvt. Ltd.",
    },
    description:
      "Principal Engineer specializing in software development, cloud solutions, and engineering leadership",
    sameAs: [
      "https://linkedin.com/in/poudelmadhav143",
      "https://github.com/poudelmadhav",
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "AWS",
      "Docker",
      "MongoDB",
      "Software Engineering",
      "Cloud Computing",
      "Web Development",
      "Mobile Development",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "Nepal",
    },
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
