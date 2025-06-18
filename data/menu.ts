import type { FoodItem } from "@/context/cart-context"
import { imageConfigDefault } from "next/dist/shared/lib/image-config"

const generateHotDishItem = (name: string, subCategory: string, price = 50000) => ({
  id: `${name
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[^\w-]/g, "")}-${subCategory.toLowerCase().replace(/\s/g, "-")}`,
  name,
  description: `${name} thơm ngon.`, // Generic description
  price,
  image: "/placeholder.svg?height=200&width=200",
  mainCategory: "Món Nóng",
  subCategory,
})

export const menuItems: FoodItem[] = [
  // Món Nóng
  // MÓN KHAI VỊ
  {
    ...generateHotDishItem("Súp ngô gà", "Món khai vị", 40000),
    image: "/images/sup-cua-ga.webp",
    description: "Súp dễ ăn, ngọt vị nguyên bản",
  },
  {
    ...generateHotDishItem("Súp ngô cua", "Món khai vị", 45000),
    image: "/images/sup-ngo-cua.webp",
    description: "Vị cua ngọt thanh, bổ dưỡng",
  },
  {
    ...generateHotDishItem("Súp bí đỏ hải sản", "Món khai vị", 55000),
    image: "/images/sup-bi-do.webp",
  },
  {
  ...generateHotDishItem("Súp hải sản chua cay", "Món khai vị", 60000),
  image: "/images/súp hải sản chua cay kiểu tứ xuyên.webp",
},
  {
    ...generateHotDishItem("Vây cá trộn thịt cua", "Món khai vị", 70000),
    image: "/images/vay-ca-thit-cua.webp",
    description: "Món cao cấp từ nguyên liệu quý hiếm",
  },
    {
  ...generateHotDishItem("Súp vây cá, bóng cá, hải sâm bào ngư", "Món khai vị", 750000),
  image: "/images/súp vây cá, bóng cá, hải sâm, bào ngư.webp",
},

  {
    ...generateHotDishItem("Súp bóng cá thịt cua", "Món khai vị", 65000),
    image: "/images/bóng cá thịt cua.webp",
  },
  {
    ...generateHotDishItem("Thượng canh tổ yến thịt cua - gà", "Món khai vị", 150000),
    image: "/images/to-yen-thit-cua.webp",
    description: "Món cao cấp từ nguyên liệu quý hiếm",
  },

  // MÓN HẦM
  {
  ... generateHotDishItem("Gà bát bảo", "Món hầm", 120000),
  image: "/images/gà bát bảo.webp",
  },
  {
  ... generateHotDishItem("Gà càn khôn", "Món hầm", 130000),
  image: "/images/gà càn khôn.webp",
  },
  {
  ... generateHotDishItem("Vịt bát bảo", "Món hầm", 110000),
  image: "/images/Vịt bát bảo.webp",
  },
  {
  ...generateHotDishItem("Vịt càn khôn", "Món hầm", 125000),
  image: "/images/vịt càn khôn.webp",
  },
  {
  ... generateHotDishItem("Gân bò nạm bò củ cải", "Món hầm", 90000),
  image: "/images/gân nạm bò thuốc bắc1.webp",
  },
  {
  ... generateHotDishItem("Vịt phú quý", "Món hầm", 100000),
  image: "images/vịt phú quý.webp",
  },
  {
  ...generateHotDishItem("Vịt om sen", "Món hầm", 95000),
  image: "images/vịt om củ sen kiểu tứ xuyên.webp",
  },
  {
  ...generateHotDishItem("Dê hầm thuốc bắc", "Món hầm", 140000),
  image: "images/gân nạm bò thuốc bắc1.webp",
  },
  {
  ...generateHotDishItem("Dê om mã thầy nấm hương", "Món hầm", 160000), 
  image: "images/dê om mã thầy nấm hương.webp",
  },
  {
  ...generateHotDishItem("Đuôi bò hầm thuốc bắc", "Món hầm", 150000),
  image: "images/đuôi bò thuốc bắc.webp",
  },
  {
  ...generateHotDishItem("Đuôi bò hầm ngũ vị", "Món hầm", 145000),
  image: "images/đuôi bò ngũ hương.webp",
  },
  {
    ...generateHotDishItem("Thịt khâu nhục", "Món hầm", 85000),
    image: "/images/khau-nhuc.webp",
    description: "Béo nhưng không ngấy, mềm nhưng không nát",
  },
  {
    ...generateHotDishItem("Thịt kho Đông Pha", "Món hầm", 90000),
    image: "/images/thit-kho-dong-pha.webp",
    description: "Ngọt, mặn hài hòa, đưa cơm đậm vị.",
  },

  // MÓN XÀO
  {
    ...generateHotDishItem("Bò lúc lắc sốt tiêu đen", "Món xào", 95000),
    image: "/images/bò lúc lắc sốt tiêu đen.webp",
  },
  {
    ...generateHotDishItem("Bò xào cần cay", "Món xào", 90000),
    image: "/images/bò xào săn cay kiểu tứ xuyên.webp",
  },
  {
    ...generateHotDishItem("Bò xào X.O", "Món xào", 100000),
    image: "/images/bò xào XO.webp",
  },
  {
    ...generateHotDishItem("Bò xào tàu xì", "Món xào", 92000),
    image: "/images/bò xào tàu xì.webp",
  },
  {
    ...generateHotDishItem("Bò xốt tiêu đen", "Món xào", 98000),
    image: "/images/Bò sốt tiêu đen.webp",
  },
  {
  ...generateHotDishItem("Gà chua ngọt", "Món xào", 80000),
  image: "images/gà sốt chua ngọt.webp",
},
  {
    ...generateHotDishItem("Gà xào tiêu đen", "Món xào", 85000),
    image: "images/gà sốt tiêu đen.webp",
},
  {
    ...generateHotDishItem("Gà xào Kung Bảo", "Món xào", 88000),
    image: "images/gà xào kung bảo.webp",
},
  {
    ...generateHotDishItem("Gà xào tứ xuyên", "Món xào", 87000),
    image: "images/gà xào kiểu tứ xuyên.webp",
},
  {
    ...generateHotDishItem("Sụn gà xào tứ xuyên", "Món xào", 90000),
    image: "images/sụn gà xào kiểu tứ xuyên.webp",
},
  {
    ...generateHotDishItem("Tôm xào Singapore", "Món xào", 110000),
    image: "images/tôm sốt singapore.webp",
},
  {
    ...generateHotDishItem("Tôm xào X.O", "Món xào", 115000),
    image: "images/tôm xào sốt XO.webp",
},
  {
    ...generateHotDishItem("Tôm xào Kung Bảo", "Món xào", 112000),
    image: "images/tôm xào cung bảo.webp",
},
  {
    ...generateHotDishItem("Mực xào X.O", "Món xào", 105000),
    image: "images/mực xào sốt XO.webp",
},  
  {
    ...generateHotDishItem("Mực xào sốt cay", "Món xào", 102000),
    image: "images/mực xào sốt cay.webp",
},
  {
    ...generateHotDishItem("Cua om gừng hành", "Món xào", 180000),
    image: "/images/cua om gừng hành.webp",
  },
  {
    ...generateHotDishItem("Cua om sate", "Món xào", 185000),
    image: "/images/cua om miến sốt sate.webp",
  },
  {
    ...generateHotDishItem("Cua sốt Singapore", "Món xào", 190000),
    image: "/images/cua sốt singapore.webp",
  },
  {
    ...generateHotDishItem("Cua sốt tiêu đen", "Món xào", 188000),
    image: "/images/cua sốt tiêu đen.webp",
  },
  {
    ...generateHotDishItem("Cua sốt X.O", "Món xào", 195000),
    image: "images/cua sốt singapore.webp", // Placeholder for now
  },
  {
    ...generateHotDishItem("Cá song hấp tỏi hoàng kim", "Món xào", 200000),
    image: "/images/Cá song hấp tỏi hoàng kim.webp",
  },
  {
    ...generateHotDishItem("Cá song hấp tỏi đen", "Món xào", 205000),
    image: "/images/Cá song hấp tỏi đen.webp",
  },
  {
    ...generateHotDishItem("Cá song hấp xì dầu", "Món xào", 210000),
    image: "/images/Cá song hấp xì dầu.webp",
  },
  {
    ...generateHotDishItem("Cá vàng hấp tàu xì", "Món xào", 220000),
    image: "/images/cá vàng anh hấp sốt xì dầu.webp",
  },
  {
    ...generateHotDishItem("Cá vàng hấp cay", "Món xào", 225000),
    image: "/images/Cá vàng anh hấp cay.webp",
  },

  // MÓN CHIÊN
  
  {
    ...generateHotDishItem("Tôm chiên phồng", "Món chiên", 100000),
    image: "/images/tôm chiên phong sa.webp",
},
  {
    ...generateHotDishItem("Tôm chiên muối ớt", "Món chiên", 105000),
    image: "/images/tôm chiên muối ớt.webp",
},
  {
    ...generateHotDishItem("Tôm chiên muối tuyết", "Món chiên", 108000),
    image: "/images/tôm chiên muối tuyết.webp",
},
  {
    ...generateHotDishItem("Tôm chao muối bơ lò", "Món chiên", 110000),
    image: "/images/tôm chao muối bỏ lò.webp",
},
  {
    ...generateHotDishItem("Tôm chiên xì dầu", "Món chiên", 102000),
    image: "/images/tôm chiên xì dầu.webp",
},
  {
    ...generateHotDishItem("Tôm chiên trứng muối", "Món chiên", 112000),
    image: "/images/tôm chiên trứng muối.webp",
},
  {
    ...generateHotDishItem("Tôm chiên mayonnaise", "Món chiên", 115000),
    image: "/images/tôm chiên sốt mayonaise.webp",
},
  {
    ...generateHotDishItem("Tôm chiên chanh leo", "Món chiên", 118000),
    image: "/images/Tôm sốt chanh leo.webp",
},
  {
    ...generateHotDishItem("Tôm chiên tứ cầu", "Món chiên", 120000),
    image: "/images/Tôm chiên tú cầu.webp",
},
  {
    ...generateHotDishItem("Tôm chiên sốt xoài mù tạt", "Món chiên", 125000),
    image: "/images/tôm chiên sốt mù tạt xoài.webp",
},
  {
    ...generateHotDishItem("Sườn kinh đô", "Món chiên", 90000),
    image: "/images/sườn kinh đô.webp",
},
  {
    ...generateHotDishItem("Sườn muối ớt", "Món chiên", 92000),
    image: "/images/sườn chiên muối ớt.webp",
},
  {
    ...generateHotDishItem("Sườn chua ngọt", "Món chiên", 95000),
    image: "/images/sườn sốt chua ngọt.webp",
},
  {
    ...generateHotDishItem("Mực chiên muối ớt", "Món chiên", 85000),
    image: "/images/mực chiên muối ớt.webp",
},
  {
    ...generateHotDishItem("Mực chiên trứng muối", "Món chiên", 88000),
    image: "/images/mực chiên trứng muối.webp",
},
  {
    ...generateHotDishItem("Đậu phụ chiên trứng muối", "Món chiên", 60000),
    image: "/images/Đậu phụ chiên muối ớt.webp",
},

//nghi
  {
    ...generateHotDishItem("Cua rang phòng phong cay", "Món chiên", 200000),
    image: "/images/cua chiên phong sa.webp",
  },
  {
    ...generateHotDishItem("Cua rang trứng muối", "Món chiên", 205000),
    image: "/images/cua sốt trứng muối.webp",
  },
  {
    ...generateHotDishItem("Cua rang muối ớt", "Món chiên", 210000),
    image: "/images/cua chiên muối ớt.webp",
  },
  {
    ...generateHotDishItem("Cua rang muối tuyết", "Món chiên", 215000),
    image: "/images/cua chiên muối tuyết.webp",
  },
  {
    ...generateHotDishItem("Cố song chiên muối ớt", "Món chiên", 220000),
    image: "/images/Cá song chiên muối ớt.webp",
  },
  {
    ...generateHotDishItem("Cố song chiên phòng phong", "Món chiên", 225000),
    image: "/images/cá song chiên phòng phong cay.webp",
  },
  {
    ...generateHotDishItem("Cố vàng chiên muối ớt", "Món chiên", 230000),
    image: "/images/cá vàng anh chiên muối ớt.webp",
  },
  {
    ...generateHotDishItem("Cố vàng chiên phòng phong", "Món chiên", 235000),
    image: "/images/cá vàng anh chiên phòng phong.webp",
  },
  {
  ...generateHotDishItem("Sườn chiên tỏi", "Món chiên", 98000),
  image: "/images/sườn chiên tỏi.webp",
  },
  {
  ...generateHotDishItem("Sườn chiên sốt mayonnaise", "Món chiên", 100000),
  image: "/images/sườn sốt sacha.webp",
},
  {
 ... generateHotDishItem("Thịt lợn tẩm vừng", "Món chiên", 80000),
  image: "/images/thịt lợn tẩm vừng.webp",
},
  {
    ...generateHotDishItem("Chả tôm nhồi khổ qua", "Món chiên", 60000),
    image: "/images/Chả tôm nhồi khổ qua.webp",
  },
  {
    ...generateHotDishItem("Chả tôm mã thầy", "Món chiên", 62000),
    image: "/images/chả tôm mã thầy.webp",
  },
  {
    ...generateHotDishItem("Chả tôm nhồi ớt sừng", "Món chiên", 65000),
    image: "/images/Chả tôm nhồi ớt sừng.webp",
  },
  {
    ...generateHotDishItem("Củ sen nhồi thịt chiên", "Món chiên", 55000),
    image: "/images/Củ sen nhồi thịt mã thầy chiên.webp",
  },
  {
    ...generateHotDishItem("Đậu phụ bách hoa", "Món chiên", 60000),
    image: "/images/đậu phụ bách hoa.webp",
  },

  // MÓN TẦN
  {
    ...generateHotDishItem("Gà đen tần hoa đông trùng", "Món tần", 150000),
    image: "/images/gà đen tần hoa đông trùng.webp",
    
},
  {
    ...generateHotDishItem("Gà đen tần nấm bụng dê", "Món tần", 160000),
    image: "/images/gà đen tần bào ngư nấm bụng dê.webp",
},
  {
    ...generateHotDishItem("Vịt củ sen", "Món tần", 130000),
    image: "/images/vịt om củ sen kiểu tứ xuyên.webp",
},
  {
    ...generateHotDishItem("Gà đen tần bào ngư nấm bụng dê", "Món tần", 190000),
    image: "/images/gà đen tần bào ngư nấm bụng dê.webp",
},
  {
    ...generateHotDishItem("Canh gà cổ truyền", "Món tần", 140000),
    image: "/images/canh gà cổ truyền.webp",
  },
  {
    ...generateHotDishItem("Canh gà hải sâm", "Món tần", 170000),
    image: "/images/canh gà hải sâm.webp",
  },

  // MÓN NO
  {
    ...generateHotDishItem("Miến/mỳ xào cua", "Món no", 70000),
    image: "/images/Miến xào thịt cua.webp",
},

  {
    ...generateHotDishItem("Mì cua Thượng Hải", "Món no", 80000),
    image: "/images/Mì cua Thượng Hải.webp",
},
  {
    ...generateHotDishItem("Miến xào thịt cua", "Món no", 85000),
    image: "/images/Miến xào thịt cua.webp",
},
  {
    ...generateHotDishItem("Miến xào tôm nồi đất", "Món no", 78000),
    image: "/images/miến xào tôm nồi đất.webp",
},
  {
    ...generateHotDishItem("Mỳ xào thịt lợn sợi", "Món no", 90000),
    image: "/images/Mỳ xào thịt lợn sợi.webp",
},
  {
    ...generateHotDishItem("Mì xào thịt bò", "Món no", 88000),
    image: "/images/Mỳ xào thịt bò.webp",
},
  {
    ...generateHotDishItem("Cơm gà cá mặn", "Món no", 60000),
    image: "/images/Cơm rang thịt gà cá mặn.webp",
  },
  {
    ...generateHotDishItem("Cơm rang bò cay", "Món no", 62000),
    image: "/images/Cơm rang bò băm cay.webp",
  },
  {
    ...generateHotDishItem("Cơm rang hải sản dứa", "Món no", 70000),
    image: "/images/Cơm rang hải sản với dứa.webp",
  },
  {
    ...generateHotDishItem("Cơm rang lòng trứng trứng", "Món no", 65000),
    image: "/images/Cơm rang sốt thịt cua.webp",
  },
  {
    ...generateHotDishItem("Cơm rang sò điệp trứng cua", "Món no", 75000),
    image: "/images/Cơm rang điệp cơ trứng cua.webp",
  },
  {
    ...generateHotDishItem("Cơm rang Dương Châu", "Món no", 68000),
    image: "/images/Cơm rang dương châu.webp",
  },
  {
    ...generateHotDishItem("Cơm rang hải sản hoàng kim", "Món no", 72000),
    image: "/images/Cơm rang hải sản hoàng kim.webp",
  },

  // MÓN RAU
  {
    ...generateHotDishItem("Cải chíp", "Món rau", 42000),
    image: "/images/cải chip luộc.webp",
  },
  {
    ...generateHotDishItem("Cải chip om nấm sốt dầu hào", "Món rau", 42000),
    image: "/images/cải chip om nấm sốt dầu hào.webp",
  },
  {
    ...generateHotDishItem("Rau dền om trứng bách thảo", "Món rau", 45000),
  image: "/images/rau dền om trứng bách thảo.webp",
},
  {
    ...generateHotDishItem("Rau om nấm thập cẩm nồi đất", "Món rau", 38000),
  image: "/images/rau om nấm thập cẩm nồi đất.webp",
},
  {
    ...generateHotDishItem("Rau thập cẩm xào hạt điều", "Món rau", 35000),
  image: "/images/rau thập cẩm xào hạt điều.webp",
},
  {
    ...generateHotDishItem("Súp lơ xanh luộc", "Món rau", 48000),
  image: "/images/lơ xanh luộc.webp",
},
  {
    ... generateHotDishItem("Súp lơ xanh om nấm dầu hào", "Món rau", 40000),
  image: "/images/lơ xanh om nấm dầu hào.webp",
},
  {
    ...generateHotDishItem("Súp lơ xanh xào tỏi", "Món rau", 50000),
    image: "/images/lơ xanh xào tỏi.webp",
  },

  // MÓN BỔ SUNG
  {
    ... generateHotDishItem("Tôm viên chiên giòn", "Món bổ sung", 50000),
  image: "/images/Tôm viên chiên giòn.webp",
},
  {
    ... generateHotDishItem("Tôm viên Hồng Kông", "Món bổ sung", 55000),
  image: "/images/Tôm viên hồng kong.webp",
},
  {
    ... generateHotDishItem("Tôm viên sốt Tứ Xuyên", "Món bổ sung", 52000),
  image: "/images/Tôm viên sốt tứ xuyên.webp",
},
  {
    ... generateHotDishItem("Nấm đông cô nhồi tôm sốt tàu xì", "Món bổ sung", 60000),
  image: "/images/Nấm đông cô nhồi tôm sốt xì dầu.webp",
},
  {
    ... generateHotDishItem("Đậu phụ bách hoa", "Món bổ sung", 58000),
  image: "/images/đậu phụ bách hoa.webp",
},
  {
    ... generateHotDishItem("Quẩy mực bách hoa", "Món bổ sung", 62000),
  image: "/images/Quẩy mực bách hoa.webp",
},
  {
    ... generateHotDishItem("Củ sen nhồi thịt chiên", "Món bổ sung", 55000),
  image: "/images/Củ sen nhồi thịt mã thầy chiên.webp",
},
  {
    ...generateHotDishItem("Cá tím ngự hương nòi đất", "Món bổ sung", 70000),
    image: "/images/Cà tím ngũ hương.webp",
  },
  {
    ... generateHotDishItem("Đậu phụ Tứ Xuyên", "Món bổ sung", 45000),
  image: "/images/đậu phụ tứ xuyên.webp",
},
  // Đồ Uống
  {
    id: "nuoc-cam",
    name: "Nước Cam Tươi",
    description: "Nước cam vắt tươi nguyên chất, giải khát.",
    price: 20000,
    image: "/placeholder.svg?height=200&width=200",
    mainCategory: "Đồ Uống",
    subCategory: "Nước ép",
  },
  {
    id: "ca-phe-sua",
    name: "Cà Phê Sữa Đá",
    description: "Cà phê sữa đá truyền thống Việt Nam, đậm đà và thơm ngon.",
    price: 28000,
    image: "/placeholder.svg?height=200&width=200",
    mainCategory: "Đồ Uống",
    subCategory: "Cà phê",
  },

  // DIMSUM - Món hấp
  {
    id: "hoanh-thanh-tu-xuyen",
    name: "Hoành thánh tứ xuyên",
    description: "Hoành thánh hấp kiểu Tứ Xuyên, nhân thịt thơm ngon.",
    price: 45000,
    image: "/images/hoành thánh tứ xuyên.webp",
    mainCategory: "Dimsum",
    subCategory: "Món hấp",
  },
  {
    id: "ha-cao-phuong-hoang",
    name: "Há cảo phượng hoàng (Vàng lá thực phẩm)",
    description: "Há cảo hấp nhân tôm thịt, trang trí lá vàng thực phẩm.",
    price: 55000,
    image: "/images/Há cảo phượng hoàng.webp",
    mainCategory: "Dimsum",
    subCategory: "Món hấp",
  },
  {
    id: "ha-cao-so-diep",
    name: "Há cảo sò điệp",
    description: "Há cảo hấp nhân sò điệp tươi ngon.",
    price: 50000,
    image: "/images/há cảo sò điệp.webp",
    mainCategory: "Dimsum",
    subCategory: "Món hấp",
  },
  {
    id: "banh-xep-bo-xoi",
    name: "Bánh xếp bò xôi",
    description: "Bánh xếp hấp nhân bò xôi thơm ngon.",
    price: 48000,
    image: "/images/bánh xếp bó xôi.webp",
    mainCategory: "Dimsum",
    subCategory: "Món hấp",
  },
  {
    id: "banh-xep-kim-tien",
    name: "Bánh xếp kim tiền",
    description: "Bánh xếp hấp nhân đặc biệt với trứng cá tầm.",
    price: 60000,
    image: "/images/bánh xếp kim tiền.webp",
    mainCategory: "Dimsum",
    subCategory: "Món hấp",
  },
  {
    id: "sui-cao-bac-kinh",
    name: "Sủi cảo bắc kinh",
    description: "Sủi cảo kiểu Bắc Kinh, hấp mềm, nhân thịt thơm ngon.",
    price: 45000,
    image: "/images/sủi cảo bắc kinh.webp",
    mainCategory: "Dimsum",
    subCategory: "Món hấp",
  },
  {
    id: "chan-ga-tau-xi",
    name: "Chân gà tàu xì",
    description: "Chân gà hấp tàu xì mềm rục, thơm ngon.",
    price: 45000,
    image: "/images/chân gà tàu xì.webp",
    mainCategory: "Dimsum",
    subCategory: "Món hấp",
  },
  {
    id: "xiu-mai-phuong-hoang",
    name: "Xíu mại phượng hoàng (trứng cá chuồn)",
    description: "Xíu mại hấp cao cấp với trứng cá chuồn.",
    price: 55000,
    image: "/images/xíu mại phượng hoàng.webp",
    mainCategory: "Dimsum",
    subCategory: "Món hấp",
  },
  {
    id: "ha-cao-he",
    name: "Há cảo hẹ",
    description: "Há cảo hấp nhân hẹ thơm ngon.",
    price: 42000,
    image: "/images/há cảo hẹ.webp",
    mainCategory: "Dimsum",
    subCategory: "Món hấp",
  },
  {
    id: "ha-cao-nam-tuyet",
    name: "Há cảo cá mú",
    description: "Thịt cá mú tươi, gia vị, trứng cá tầm, da cảo thuỷ tinh",
    price: 45000,
    image: "/images/Há cảo cá mú.webp",
    mainCategory: "Dimsum",
    subCategory: "Món hấp",
  },
  {
    id: "ha-cao-hoang-kim",
    name: "Há cảo hoàng kim ",
    description: "Há cảo nhân tôm thuỷ tinh, sốt trứng muối",
    price: 58000,
    image: "/images/há cảo hoàng kim.webp",
    mainCategory: "Dimsum",
    subCategory: "Món hấp",
  },
  {
    id: "banh-cuon-tom-hum",
    name: "Bánh cuốn tôm hùm",
    description: "Bánh cuốn mềm mịn với nhân tôm hùm tươi ngon.",
    price: 120000,
    image: "/images/bánh cuốn tôm hùm.webp",
    mainCategory: "Dimsum",
    subCategory: "Món hấp",
  },
  {
    ...generateHotDishItem("Cảo vi cá nước dùng", "Món hấp", 70000),
    image: "/images/Cảo vi cá nước dùng.webp",
  },
  {
    ...generateHotDishItem("Cảo cá tuyết nấm hương", "Món hấp", 68000),
    image: "/images/Cảo cá tuyết nấm hương.webp",
  },

  // DIMSUM - Món mới
  {
    id: "banh-bao-bo-xot-tieu-den",
    name: "Bánh bao bò xốt tiêu đen",
    description: "Bánh bao nhân bò xốt tiêu đen thơm ngon.",
    price: 45000,
    image: "/images/bánh bao bò sốt tiêu đen.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },
  {
    id: "tieu-long-bao-bich-ngoc",
    name: "Tiểu long bao bích ngọc",
    description: "Tiểu long bao đặc biệt với màu xanh bích ngọc.",
    price: 55000,
    image: "/images/tiểu long bao bích ngọc.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },
  {
    id: "chan-ga-xot-xo",
    name: "Chân gà xốt XO",
    description: "Chân gà với sốt XO đặc biệt.",
    price: 50000,
    image: "/placeholder.svg?height=200&width=200",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },
  {
    id: "suon-non-xot-sacha",
    name: "Sườn non xốt sa cha",
    description: "Sườn non với xốt sa cha thơm ngon.",
    price: 65000,
    image: "/images/sườn sốt sacha.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },
  {
    id: "xiu-mai-ca-mu",
    name: "Xíu mại cá mú (sốt nấm truffle)",
    description: "Xíu mại đặc biệt với bào ngư và sốt nấm truffle.",
    price: 70000,
    image: "/images/Xíu mại cá mú.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },
  {
    id: "xiu-mai-ca-tuyet",
    name: "Xíu mại cá tuyết sốt XO (trứng cá chuồn)",
    description: "Thịt cá tuyết, gia vị , mỡ lợn, sốt XO",
    price: 65000,
    image: "/images/xíu mại cá tuyết sốt XO.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },
  {
    id: "xiu-mai-hai-san",
    name: "Xíu mại hải sản",
    description: "Nhân tôm mực, gia vị, trứng cá chuồn",
    price: 65000,
    image: "/images/xíu mại hải sản.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },
  {
    id: "xiu-mai-hong-kong",
    name: "Xíu mại Hồng Kông",
    description: "Nhân tôm thịt, hành mùi, hành tây, sốt chua ngọt",
    price: 65000,
    image: "/images/Xíu mại hồng kông.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },
  {
    id: "xiu-mai-so-diep",
    name: "Xíu mại sò điệp",
    description: "Nhân tôm thịt, cồi sò điêp, trứng cá tầm",
    price: 65000,
    image: "/images/xíu mại sò điệp.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },
  {
    id: "xiu-mai-tom-hum",
    name: "Xíu mại tôm hùm",
    description: "Thịt tôm hùm, gia vị trứng cá tầm",
    price: 65000,
    image: "/images/Xíu mại tôm hùm.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },
  {
    id: "ha-cao-ngo-ngot",
    name: "Há cảo ngô ngọt",
    description: "Há cảo nhân ngô ngọt thơm ngon.",
    price: 42000,
    image: "/images/há cảo ngô ngọt.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },
  {
    id: "ha-cao-tien-vua",
    name: "Há cảo tiên vua",
    description: "Há cảo cao cấp với nhân đặc biệt.",
    price: 60000,
    image: "/images/há cảo tiến vua.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },
  {
    id: "bo-vien-cu-nang-xot-xi-muoi",
    name: "Bò viên củ năng xốt xí muối",
    description: "Bò viên với củ năng và xốt xí muối đặc biệt.",
    price: 55000,
    image: "/images/Bò viên củ năng sốt xí muội.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },

  // DIMSUM - Món chiên mới
  {
    id: "hoanh-thanh-tom-chien",
    name: "Hoành thánh tôm chiên",
    description: "Hoành thánh nhân tôm chiên giòn.",
    price: 48000,
    image: "/images/Hoành thánh tôm chiên.webp",
    mainCategory: "Dimsum",
    subCategory: "Món chiên mới",
  },
  {
    id: "hoanh-thanh-chien-xot-tu-xuyen",
    name: "Hoành thánh chiên sốt tứ xuyên",
    description: "Hoành thánh chiên với sốt Tứ Xuyên cay nồng.",
    price: 52000,
    image: "/images/Hoành thánh tôm chiên sốt tứ xuyên.webp",
    mainCategory: "Dimsum",
    subCategory: "Món chiên mới",
  },
  {
    id: "cha-gio-tom-phuong-hoang",
    name: "Chả giò tôm phượng hoàng",
    description: "Chả giò nhân tôm thơm ngon, giòn rụm.",
    price: 50000,
    image: "/images/Chả giòtôm phượng hoàng .webp",
    mainCategory: "Dimsum",
    subCategory: "Món chiên mới",
  },
  {
    id: "tau-hu-ky-tom-thuy-tinh",
    name: "Tàu hũ ky tôm thủy tinh",
    description: "Lá tàu hủ ky, tôm thuỷ tinh",
    price: 55000,
    image: "/images/Tàu hũ ky tôm thủy tinh.webp",
    mainCategory: "Dimsum",
    subCategory: "Món chiên mới",
  },
  {
    id: "tau-hu-ky-xot-dau-hao-xo",
    name: "Tàu hũ ky xốt dầu hào XO",
    description: "Lá tàu hủ ky, tôm thuỷ tinh, sốt dầu hào XO.",
    price: 58000,
    image: "/images/tàu hũ ky sốt dầu hào.webp",
    mainCategory: "Dimsum",
    subCategory: "Món chiên mới",
  },
  {
    id: "banh-xep-he-chien",
    name: "Bánh xếp hẹ chiên",
    description: "Bánh xếp nhân hẹ chiên giòn rụm, thơm ngon.",
    price: 45000,
    image: "/images/Bánh xếp hẹ chiên.webp",
    mainCategory: "Dimsum",
    subCategory: "Món chiên mới",
  },
  {
    ...generateHotDishItem("Chả tôm nhồi khổ qua", "Món chiên mới", 60000),
    image: "/images/Chả tôm nhồi khổ qua.webp",
  },
  {
    ...generateHotDishItem("Chả tôm mã thầy", "Món chiên mới", 62000),
    image: "/images/chả tôm mã thầy.webp",
  },
  {
    ...generateHotDishItem("Chả tôm nhồi ớt sừng", "Món chiên mới", 65000),
    image: "/images/Chả tôm nhồi ớt sừng.webp",
  },
  {
    ...generateHotDishItem("Củ sen nhồi thịt chiên", "Món chiên mới", 55000),
    image: "/images/Củ sen nhồi thịt mã thầy chiên.webp",
  },
  {
    ...generateHotDishItem("Đậu phụ bách hoa", "Món chiên mới", 60000),
    image: "/images/đậu phụ bách hoa.webp",
  },

  // DIMSUM - Món tráng miệng
  {
    id: "che-long-nhan-duong-nhan",
    name: "Chè long nhãn đường phèn",
    description: "Chè long nhãn ngọt thanh với đường phèn.",
    price: 35000,
    image: "/images/Chè long nhãn dưỡng nhan.webp",
    mainCategory: "Dimsum",
    subCategory: "Món tráng miệng",
  },
  {
    id: "dau-hu-que-hoa",
    name: "Đậu hũ quế hoa",
    description: "Đậu hũ mềm mịn với hương quế hoa.",
    price: 30000,
    image: "/images/Đậu hũ quế hoa.webp",
    mainCategory: "Dimsum",
    subCategory: "Món tráng miệng",
  },
  {
    id: "quy-linh-cao",
    name: "Quy linh cao",
    description: "Món tráng miệng truyền thống Trung Hoa.",
    price: 40000,
    image: "/images/Quy linh cao.webp",
    mainCategory: "Dimsum",
    subCategory: "Món tráng miệng",
  },
  {
    id: "che-long-nhan",
    name: "Chè long nhãn dưỡng nhan",
    description: "Nước yến, nhựa đào, nấm tuyết, long nhãn, táo đỏ, hạt sen, đông trùng, kỳ tử, tuyết yến, tuyết liên tử, hạt chia,  tinh dầu vani, đường phèn",
    price: 25000,
    image: "/images/Chè long nhãn dưỡng nhan.webp",
    mainCategory: "Dimsum",
    subCategory: "Món tráng miệng",
  },
  {
    ...generateHotDishItem("Đậu hũ hạnh nhân", "Món tráng miệng", 38000),
    image: "/images/Đậu hũ hạnh nhân.webp",
  },

  // DIMSUM - Bánh bao
  {
    id: "banh-bao-kim-sa",
    name: "Bánh bao kim sa",
    description: "Bánh bao nhân trứng muối tan chảy.",
    price: 30000,
    image: "/images/bánh bao kim sa.webp",
    mainCategory: "Dimsum",
    subCategory: "Bánh bao",
  },
  {
    id: "banh-bao-xiu-mai",
    name: "Bánh bao xíu mại phô mai",
    description: "Bánh bao nhân thịt xá xíu thơm ngon.",
    price: 32000,
    image: "/placeholder.svg?height=200&width=200",
    mainCategory: "Dimsum",
    subCategory: "Bánh bao",
  },
  {
    id: "banh-bao-xuc-xich-pho-mai",
    name: "Bánh bao xúc xích phô mai",
    description: "Bánh bao nhân xúc xích và phô mai béo ngậy.",
    price: 35000,
    image: "/images/bánh bao xíu mại pho mai.webp",
    mainCategory: "Dimsum",
    subCategory: "Bánh bao",
  },
  {
    id: "banh-bao-tra-xanh",
    name: "Bánh bao trà xanh",
    description: "Bánh bao vị trà xanh với nhân đặc biệt.",
    price: 30000,
    image: "/images/bánh bao trà xanh.webp",
    mainCategory: "Dimsum",
    subCategory: "Bánh bao",
  },
  {
    id: "banh-bao-bo-sot-tieu-den",
    name: "Bánh bao xbò sốt tiêu đen",
    description: "Bột mì thượng hạng, thăn bò mỡ, sốt tiêu đen",
    price: 38000,
    image: "/images/bánh bao bò sốt tiêu đen.webp",
    mainCategory: "Dimsum",
    subCategory: "Bánh bao",
  },

  // DIMSUM - Bánh bao thượng hải
  {
    id: "tieu-long-bao",
    name: "Tiểu long bao",
    description: "Tiểu long bao truyền thống với nước súp bên trong.",
    price: 45000,
    image: "/images/Tiểu long bao.webp",
    mainCategory: "Dimsum",
    subCategory: "Bánh bao thượng hải",
  },
  {
    id: "tieu-long-bao-que-lam",
    name: "Tiểu long bao quế lăm",
    description: "Tiểu long bao hương vị quế lăm đặc biệt.",
    price: 48000,
    image: "/images/Tiểu long bao quế lâm.webp",
    mainCategory: "Dimsum",
    subCategory: "Bánh bao thượng hải",
  },
  {
    id: "tieu-long-bao-hai-vi",
    name: "Tiểu long bao hải vị",
    description: "Tiểu long bao nhân hải sản thơm ngon.",
    price: 50000,
    image: "/images/tiểu long bao hải vị.webp",
    mainCategory: "Dimsum",
    subCategory: "Bánh bao thượng hải",
  },
  {
    id: "tieu-long-bao-nam-dong-co-bong",
    name: "Tiểu long bao nấm đông cô bông",
    description: "Tiểu long bao nhân nấm đông cô bông thơm ngon.",
    price: 45000,
    image: "/images/tiểu long bao nấm đông cô bông.webp",
    mainCategory: "Dimsum",
    subCategory: "Bánh bao thượng hải",
  },
  {
    id: "tieu-long-bao-to-yen-thit-cua",
    name: "Tiểu long bao tổ yến thịt cua",
    description: "Tiểu long bao cao cấp với nhân tổ yến và thịt cua.",
    price: 70000,
    image: "/images/Tiểu long bao tổ yến thịt cua.webp",
    mainCategory: "Dimsum",
    subCategory: "Bánh bao thượng hải",
  },
  {
    id: "tieu-long-bao-nam-truffle",
    name: "Tiểu long bao nấm truffle",
    description: "Nấm truffle, thịt vai giòn, hành gừng, nước súp",
    price: 70000,
    image: "/images/tiểu long bao nấm truffle.webp",
    mainCategory: "Dimsum",
    subCategory: "Bánh bao thượng hải",
  },
  {
    ...generateHotDishItem("Đại long bao", "Bánh bao thượng hải", 55000),
    image: "/images/Đại long bao.webp",
  },

   // Món Đặt Trước
   {
    id: "tom-hum-nuong-pho-mai",
    name: "Tôm Hùm Nướng Phô Mai",
    description: "Tôm hùm tươi sống nướng với phô mai béo ngậy.",
    price: 850000,
    image: "/placeholder.svg?height=200&width=200",
    mainCategory: "Món đặt trước",
    subCategory: "Hải sản cao cấp",
  },
  {
    id: "bao-ngu-sot-dau-hao",
    name: "Bào Ngư Sốt Dầu Hào",
    description: "Bào ngư tươi ngon sốt dầu hào đậm đà.",
    price: 700000,
    image: "/placeholder.svg?height=200&width=200",
    mainCategory: "Món đặt trước",
    subCategory: "Hải sản cao cấp",
  },
  {
    id: "vi-ca-hap-nuoc-cot-dua",
    name: "Vi Cá Hấp Nước Cốt Dừa",
    description: "Vi cá cao cấp hấp với nước cốt dừa thơm béo.",
    price: 900000,
    image: "/placeholder.svg?height=200&width=200",
    mainCategory: "Món đặt trước",
    subCategory: "Món đặc biệt",
  },
  {
    id: "ga-tan-sam-han-quoc",
    name: "Gà Tần Sâm Hàn Quốc",
    description: "Gà tần sâm Hàn Quốc bổ dưỡng, thơm ngon.",
    price: 450000,
    image: "/placeholder.svg?height=200&width=200",
    mainCategory: "Món đặt trước",
    subCategory: "Món đặc biệt",
  },
]
