"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ShoppingCart, MinusCircle, PlusCircle, Trash2, CheckCircle } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { toast } from "@/hooks/use-toast"
import Image from "next/image"

export function CartSidebar() {
  const { cartItems, cartTotal, itemCount, updateQuantity, removeFromCart, clearCart, tableNumber, setTableNumber } =
    useCart()
  const [notes, setNotes] = useState("")
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [isPlacingOrder, setIsPlacingOrder] = useState(false)

  // Kiểm tra xem số bàn có được tự động xác định từ QR code không
  const isTableAutoDetected =
    tableNumber &&
    typeof window !== "undefined" &&
    (new URLSearchParams(window.location.search).get("table") || localStorage.getItem("food-ordering-table"))

  const handlePlaceOrder = async () => {
    if (isPlacingOrder) return // Prevent double submission

    try {
      setIsPlacingOrder(true)

      if (cartItems.length === 0) {
        toast({
          title: "Giỏ hàng trống",
          description: "Vui lòng thêm món ăn vào giỏ hàng trước khi đặt.",
          variant: "destructive",
          duration: 3000,
        })
        return
      }
      if (!tableNumber.trim()) {
        toast({
          title: "Thiếu thông tin",
          description: "Vui lòng nhập số bàn của bạn.",
          variant: "destructive",
          duration: 3000,
        })
        return
      }

      // Prepare order data
      const orderData = {
        items: cartItems,
        total: cartTotal,
        tableNumber: tableNumber.trim(),
        notes: notes.trim(),
        timestamp: new Date().toISOString(),
        orderNumber: `ORD-${Date.now()}`,
      }

      console.log("Placing order:", orderData)

      // Send to Google Sheets
      const response = await fetch("/api/submit-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      console.log("Order submitted successfully:", result)

      // Show success message
      toast({
        title: "Đặt hàng thành công!",
        description: `Đơn hàng ${orderData.orderNumber} cho bàn số ${tableNumber} đã được gửi. Tổng tiền: ${cartTotal.toLocaleString("vi-VN")} VNĐ.`,
        variant: "default",
        duration: 1000,
      })

      // Clear form and close cart
      clearCart()
      setNotes("")
      setIsSheetOpen(false)
    } catch (error) {
      console.error("Lỗi khi đặt hàng:", error)
      toast({
        title: "Lỗi đặt hàng",
        description: "Đã xảy ra lỗi khi đặt hàng. Vui lòng thử lại.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsPlacingOrder(false)
    }
  }

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button
          variant="default"
          size="lg"
          className="fixed bottom-6 right-6 rounded-full h-16 w-16 shadow-lg flex items-center justify-center text-white bg-primary hover:bg-primary/90 z-50"
          aria-label="Mở giỏ hàng"
        >
          <ShoppingCart className="w-7 h-7" />
          {itemCount > 0 && (
            <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full sm:max-w-md h-full">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="w-6 h-6" />
            Giỏ Hàng Của Bạn ({itemCount})
          </SheetTitle>
        </SheetHeader>
        <Separator />
        <ScrollArea className="flex-1 py-4 pr-4 -mr-4 min-h-0">
          {cartItems.length === 0 ? (
            <p className="text-center text-muted-foreground">Giỏ hàng trống.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-2">
                  <Image
                    src={item.image || "/placeholder.svg?height=64&width=64"}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-md object-cover flex-shrink-0"
                  />
                  <div className="flex-1 flex flex-col items-start">
                    <h3 className="font-medium">
                      {item.name}
                      {item.selectedOption && (
                        <span className="text-sm text-muted-foreground ml-1">({item.selectedOption.name})</span>
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground">{(item.price || 0).toLocaleString("vi-VN")} VNĐ</p>
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <MinusCircle className="w-4 h-4" />
                      <span className="sr-only">Giảm số lượng</span>
                    </Button>
                    <span className="font-medium w-6 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <PlusCircle className="w-4 h-4" />
                      <span className="sr-only">Tăng số lượng</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-red-500 hover:text-red-600"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                      <span className="sr-only">Xóa món ăn</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
        <Separator />
        <div className="border-t bg-white p-4 space-y-4">
          {/* Tổng tiền */}
          <div className="flex justify-between items-center py-2 border-b">
            <span className="text-lg font-semibold">Tổng cộng:</span>
            <span className="text-xl font-bold text-primary">{cartTotal.toLocaleString("vi-VN")} VNĐ</span>
          </div>

          {/* Nhập số bàn */}
          <div className="space-y-2">
            <Label htmlFor="table-number" className="text-sm font-medium">
              Số Bàn {isTableAutoDetected ? "(Tự động xác định)" : "*"}
            </Label>
            <div className="relative">
              <Input
                id="table-number"
                placeholder={isTableAutoDetected ? "Đã xác định từ QR code" : "Nhập số bàn (VD: Bàn 5)"}
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                className={`h-12 text-base ${isTableAutoDetected ? "bg-green-50 border-green-200" : ""}`}
                disabled={isTableAutoDetected}
                readOnly={isTableAutoDetected}
              />
              {isTableAutoDetected && (
                <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-600" />
              )}
            </div>
            {isTableAutoDetected ? (
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <p className="text-sm text-green-600 font-medium">
                  Bàn số {tableNumber} đã được xác định tự động từ QR code
                </p>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Vui lòng nhập số bàn của bạn hoặc quét QR code trên bàn</p>
            )}
          </div>

          {/* Ghi chú */}
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-sm font-medium">
              Ghi Chú
            </Label>
            <Textarea
              id="notes"
              placeholder="Ghi chú đặc biệt cho đơn hàng (tùy chọn)"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="min-h-[80px] text-base resize-none"
            />
          </div>

          {/* Các nút hành động */}
          <div className="space-y-3">
            <Button
              onClick={handlePlaceOrder}
              className="w-full h-12 text-base font-semibold bg-dark-red text-dark-red-foreground hover:bg-dark-red/90"
              size="lg"
              disabled={isPlacingOrder}
            >
              {isPlacingOrder ? "Đang xử lý..." : "Đặt Hàng Ngay"}
            </Button>
            {cartItems.length > 0 && (
              <Button
                variant="outline"
                onClick={clearCart}
                className="w-full h-10 text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
                disabled={isPlacingOrder}
              >
                Xóa Giỏ Hàng
              </Button>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
