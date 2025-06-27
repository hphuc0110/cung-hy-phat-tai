import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google" // Import Playfair Display
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "700"], // Chọn các trọng lượng bạn muốn sử dụng
})

export const metadata: Metadata = {
  title: "Cung hỷ phát tài",
  description: "Ứng dụng đặt món ăn trực tiếp tại nhà hàng Cung hỷ phát tài",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfairDisplay.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
