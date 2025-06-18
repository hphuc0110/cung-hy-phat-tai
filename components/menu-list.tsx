"use client"

import { useState, useMemo } from "react"
import { FoodCard } from "@/components/food-card"
import { menuItems } from "@/data/menu"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils" // Import cn utility

export function MenuList() {
  const mainCategories = useMemo(() => {
    return Array.from(new Set(menuItems.map((item) => item.mainCategory)))
  }, [])

  // Thay đổi giá trị khởi tạo của selectedMainCategory thành mainCategories[0] hoặc null nếu không có danh mục nào
  const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(mainCategories[0] || null)
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null)

  // Reset sub-category when main category changes
  useState(() => {
    setSelectedSubCategory(null)
  }, [selectedMainCategory])

  const filteredItems = useMemo(() => {
    let items = menuItems
    if (selectedMainCategory) {
      items = items.filter((item) => item.mainCategory === selectedMainCategory)
    }
    if (selectedSubCategory) {
      items = items.filter((item) => item.subCategory === selectedSubCategory)
    }
    return items
  }, [selectedMainCategory, selectedSubCategory])

  const subCategories = useMemo(() => {
    if (!selectedMainCategory) return []
    const itemsInMainCategory = menuItems.filter((item) => item.mainCategory === selectedMainCategory)
    return Array.from(new Set(itemsInMainCategory.map((item) => item.subCategory)))
  }, [selectedMainCategory])

  return (
    <section
      id="menu"
      className="relative py-12 md:py-20 bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/back.jpg")' }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div> {/* Lớp phủ mờ */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-playfair-display font-bold text-center mb-8 text-white">Thực Đơn</h2>

        {/* Main Category Tabs */}
        <div className="mb-6">
          {/* Trong Tabs component, thay đổi giá trị `value` và `onValueChange` */}
          <Tabs
            value={selectedMainCategory || ""} // Thay đổi "all" thành "" hoặc danh mục mặc định
            onValueChange={(value) => setSelectedMainCategory(value === "" ? null : value)}
          >
            <ScrollArea className="max-w-full pb-2">
              <TabsList className="flex justify-center flex-wrap h-auto bg-white">
                {/* Xóa bỏ TabsTrigger "Tất Cả" */}
                {/*
                <TabsTrigger
                  value="all"
                  className={cn(
                    "data-[state=active]:bg-dark-red data-[state=active]:text-yellow-400",
                    "text-dark-red hover:bg-red-50 hover:text-dark-red",
                  )}
                >
                  Tất Cả
                </TabsTrigger>
                */}
                <TabsTrigger
                  value="Món Nóng"
                  className={cn(
                    "data-[state=active]:bg-dark-red data-[state=active]:text-yellow-400",
                    "text-dark-red hover:bg-red-50 hover:text-dark-red",
                  )}
                >
                  Món Nóng
                </TabsTrigger>
                <TabsTrigger
                  value="Dimsum"
                  className={cn(
                    "data-[state=active]:bg-dark-red data-[state=active]:text-yellow-400",
                    "text-dark-red hover:bg-red-50 hover:text-dark-red",
                  )}
                >
                  Dimsum
                </TabsTrigger>
                <TabsTrigger
                  value="Đồ Uống"
                  className={cn(
                    "data-[state=active]:bg-dark-red data-[state=active]:text-yellow-400",
                    "text-dark-red hover:bg-red-50 hover:text-dark-red",
                  )}
                >
                  Đồ Uống
                </TabsTrigger>
                <TabsTrigger
                  value="Món đặt trước"
                  className={cn(
                    "data-[state=active]:bg-dark-red data-[state=active]:text-yellow-400",
                    "text-dark-red hover:bg-red-50 hover:text-dark-red",
                  )}
                >
                  Món đặt trước
                </TabsTrigger>
              </TabsList>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </Tabs>
        </div>

        {/* Sub Category Buttons (only show if a main category is selected) */}
        {selectedMainCategory && subCategories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={selectedSubCategory === null ? "default" : "outline"}
              onClick={() => setSelectedSubCategory(null)}
              className={cn(
                selectedSubCategory === null
                  ? "bg-dark-red text-yellow-400 hover:bg-dark-red/90"
                  : "border-dark-red text-dark-red bg-white hover:bg-red-50 hover:text-dark-red",
              )}
            >
              Tất Cả ({selectedMainCategory})
            </Button>
            {subCategories.map((subCategory) => (
              <Button
                key={subCategory}
                variant={selectedSubCategory === subCategory ? "default" : "outline"}
                onClick={() => setSelectedSubCategory(subCategory)}
                className={cn(
                  selectedSubCategory === subCategory
                    ? "bg-dark-red text-yellow-400 hover:bg-dark-red/90"
                    : "border-dark-red text-dark-red bg-white hover:bg-red-50 hover:text-dark-red",
                )}
              >
                {subCategory}
              </Button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
