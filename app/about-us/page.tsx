"use client"

import { AboutSection } from "@/components/about-section"
import { CartSidebar } from "@/components/cart-sidebar"
import { CartProvider } from "@/context/cart-context"
import { Toaster } from "@/components/ui/toaster"

export default function AboutUsPage() {
  return (
    <CartProvider>
      <main className="min-h-screen">
        <AboutSection />
        <CartSidebar />
        <Toaster position="top-right" />
      </main>
    </CartProvider>
  )
}
