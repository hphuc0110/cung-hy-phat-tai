"use client"

import { useState, useMemo, useEffect } from "react"
import { FoodCard } from "@/components/food-card"
import { menuItems } from "@/data/menu"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Clock, Calendar } from "lucide-react"
import { ComingSoonCard } from "@/components/coming-soon-card"

export function MenuList() {
  const mainCategories = useMemo(() => {
    return Array.from(new Set(menuItems.map((item) => item.mainCategory)))
  }, [])

  const [selectedMainCategory, setSelectedMainCategory] = useState<string | null>(mainCategories[0] || null)
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>("") // State for search term

  // Reset sub-category when main category changes
  useEffect(() => {
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

    // Filter by search term
    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase()
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(lowerCaseSearchTerm) ||
          item.description.toLowerCase().includes(lowerCaseSearchTerm),
      )
    }

    return items
  }, [selectedMainCategory, selectedSubCategory, searchTerm]) // Add searchTerm to dependencies

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

        {/* Search Bar */}
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Tìm kiếm món ăn..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md mx-auto block bg-white text-black border-gray-300 focus:border-dark-red focus:ring-dark-red"
          />
        </div>

        {/* Main Category Tabs */}
        <div className="mb-6">
          <Tabs
            value={selectedMainCategory || ""}
            onValueChange={(value) => {
              setSelectedMainCategory(value === "" ? null : value)
              setSearchTerm("") // Clear search term when changing category
            }}
          >
            <ScrollArea className="max-w-full pb-2">
              <TabsList className="flex justify-center flex-wrap h-auto bg-white">
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
                  value="Món đặt trước (Coming Soon)"
                  className={cn(
                    "data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-600 data-[state=active]:to-red-600 data-[state=active]:text-white",
                    "text-orange-600 hover:bg-orange-50 hover:text-orange-700 font-semibold",
                  )}
                >
                  📅 Món đặt trước (Coming Soon)
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

        {/* Coming Soon Notice */}
        {selectedMainCategory === "Món đặt trước (Coming Soon)" && (
          <div className="mb-8 mx-auto max-w-2xl">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg p-6 text-center shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <Calendar className="w-6 h-6 mr-2" />
                <h3 className="text-xl font-bold">Món Đặt Trước - Coming Soon</h3>
                <Clock className="w-6 h-6 ml-2" />
              </div>
              <p className="text-orange-100 mb-2">
                Những món ăn cao cấp này cần được đặt trước để đảm bảo chất lượng và độ tươi ngon tốt nhất
              </p>
              <p className="text-sm text-orange-200">
                📞 Vui lòng liên hệ trực tiếp với nhà hàng để đặt trước những món đặc biệt này!
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) =>
            item.mainCategory === "Món đặt trước (Coming Soon)" ? (
              <ComingSoonCard key={item.id} item={item} />
            ) : (
              <FoodCard key={item.id} item={item} />
            ),
          )}
        </div>
      </div>
    </section>
  )
}
