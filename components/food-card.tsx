"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { FoodItem } from "@/context/cart-context"
import { useCart } from "@/context/cart-context"
import { PlusCircle } from "lucide-react"

interface FoodCardProps {
  item: FoodItem
}

export function FoodCard({ item }: FoodCardProps) {
  const { addToCart } = useCart()

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-black">
      <div className="relative w-full h-48">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill // Updated from layout="fill"
          style={{ objectFit: "cover" }} // Updated from objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-black">{item.name}</CardTitle>
        <CardDescription className="text-sm text-gray-700 line-clamp-2">{item.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-lg font-bold text-red-600">{item.price.toLocaleString("vi-VN")} VNĐ</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button
          onClick={() => addToCart(item)}
          className="w-full gap-2 bg-dark-red text-dark-red-foreground hover:bg-dark-red/90"
        >
          <PlusCircle className="w-4 h-4" />
          Thêm vào giỏ
        </Button>
      </CardFooter>
    </Card>
  )
}
