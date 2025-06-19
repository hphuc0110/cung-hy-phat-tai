import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full h-[500px]">
      {/* Ảnh nền */}
      <Image
        src="/images/background.jpg"
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        priority
        className="absolute inset-0 z-0"
      />
      {/* Lớp phủ đen nhẹ */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>

      {/* Nút nằm chính giữa và thấp hơn */}
      <div className="absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Link href="/menu" passHref>
          <Button
            size="lg"
            className="bg-dark-red text-white hover:bg-red-700 text-3xl px-12 py-7 rounded-full 
              shadow-[0_0_15px_rgba(255,215,0,0.5)] border-2 border-yellow-400
              transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.7)]
              flex items-center gap-3 animate-pulse-shadow"
          >
            <Menu className="w-9 h-9" />
            Xem Thực Đơn
          </Button>
        </Link>
      </div>
    </section>
  )
}
