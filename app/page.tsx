"use client"

import { useEffect, useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CartSidebar } from "@/components/cart-sidebar"
import { CartProvider } from "@/context/cart-context"
import { Toaster } from "@/components/ui/toaster"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

export default function Home() {
  const [tableNumber, setTableNumber] = useState<string | null>(null)
  const [showTableAlert, setShowTableAlert] = useState(false)

  useEffect(() => {
    // Kiểm tra tham số URL cho số bàn
    const urlParams = new URLSearchParams(window.location.search)
    const tableParam = urlParams.get("table")

    if (tableParam) {
      setTableNumber(tableParam)
      setShowTableAlert(true)

      // Ẩn thông báo sau 5 giây
      setTimeout(() => {
        setShowTableAlert(false)
      }, 5000)
    }
  }, [])

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        {/* Thông báo xác nhận số bàn */}
        {showTableAlert && tableNumber && (
          <Alert className="mx-4 mt-4 border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <strong>Chào mừng!</strong> Bạn đang ngồi tại bàn số <strong>{tableNumber}</strong>. Số bàn đã được tự
              động xác định từ QR code.
            </AlertDescription>
          </Alert>
        )}

        <main className="flex-1">
          <HeroSection />
          <AboutSection />
        </main>
        <CartSidebar />
        <Toaster position="top-right" />
      </div>
    </CartProvider>
  )
}
