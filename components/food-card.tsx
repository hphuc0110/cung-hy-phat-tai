"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { FoodItem, FoodItemOption } from "@/context/cart-context"
import { useCart } from "@/context/cart-context"
import { PlusCircle } from "lucide-react"
import { useState } from "react"

interface FoodCardProps {
  item: FoodItem
}

export function FoodCard({ item }: FoodCardProps) {
  const { addToCart } = useCart()
  const [isOptionDialogOpen, setIsOptionDialogOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<FoodItemOption | undefined>(undefined)

  const handleAddToCartClick = () => {
    if (item.options && item.options.length > 0) {
      // If item has options, open dialog
      setIsOptionDialogOpen(true)
      setSelectedOption(item.options[0]) // Select first option by default
    } else {
      // If no options, add directly to cart
      addToCart(item)
    }
  }

  const handleConfirmAddWithOption = () => {
    if (selectedOption) {
      addToCart(item, selectedOption)
      setIsOptionDialogOpen(false)
    }
  }

  // Determine the price to display on the card
  const displayPrice =
    item.options && item.options.length > 0
      ? `${item.options[0].price.toLocaleString("vi-VN")} VNĐ - ${item.options[item.options.length - 1].price.toLocaleString("vi-VN")} VNĐ`
      : `${item.price?.toLocaleString("vi-VN")} VNĐ`

  return (
    <>
      <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-black">
        <div className="relative w-full h-48">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-lg"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold text-black">{item.name}</CardTitle>
          <CardDescription className="text-sm text-gray-700 line-clamp-2">{item.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-lg font-bold text-red-600">{displayPrice}</p>
        </CardContent>
        <CardFooter className="pt-0">
          <Button
            onClick={handleAddToCartClick}
            className="w-full gap-2 bg-dark-red text-dark-red-foreground hover:bg-dark-red/90"
          >
            <PlusCircle className="w-4 h-4" />
            Thêm vào giỏ
          </Button>
        </CardFooter>
      </Card>

      {/* Option Selection Dialog */}
      {item.options && (
        <Dialog open={isOptionDialogOpen} onOpenChange={setIsOptionDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Chọn kích thước lồng cho {item.name}</DialogTitle>
              <DialogDescription>Vui lòng chọn kích thước lồng bạn muốn thêm vào giỏ hàng.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <RadioGroup
                value={selectedOption?.name}
                onValueChange={(value) => {
                  const option = item.options?.find((opt) => opt.name === value)
                  setSelectedOption(option)
                }}
                className="flex flex-col space-y-2"
              >
                {item.options.map((option) => (
                  <div key={option.name} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.name} id={`option-${option.name}`} />
                    <Label htmlFor={`option-${option.name}`} className="flex justify-between w-full cursor-pointer">
                      <span>{option.name}</span>
                      <span className="font-semibold">{option.price.toLocaleString("vi-VN")} VNĐ</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <DialogFooter>
              <Button onClick={handleConfirmAddWithOption} disabled={!selectedOption}>
                Thêm vào giỏ ({selectedOption?.price.toLocaleString("vi-VN")} VNĐ)
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}
