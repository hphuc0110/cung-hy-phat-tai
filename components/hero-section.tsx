import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-center text-center p-4">
      <Image
        src="/images/background.jpg"
        alt="Background"
        fill
        style={{ objectFit: "cover" }}
        priority
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>

      <div className="relative z-10">
        <div className="flex justify-center">
          <Link href="/menu" passHref>
            <Button
              size="lg"
              className="bg-dark-red text-white hover:bg-red-700 text-3xl px-12 py-7 rounded-full 
                shadow-[0_0_15px_rgba(255,215,0,0.5)] border-2 border-yellow-400
                transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,0.7)]
                flex items-center gap-3 animate-pulse-shadow" // Thêm class animate-pulse-shadow
            >
              <Menu className="w-8 h-8" /> {/* Tăng kích thước icon */}
              Xem Thực Đơn
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
