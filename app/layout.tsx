import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Cung Hỷ Phát Tài - Nhà Hàng Dimsum & Món Trung Hoa",
  description:
    "Thưởng thức dimsum và các món Trung Hoa đặc sắc tại Cung Hỷ Phát Tài. Đặt món trực tuyến, giao hàng tận nơi. Ăn ngon - Cười khoái - Rước lộc về nhà!",
  keywords: [
    "dimsum",
    "món trung hoa",
    "nhà hàng",
    "đặt món online",
    "cung hỷ phát tài",
    "há cảo",
    "xíu mại",
    "bánh bao",
  ],
  authors: [{ name: "Cung Hỷ Phát Tài" }],
  creator: "Cung Hỷ Phát Tài",
  publisher: "Cung Hỷ Phát Tài",

  // Open Graph metadata
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://your-domain.com", // Thay thế bằng domain thực tế của bạn
    siteName: "Cung Hỷ Phát Tài",
    title: "Cung Hỷ Phát Tài - Nhà Hàng Dimsum & Món Trung Hoa",
    description:
      "Thưởng thức dimsum và các món Trung Hoa đặc sắc tại Cung Hỷ Phát Tài. Đặt món trực tuyến, giao hàng tận nơi. Ăn ngon - Cười khoái - Rước lộc về nhà!",
    images: [
      {
        url: "/images/og-image.png", // Ảnh thumbnail chính
        width: 1200,
        height: 630,
        alt: "Cung Hỷ Phát Tài - Nhà Hàng Dimsum",
      },
      {
        url: "/images/cung-hy-phat-tai.webp", // Ảnh logo
        width: 800,
        height: 600,
        alt: "Logo Cung Hỷ Phát Tài",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    site: "@cunghyphattai", // Thay thế bằng Twitter handle thực tế
    creator: "@cunghyphattai",
    title: "Cung Hỷ Phát Tài - Nhà Hàng Dimsum & Món Trung Hoa",
    description:
      "Thưởng thức dimsum và các món Trung Hoa đặc sắc tại Cung Hỷ Phát Tài. Đặt món trực tuyến, giao hàng tận nơi.",
    images: ["/images/og-image.png"],
  },

  // Additional metadata
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

  // Verification for search engines
  verification: {
    google: "your-google-verification-code", // Thay thế bằng mã xác minh Google thực tế
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // App-specific metadata
  applicationName: "Cung Hỷ Phát Tài",
  category: "Restaurant",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B0000" />
        <link rel="canonical" href="https://your-domain.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data for Restaurant */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Cung Hỷ Phát Tài",
              description: "Nhà hàng dimsum và món Trung Hoa đặc sắc",
              url: "https://your-domain.com",
              logo: "https://your-domain.com/images/cung-hy-phat-tai.webp",
              image: "https://your-domain.com/images/og-image.png",
              servesCuisine: ["Chinese", "Dimsum", "Asian"],
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Địa chỉ nhà hàng của bạn",
                addressLocality: "Thành phố",
                addressRegion: "Tỉnh/Thành phố",
                postalCode: "Mã bưu điện",
                addressCountry: "VN",
              },
              telephone: "+84-xxx-xxx-xxx",
              openingHours: ["Mo-Su 09:00-22:00"],
              hasMenu: "https://your-domain.com/menu",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfairDisplay.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ErrorBoundary>{children}</ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
