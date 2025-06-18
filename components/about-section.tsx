"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-12 md:py-20 bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/back.jpg")' }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div> {/* Lớp phủ mờ */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="bg-white/95 rounded-lg p-6 md:p-10 shadow-lg">
          {/* Câu Chuyện Về Cung Hỷ Phát Tài */}
          <div className="mb-12">
            <h3 className="text-3xl font-playfair-display font-bold mb-6 text-dark-red text-center">
              Câu Chuyện Về Cung Hỷ Phát Tài
            </h3>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Nơi mỗi bàn tiệc không chỉ đơn thuần là nơi sum họp, mà còn là khoảnh khắc gieo lộc đầu năm – khi từng
              tiếng cười, ánh mắt, lời chúc giao hòa cùng hương vị của ẩm thực, tạo nên một không khí đầm ấm và hân
              hoan. Mỗi món ăn được dọn lên không chỉ là sự kết hợp tinh tế giữa hương và sắc, mà còn là lời chúc phúc
              ngọt ngào gửi gắm qua từng nguyên liệu, từng cách bày trí. Tại đây, thực khách không đơn thuần đến để
              thưởng thức, mà còn để trải nghiệm – để cảm nhận sự đủ đầy trong từng câu chuyện kể, sự viên mãn trong
              từng khoảnh khắc sẻ chia. Và khi ra về, ai nấy đều mang theo một chút ấm áp trong tim, một niềm vui lấp
              lánh trong tâm hồn, như thể mình vừa nhận được món quà vô hình – đó là sự phồn thịnh, là bình an, là may
              mắn của một khởi đầu mới.
            </p>
          </div>

          {/* Sứ Mệnh & Triết Lý Cốt Lõi */}
          <div className="mb-12">
            <h3 className="text-3xl font-playfair-display font-bold mb-6 text-dark-red text-center">
              Sứ Mệnh & Triết Lý Cốt Lõi
            </h3>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Không chỉ dừng lại ở món ăn, Cung Hỷ Phát Tài chọn tinh thần hào sảng - vui vẻ - phóng khoáng lan tỏa làm
              kim chỉ nam. Với triết lý "Ăn ngon - Cười khoái - Rước lộc về nhà", Cung Hỷ không chạy theo sang trọng xa
              vời, mà chọn cách làm món ăn tử tế, giá hợp lý, phục vụ tận tình, mang lại cảm giác "ăn ngon là đón lộc".
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
                  <p className="text-gray-600">
                    Tạo không gian ấm cúng, chào đón mọi người như người thân trong gia đình.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Đội Ngũ Gieo Lộc */}
          <div>
            <h3 className="text-3xl font-playfair-display font-bold mb-6 text-dark-red text-center">
              Đội Ngũ Gieo Lộc Cho Từng Món Ăn
            </h3>
            <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <p className="text-gray-700 leading-relaxed">
                  Linh hồn của Cung Hỷ Phát Tài chính là đội ngũ đầu bếp tài hoa, những người nghệ nhân thầm lặng với
                  đôi tay khéo léo và niềm đam mê cháy bỏng. Họ không chỉ là những người nấu ăn, mà còn là những người
                  kể chuyện, gửi gắm tâm tư qua từng món ăn. Cùng với đội ngũ phục vụ tận tình, chúng tôi là một gia
                  đình lớn, luôn sẵn sàng chào đón và mang đến cho bạn những khoảnh khắc đáng nhớ.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/chef-cooking.webp"
                  alt="Chef cooking with fire"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
