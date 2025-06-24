"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { toast } from "@/hooks/use-toast"

export interface FoodItemOption {
  name: string // e.g., "Lồng 3", "Lồng 6"
  price: number
}

export interface FoodItem {
  id: string
  name: string
  description: string
  image: string
  mainCategory: string
  subCategory: string
  price?: number // Optional if options are present
  options?: FoodItemOption[] // New field for multiple price options
}

export interface CartItem extends FoodItem {
  quantity: number
  selectedOption?: FoodItemOption // Store the selected option
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: FoodItem, selectedOption?: FoodItemOption) => void // Modified to accept selectedOption
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

    const storedTableNumber = localStorage.getItem("food-ordering-table")
    if (storedTableNumber) {
      setTableNumber(storedTableNumber)
    }

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

  const addToCart = (item: FoodItem, selectedOption?: FoodItemOption) => {
    setCartItems((prevItems) => {
      // Create a unique ID for cart item if it has options
      const cartItemId = selectedOption
        ? `${item.id}-${selectedOption.name.replace(/\s/g, "-").toLowerCase()}`
        : item.id

      const existingItem = prevItems.find((i) => i.id === cartItemId)

      if (existingItem) {
        toast({
          title: "Đã cập nhật giỏ hàng",
          description: `${item.name} ${selectedOption ? `(${selectedOption.name})` : ""} số lượng đã tăng lên ${existingItem.quantity + 1}.`,
          duration: 1000,
        })
        return prevItems.map((i) => (i.id === cartItemId ? { ...i, quantity: i.quantity + 1 } : i))
      } else {
        toast({
          title: "Đã thêm vào giỏ hàng",
          description: `${item.name} ${selectedOption ? `(${selectedOption.name})` : ""} đã được thêm vào giỏ hàng.`,
          duration: 1000,
        })
        // Use the price from selectedOption if available, otherwise use item.price
        const priceToUse = selectedOption ? selectedOption.price : item.price
        return [...prevItems, { ...item, id: cartItemId, price: priceToUse!, quantity: 1, selectedOption }]
      }
    })
  }

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((i) => i.id === itemId)
      if (itemToRemove) {
        toast({
          title: "Đã xóa khỏi giỏ hàng",
          description: `${itemToRemove.name} ${itemToRemove.selectedOption ? `(${itemToRemove.selectedOption.name})` : ""} đã được xóa khỏi giỏ hàng.`,
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

  const cartTotal = cartItems.reduce((total, item) => {
    // Use selectedOption price if available, otherwise fallback to item.price
    const itemPrice = item.selectedOption ? item.selectedOption.price : item.price
    return total + (itemPrice || 0) * item.quantity
  }, 0)

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
