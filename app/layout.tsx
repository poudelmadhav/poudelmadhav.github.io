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
    "Madhav Paudel is a Principal Engineer at Chulo Solutions Pvt. Ltd. (branch of Namespace Inc., Japan), specializing in Ruby on Rails, JavaScript, web development, and cloud solutions. Leading teams and delivering scalable applications with expertise in AWS, Google Cloud, PostgreSQL, Docker, and Agile methodologies.",
  keywords: [
    "Madhav Paudel",
    "Principal Engineer",
    "Software Developer",
    "Ruby on Rails Developer",
    "Full Stack Developer",
    "Web Application Developer",
    "Chulo Solutions",
    "Namespace Inc",
    "Techrise",
    "Ruby",
    "Rails",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "Web Development",
    "RESTful APIs",
    "API Development",
    "PostgreSQL",
    "MySQL",
    "AWS",
    "Google Cloud",
    "GCP",
    "Docker",
    "CI/CD",
    "GitHub",
    "Git",
    "Agile",
    "Project Management",
    "Team Leadership",
    "Mentoring",
    "Nepal",
    "Kathmandu",
    "Software Engineer",
    "Tech Lead",
    "Code Reviews",
    "Scalable Applications",
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
    title: "Madhav Paudel - Principal Engineer | Ruby on Rails & Full Stack Developer",
    description:
      "Principal Engineer at Chulo Solutions (Namespace Inc., Japan) specializing in Ruby on Rails, JavaScript, RESTful APIs, cloud solutions (AWS, GCP), Docker, and leading Agile development teams. 7+ years of experience building scalable web applications.",
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
    title: "Madhav Paudel - Principal Engineer | Ruby on Rails & Full Stack Developer",
    description:
      "Principal Engineer at Chulo Solutions (Namespace Inc., Japan) with 7+ years experience in Ruby on Rails, JavaScript, cloud solutions, and Agile team leadership.",
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
      parentOrganization: {
        "@type": "Organization",
        name: "Namespace Inc.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "Japan",
        },
      },
    },
    description:
      "Principal Engineer with 7+ years of experience specializing in Ruby on Rails, JavaScript, web development, cloud solutions (AWS, GCP), Docker, and Agile team leadership. Leading development teams to deliver scalable web applications for international clients.",
    sameAs: [
      "https://linkedin.com/in/poudelmadhav143",
      "https://github.com/poudelmadhav",
      "https://blog.poudelmadhav.com.np",
    ],
    knowsAbout: [
      "Ruby",
      "Ruby on Rails",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "Web Development",
      "RESTful APIs",
      "PostgreSQL",
      "MySQL",
      "AWS",
      "Google Cloud Platform",
      "GCP",
      "Heroku",
      "Docker",
      "CI/CD",
      "Git",
      "GitHub",
      "Jira",
      "Scrum",
      "Kanban",
      "Agile Methodologies",
      "Project Management",
      "Team Leadership",
      "Mentoring",
      "Code Reviews",
      "Problem Solving",
      "Software Engineering",
      "Cloud Computing",
      "API Development",
      "Scalable Applications",
      "Database Design",
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
