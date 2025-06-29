"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { FoodItem } from "@/context/cart-context"
import { Clock, Star, Sparkles, Lock } from "lucide-react"

interface ComingSoonCardProps {
  item: FoodItem
}

export function ComingSoonCard({ item }: ComingSoonCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 relative">
      {/* Coming Soon Badge */}
      <div className="absolute top-3 right-3 z-10">
        <Badge className="bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold px-3 py-1 text-xs">
          <Sparkles className="w-3 h-3 mr-1" />
          COMING SOON
        </Badge>
      </div>

      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-lg filter grayscale hover:grayscale-0 transition-all duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent" />

        {/* Coming Soon Text Overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center text-white text-sm font-medium">
            <Clock className="w-4 h-4 mr-2" />
            Sắp ra mắt
          </div>
        </div>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-orange-800 flex items-center">
          {item.name}
          <Star className="w-4 h-4 ml-2 text-yellow-500" />
        </CardTitle>
        <CardDescription className="text-sm text-orange-600 line-clamp-2 font-medium">
          {item.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="space-y-2">
          <p className="text-lg font-bold text-orange-700">{item.price?.toLocaleString("vi-VN")} VNĐ</p>
          <div className="flex items-center text-sm text-orange-600">
            <Sparkles className="w-4 h-4 mr-1" />
            <span className="italic">Món đặc biệt cần đặt trước</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button disabled className="w-full gap-2 bg-gray-300 text-gray-500 cursor-not-allowed hover:bg-gray-300">
          <Lock className="w-4 h-4" />
          Chưa thể đặt
        </Button>
      </CardFooter>
    </Card>
  )
}
