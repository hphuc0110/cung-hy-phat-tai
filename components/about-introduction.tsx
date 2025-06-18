import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function AboutIntroduction() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      {/* Phần 1: Câu Chuyện Về Cung Hỷ Phát Tài */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-playfair-display font-bold text-dark-red text-center mb-6">
          Câu Chuyện Về Cung Hỷ Phát Tài
        </h2>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Nơi mỗi bàn tiệc là một lần gieo lộc, mỗi món ăn là một niềm vui bất ngờ, và mỗi thực khách đều bước ra với
          cảm giác đủ đầy, cả trong lòng lẫn trong tâm.
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <Image
              src="/images/about-us-kitchen.webp"
              alt="Modern Kitchen"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-playfair-display font-bold mb-4 text-dark-red">
              Hành Trình Mang Lộc Đến Từng Món Ăn
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Cung Hỷ Phát Tài được tạo nên từ mong muốn mang tinh thần "chiêu đãi như khách quý - tiếp đãi như người
              nhà" vào từng mâm tiệc Trung Hoa. Từ xưởng dimsum nghi ngút khói đến đĩa cua sốt đậm đà, tất cả đều được
              chế biến từ nguyên liệu tươi mới, nêm nếm bằng sự tận tâm và một chút may mắn dành riêng cho quý thực
              khách.
            </p>
          </div>
        </div>
      </div>

      {/* Phần 2: Sứ Mệnh & Triết Lý Cốt Lõi */}
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-playfair-display font-bold text-dark-red text-center mb-6">
          Sứ Mệnh & Triết Lý Cốt Lõi
        </h2>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">
          Không chỉ dừng lại ở món ăn, Cung Hỷ Phát Tài chọn tinh thần hào sảng - vui vẻ - phóng khoáng lan tỏa làm kim
          chỉ nam. Với triết lý "Ăn ngon - Cười khoái - Rước lộc về nhà", Cung Hỷ không chạy theo sang trọng xa vời, mà
          chọn cách làm món ăn tử tế, giá hợp lý, phục vụ tận tình, mang lại cảm giác "ăn ngon là đón lộc".
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-bold text-dark-red mb-2">Tâm Huyết</h4>
              <p className="text-gray-600">Nấu ăn bằng cả trái tim, phục vụ bằng cả tấm lòng.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-bold text-dark-red mb-2">Chất Lượng</h4>
              <p className="text-gray-600">Tuyển chọn nguyên liệu tươi ngon, an toàn và hảo hạng nhất.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-bold text-dark-red mb-2">Chân Thực</h4>
              <p className="text-gray-600">Gìn giữ hương vị nguyên bản, tôn vinh giá trị ẩm thực truyền thống.</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-bold text-dark-red mb-2">Hiếu Khách</h4>
              <p className="text-gray-600">Tạo không gian ấm cúng, chào đón mọi người như người thân trong gia đình.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Phần 3: Đội Ngũ Gieo Lộc */}
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-playfair-display font-bold mb-6 text-dark-red">
            Đội Ngũ Gieo Lộc Cho Từng Món Ăn
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Linh hồn của Cung Hỷ Phát Tài chính là đội ngũ đầu bếp tài hoa, những người nghệ nhân thầm lặng với đôi tay
            khéo léo và niềm đam mê cháy bỏng. Họ không chỉ là những người nấu ăn, mà còn là những người kể chuyện, gửi
            gắm tâm tư qua từng món ăn. Cùng với đội ngũ phục vụ tận tình, chúng tôi là một gia đình lớn, luôn sẵn sàng
            chào đón và mang đến cho bạn những khoảnh khắc đáng nhớ.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LtpcgXT5vXunA7qwFBg8ASFX7tFSjn.png"
            alt="Chef cooking with fire"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}
