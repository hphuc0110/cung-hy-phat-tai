"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { toast } from "@/hooks/use-toast"

export interface FoodItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  mainCategory: string // Thêm trường này
  subCategory: string // Thêm trường này
}

export interface CartItem extends FoodItem {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: FoodItem) => void
  removeFromCart: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  cartTotal: number
  itemCount: number
  tableNumber: string
  setTableNumber: (tableNumber: string) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [tableNumber, setTableNumber] = useState<string>("")

  useEffect(() => {
    const storedCart = localStorage.getItem("food-ordering-cart")
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }

    // Lấy số bàn từ localStorage nếu có
    const storedTableNumber = localStorage.getItem("food-ordering-table")
    if (storedTableNumber) {
      setTableNumber(storedTableNumber)
    }

    // Kiểm tra tham số URL cho số bàn
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      const tableParam = urlParams.get("table")
      if (tableParam) {
        setTableNumber(tableParam)
        localStorage.setItem("food-ordering-table", tableParam)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("food-ordering-cart", JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    if (tableNumber) {
      localStorage.setItem("food-ordering-table", tableNumber)
    }
  }, [tableNumber])

  const addToCart = (item: FoodItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)
      if (existingItem) {
        toast({
          title: "Đã cập nhật giỏ hàng",
          description: `${item.name} số lượng đã tăng lên ${existingItem.quantity + 1}.`,
          duration: 1000,
        })
        return prevItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
      } else {
        toast({
          title: "Đã thêm vào giỏ hàng",
          description: `${item.name} đã được thêm vào giỏ hàng.`,
          duration: 1000,
        })
        return [...prevItems, { ...item, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((i) => i.id === itemId)
      if (itemToRemove) {
        toast({
          title: "Đã xóa khỏi giỏ hàng",
          description: `${itemToRemove.name} đã được xóa khỏi giỏ hàng.`,
        })
      }
      return prevItems.filter((item) => item.id !== itemId)
    })
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    setCartItems((prevItems) => {
      if (quantity <= 0) {
        return prevItems.filter((item) => item.id !== itemId)
      }
      return prevItems.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    })
  }

  const clearCart = () => {
    setCartItems([])
    toast({
      title: "Giỏ hàng đã được xóa",
      description: "Tất cả các món ăn đã được xóa khỏi giỏ hàng.",
    })
  }

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        itemCount,
        tableNumber,
        setTableNumber,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
