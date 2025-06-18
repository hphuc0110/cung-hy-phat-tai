"use client"

import { MenuList } from "@/components/menu-list"
import { CartSidebar } from "@/components/cart-sidebar"
import { CartProvider } from "@/context/cart-context"
import { Toaster } from "@/components/ui/toaster"

export default function MenuPage() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <MenuList />
        </main>
        <CartSidebar />
        <Toaster position="top-right" />
      </div>
    </CartProvider>
  )
}
