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
    description: "Vị ngọt của ngô kem, thơm béo",
  },
  {
    ...generateHotDishItem("Súp ngô cua", "Món khai vị", 45000),
    image: "/images/sup-ngo-cua.webp",
    description: "Vị ngọt của thịt cua và ngô kem, vị béo ngậy",
  },
  {
    ...generateHotDishItem("Súp bí đỏ hải sản", "Món khai vị", 55000),
    image: "/images/sup-bi-do.webp",
    description: " Vị béo của bí đỏ và kem, vị hơi ngọt cua hành và bí",
  },
  {
  ...generateHotDishItem("Súp hải sản chua cay", "Món khai vị", 60000),
  image: "/images/súp hải sản chua cay kiểu tứ xuyên.webp",
  description: "Vị chua nhẹ, cay ngọt kết hợp, thơm mùi dấm đen",
},
  {
    ...generateHotDishItem("Vây cá trộn thịt cua", "Món khai vị", 70000),
    image: "/images/vay-ca-thit-cua.webp",
    description: "Vị thơm của nước thượng canh, vị của vi cá mập, hơi giòn",
  },
  {
    ...generateHotDishItem("Vây cá hồng xíu", "Món khai vị", 70000),
    image: "/images/vây cá hồng xíu.webp",
    description: "Vị giòn của vi cá mập, nước dùng màu hổ phác",
  },
    {
  ...generateHotDishItem("Súp vây cá, bóng cá, hải sâm bào ngư", "Món khai vị", 750000),
  image: "/images/súp vây cá, bóng cá, hải sâm, bào ngư.webp",
  description: "Vị thơm của nước thượng canh, vị của vi cá mập, hơi giòn",
},
{
  ...generateHotDishItem("Súp tổ yến thịt cua", "Món khai vị", 750000),
  image: "images/súp tổ yến thịt cua.webp",
  description: "vị ngọt thơm của nước thượng canh, không còn mùi tanh của tổ yến",
},
{
  ...generateHotDishItem("Súp tổ yến thịt gà", "Món khai vị", 750000),
  image: "/images/súp tổ yến thit gà.webp",
  description: "vị thơm của nước dùng, không còn mùi tanh của tổ yến",
},
  {
    ...generateHotDishItem("Súp bóng cá thịt cua", "Món khai vị", 65000),
    image: "/images/bóng cá thịt cua.webp",
    description: "Vị đặc trưng của hải sản"
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
  description: "Ngọt tự nhiên từ các loại hạt, vị bùi ngậy, các loại hát ngấm nước cốt từ gà"
  },
  {
  ... generateHotDishItem("Gà càn khôn", "Món hầm", 130000),
  image: "/images/gà càn khôn.webp",
  description: "thit gà mềm,thơm mùi trứng muối,vị ngậy ko ngán"
  },
  {
    ... generateHotDishItem("Gà phú quý", "Món hầm", 130000),
    image: "/images/Gà Phú Quý.webp",
    description: "Mùi thơm của đương quy, đẳng sâm đặc trưng, vị đậm đà, sốt sánh quyện"
    },
  {
  ... generateHotDishItem("Vịt bát bảo", "Món hầm", 110000),
  image: "/images/Vịt bát bảo.webp",
  description: "Ngọt tự nhiên từ các loại hạt, vị bùi ngậy, các loại hát ngấm nước cốt từ vịt"
  },
  {
  ...generateHotDishItem("Vịt càn khôn", "Món hầm", 125000),
  image: "/images/vịt càn khôn.webp",
  description: "Thịt vịt mềm,xôi thơm,thơm mùi trứng muối"
  },
  {
  ... generateHotDishItem("Gân bò nạm bò củ cải", "Món hầm", 90000),
  image: "/images/gân nạm bò thuốc bắc1.webp",
  },
  {
    ... generateHotDishItem("Gân bò nạm bò thuốc bắc", "Món hầm", 90000),
    image: "/images/gân nạm bò thuốc bắc1.webp",  
    description: "Thơm nhẹ mùi thuốc bắc, gân, nạm bò mềm"
    },
  {
  ... generateHotDishItem("Vịt phú quý", "Món hầm", 100000),
  image: "images/vịt phú quý.webp",
  description: "Mùi thơm của đương quy, đẳng sâm đặc trưng, thịt vịt ngấm gia vị, mềm"
  },
  {
  ...generateHotDishItem("Vịt om sen", "Món hầm", 95000),
  image: "images/vịt om củ sen kiểu tứ xuyên.webp",
  description: "Vị tê cay nhẹ,vịt mềm, không còn mùi vịt,hơi đậm đà"
  },
  {
  ...generateHotDishItem("Dê hầm thuốc bắc", "Món hầm", 140000),
  image: "images/gân nạm bò thuốc bắc1.webp",
  description: "Thơm thịt dê, vị béo ngậy, hơm mùi thuốc bắc nhẹ"
  },
  {
  ...generateHotDishItem("Dê om mã thầy nấm hương", "Món hầm", 160000), 
  image: "images/dê om mã thầy nấm hương.webp",
  description: "Thịt dê mềm, béo, thơm mùi trụ hầu, chao trắng, nước sốt sánh"
  },
  {
  ...generateHotDishItem("Đuôi bò hầm thuốc bắc", "Món hầm", 150000),
  image: "images/đuôi bò thuốc bắc.webp",
  description: "Vị ngọt, thơm, béo, nước dùng sánh, thịt đuôi mềm"
  },
  {
  ...generateHotDishItem("Đuôi bò hầm ngũ vị", "Món hầm", 145000),
  image: "images/đuôi bò ngũ hương.webp",
  description: " đuôi bò mềm, vị ngọt thơm, vị chua của cà chua nổi bật"
  },
  {
    ...generateHotDishItem("Thịt khâu nhục", "Món hầm", 85000),
    image: "/images/khau-nhuc.webp",
    description: "Béo nhưng không ngấy, mềm nhưng không nát",
  },
  {
    ...generateHotDishItem("Thịt khâu nhục rau mai chiêu bài", "Món hầm", 85000),
    image: "/images/khâu nhục rau mai.webp",
    description: "Thịt lợn mềm, béo ko ngán,thơm đặc trưng của sốt trụ hầu, chao đỏ, bơ lạt",
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
    description: "Thịt mềm, thơm mùi sốt tiêu đen, hơi đậm đà"
  },
  {
    ...generateHotDishItem("Bò xào săn cay kiểu Tứ Xuyên", "Món xào", 90000),
    image: "/images/bò xào săn cay kiểu tứ xuyên.webp",
    description: "Vị cay tê nhẹ, thịt bò mềm, hơi nhiều dầu"
  },
  {
    ...generateHotDishItem("Bò xào X.O", "Món xào", 100000),
    image: "/images/bò xào XO.webp",
    description: "Vị hơi cay, thơm đặc trưng của sốt XO"
  },
  {
    ...generateHotDishItem("Bò xào tàu xì", "Món xào", 92000),
    image: "/images/bò xào tàu xì.webp",
    description: "Thịt bò mềm, sốt tàu xì thơm"
  },
  {
    ...generateHotDishItem("Bò xốt tiêu đen", "Món xào", 98000),
    image: "/images/Bò sốt tiêu đen.webp",
    description: "Thịt bò mềm, thơm đặc trưng của sốt tiêu đen, đậm đà"
  },
  {
  ...generateHotDishItem("Gà chua ngọt", "Món xào", 80000),
  image: "images/gà sốt chua ngọt.webp",
  description: " vị chua chua ngọt ngọt,thịt gà mềm, hơi giòn"
},
  {
    ...generateHotDishItem("Gà xào tiêu đen", "Món xào", 85000),
    image: "images/gà sốt tiêu đen.webp",
    description: "Thơm đặc trưng của sốt tiêu đen, gà mềm ko bị khô"
},
  {
    ...generateHotDishItem("Gà xào Kung Bảo", "Món xào", 88000),
    image: "images/gà xào kung bảo.webp",
    description: "Thịt gà mềm, hơi giòn, cay, chua nhẹ, thơm mùi dấm đen"
},
  {
    ...generateHotDishItem("Gà xào tứ xuyên", "Món xào", 87000),
    image: "images/gà xào kiểu tứ xuyên.webp",
    description: "Thơm mùi quế hồi, hơi cay, thơm mùi muối ớt"
},
  {
    ...generateHotDishItem("Sụn gà xào tứ xuyên", "Món xào", 90000),
    image: "images/sụn gà xào kiểu tứ xuyên.webp",
    description: "Thơm mùi quế hồi, thơm mùi muối ớt"
},
  {
    ...generateHotDishItem("Tôm xào Singapore", "Món xào", 110000),
    image: "images/tôm sốt singapore.webp",
    description: "Vị chua, ngọt, cay béo, ăn kèm bánh bao"
},
  {
    ...generateHotDishItem("Tôm xào Kung Bảo", "Món xào", 112000),
    image: "images/tôm xào cung bảo.webp",
    description: "Vị chua nhẹ, cay nồng nhưng ko gắt, thơm mùi dấm đen"
},
{
  ...generateHotDishItem("Nấm đông cô nhồi tôm sốt tàu xì", "Món xào", 110000),
  image: "/images/Nấm đông cô nhồi tôm sốt xì dầu.webp",
  description: "Tôm nhồi nấm áp chảo, chiên lên và om sốt tàu xì, thơm mùi tàu xi, hơi mặn, ngọt"
},
  {
    ...generateHotDishItem("Mực xào X.O", "Món xào", 105000),
    image: "images/mực xào sốt XO.webp",
    description: "Vị cay nhẹ,thơm mùi sốt, nhiều dầu "
},  
  {
    ...generateHotDishItem("Mực xào sốt cay", "Món xào", 102000),
    image: "images/mực xào sốt cay.webp",
    description: "Vị cay nhẹ, đậm đà"
},
  {
    ...generateHotDishItem("Cua gạch / Cua thịt om gừng hành", "Món xào", 180000),
    image: "/images/cua om gừng hành.webp",
    description: "thơm gừng hành, vị mặn mặn, ngọt ngọt"
  },
  {
    ...generateHotDishItem("Cua sốt Singapore", "Món xào", 190000),
    image: "/images/cua sốt singapore.webp",
    description: "vị cay, chua, ngọt của sốt, vị hơi béo"
  },
  {
    ...generateHotDishItem("Cua sốt tiêu đen", "Món xào", 188000),
    image: "/images/cua sốt tiêu đen.webp",
    description: "Vị béo, thơm cay mùi tiêu đen, mùi cua nổi bật lên"
  },
  {
    ...generateHotDishItem("Cua sốt X.O", "Món xào", 195000),
    image: "images/cua sốt singapore.webp", // Placeholder for now
  },
  {
    ...generateHotDishItem("Cá song hấp tỏi hoàng kim", "Món xào", 200000),
    image: "/images/Cá song hấp tỏi hoàng kim.webp",
    description: "Thịt cá, dai chín tới"
  },
  {
    ...generateHotDishItem("Cá song hấp tỏi đen", "Món xào", 205000),
    image: "/images/Cá song hấp tỏi đen.webp",
    description: "Cá chắc thịt, sốt tỏi đen có mùi thơm đặc trưng, vị hơi ngọt quyện với vị xì dầu mặn nhẹ"
  },
{
    ...generateHotDishItem("Cá song hấp xì dầu", "Món xào", 210000),
    image: "/images/Cá song hấp xì dầu.webp",
    description:"Cá song hấp nguyên bản, sau mới tưới xì dầu"
  },
  {
    ...generateHotDishItem("Cá vàng hấp tàu xì", "Món xào", 220000),
    image: "/images/cá vàng anh hấp sốt xì dầu.webp",
    description: "thơm của hạt tàu xì,mặn mặn, ngọt ngọt,thịt chắc"
  },
  {
    ...generateHotDishItem("Cá vàng hấp cay", "Món xào", 225000),
    image: "/images/Cá vàng anh hấp cay.webp",
    description: "Vị hơi cay của ớt, màu đỏ,thơm mùi sốt"
  },

  // MÓN CHIÊN
  
  {
    ...generateHotDishItem("Tôm sốt tiêu đen", "Món chiên", 100000),
    image: "/images/tôm sốt tiêu đen.webp",
    description: "thơm sốt tiêu đen, béo của phô mai"
},
  {
    ...generateHotDishItem("Tôm xào sốt XO ", "Món chiên", 105000),
    image: "/images/tôm xào sốt XO.webp",
    description: "Tôm giòn, ngọt, hơi cay, thơm mùi sốt XO"
},
{
  ...generateHotDishItem("Tôm chiên phòng phong", "Món chiên", 108000),
  image: "/images/tôm chiên phòng phong.webp",
  description: "Thơm của hắc tàu xì, hương liệu, vị cay nhẹ"
},
  {
    ...generateHotDishItem("Tôm chiên muối tuyết", "Món chiên", 108000),
    image: "/images/tôm chiên muối tuyết.webp",
    description: "Màu đặc trưng muối là màu trắng, vị ko mặn, nhạt nhạt, vừa miệng "
},
  {
    ...generateHotDishItem("Tôm chiên muối ớt", "Món chiên", 110000),
    image: "/images/tôm chiên muối ớt.webp",
    description: "Vị cay nhẹ, mùi thơm của muối ớt"
},
{
  ...generateHotDishItem("Tôm chiên phong sa", "Món chiên", 108000),
  image: "/images/tôm chiên phong sa.webp",
  description: "Tôm chiên phong sa thơm ngon"
},
{
  ...generateHotDishItem("Tôm chao muối bỏ lò", "Món chiên", 108000),
  image: "/images/tôm chao muối bỏ lò.webp",
  description: " Vị lạ thơm mùi hương liệu và rượu"
},
  {
    ...generateHotDishItem("Tôm chiên xì dầu", "Món chiên", 102000),
    image: "/images/tôm chiên xì dầu.webp",
    description: "Ngọt ngọt mặn mặn, có mùi thơm của xì dầu"
},
  {
    ...generateHotDishItem("Tôm chiên trứng muối", "Món chiên", 112000),
    image: "/images/tôm chiên trứng muối.webp",
    description: "Thơm, béo ngậy của trứng muối và bơ"
},
  {
    ...generateHotDishItem("Tôm chiên mayonnaise", "Món chiên", 115000),
    image: "/images/tôm chiên sốt mayonaise.webp",
    description: "Vị béo, mát, chua chua ngọt ngọt"
},
  {
    ...generateHotDishItem("Tôm chiên chanh leo", "Món chiên", 118000),
    image: "/images/Tôm sốt chanh leo.webp",
    description: "Chua ngọt, thơm mùi chanh leo"
},
  {
    ...generateHotDishItem("Tôm chiên tứ cầu", "Món chiên", 120000),
    image: "/images/Tôm chiên tú cầu.webp",
    description: "Tôm được chiên giòn, áo 1 lớp sốt chanh leo rồi lăn qua khoai mật chiên"
},
  {
    ...generateHotDishItem("Tôm chiên sốt xoài mù tạt", "Món chiên", 125000),
    image: "/images/tôm chiên sốt mù tạt xoài.webp",
    description: "Vị chua ngọt, thơm mùi xoài, mù tạt ít cay, thơm mùi mù tạt"
},
{
  ...generateHotDishItem("Củ sen nhồi thịt mã thầy chiên", "Món chiên", 125000),
  image: "/images/Củ sen nhồi thịt mã thầy chiên.webp",
  description: "củ sen chần qua, ép nhân vào 2 miếng củ sen, tẩm bột chiên,ăn cùng sốt xoài mù tạt"
},
  {
    ...generateHotDishItem("Sườn muối ớt", "Món chiên", 92000),
    image: "/images/sườn chiên muối ớt.webp",
    description: "Mùi thơm của các nguyên liệu được xào với nhau, thơm mùi muối ớt"
},
  {
    ...generateHotDishItem("Sườn chua ngọt", "Món chiên", 95000),
    image: "/images/sườn sốt chua ngọt.webp",
    description: "Sườn mềm mọng nước,vị chua ngọt nhẹ, màu đỏ"
},
{
  ...generateHotDishItem("Sườn sốt kinh đô", "Món chiên", 95000),
  image: "/images/sườn kinh đô.webp",
  description: "Sườn mềm, vị chua ngọt"
},
  {
    ...generateHotDishItem("Mực chiên muối ớt", "Món chiên", 85000),
    image: "/images/mực chiên muối ớt.webp",
    description: "Tẩm bột chiên mực giòn lên, muối + hành lá, ớt,.."
},
  {
    ...generateHotDishItem("Mực chiên trứng muối", "Món chiên", 88000),
    image: "/images/mực chiên trứng muối.webp",
    description: "mực chiên giòn, tẩm sốt trứng muối béo"
},
  {
    ...generateHotDishItem("Đậu phụ chiên trứng muối", "Món chiên", 60000),
    image: "/images/Đậu phụ chiên trứng muối.webp",
    description: "Đậu phụ giòn, sốt trứng muối béo ngậy"
},
{
  ...generateHotDishItem("Đậu phụ chiên muối ớt", "Món chiên", 60000),
  image: "/images/Đậu phụ chiên muối ớt.webp",
  description: "Đậu phụ giòn, công thức muối ớt độc quyền,cay nhẹ, nồng mùi bột ớt"
},

//nghi
  {
    ...generateHotDishItem("Cua chiên phong sa", "Món chiên", 200000),
    image: "/images/cua chiên phong sa.webp",
    description: "Cua chắc thịt, vị đậm đà"
  },
  {
    ...generateHotDishItem("Cua chiên sốt trứng muối", "Món chiên", 205000),
    image: "/images/cua sốt trứng muối.webp",
    description:"Cua thịt chắc, sốt trứng muối đậm đà"
  },
  {
    ...generateHotDishItem("Cua rang muối ớt", "Món chiên", 210000),
    image: "/images/cua chiên muối ớt.webp",
    description: "Thịt cua chắc, muối ớt cay mặn vừa đủ"
  },
  {
    ...generateHotDishItem("Cua gạch/ cua thịt om miến sate sốt XO ", "Món chiên", 210000),
    image: "/images/cua om miến sốt sate.webp",
    description:"Cua chắc thịt, sốt cay vừa đủ"
  },
  {
    ...generateHotDishItem("Cua rang muối tuyết", "Món chiên", 215000),
    image: "/images/cua chiên muối tuyết.webp",
    description:"Cua chiên đậm đà"
  },
  {
    ...generateHotDishItem("Cá song chiên muối ớt", "Món chiên", 220000),
    image: "/images/Cá song chiên muối ớt.webp",
    description: "thơm mùi muối ớt"
  },
  {
    ...generateHotDishItem("Cá song chiên muối phòng phong cay", "Món chiên", 225000),
    image: "/images/cá song chiên phòng phong cay.webp",
    description: "Cá phi lê chắc thịt chiên vừa đủ"
  },
  {
    ...generateHotDishItem("Cá song chiên muối phong sa", "Món chiên", 225000),
    image: "/images/cá song chiên phong sa.webp",
    description: "Cá chắc thịt, vị cay nhẹ nhàng"
  },
  {
    ...generateHotDishItem("Cá vàng anh chiên muối ớt", "Món chiên", 230000),
    image: "/images/cá vàng anh chiên muối ớt.webp",
    description:"Cá chiên vừa đủ, muối ko bị mặn"
  },
  {
    ...generateHotDishItem("Cá vàng chiên phòng phong", "Món chiên", 235000),
    image: "/images/cá vàng anh chiên phòng phong.webp",
    description: "Cá dai ngon chắc thịt"
  },
  {
    ...generateHotDishItem("Cá vàng chiên muối phong sa", "Món chiên", 235000),
    image: "/images/cá vàng anh chiên phong sa.webp",
    description: "Cá dai ngon chắc thịt"
  },
  {
  ...generateHotDishItem("Sườn chiên tỏi", "Món chiên", 98000),
  image: "/images/sườn chiên tỏi.webp",
  description: "Sườn ngọt, mềm,thơm mùi tỏi"
  },
  {
  ...generateHotDishItem("Sườn chiên muối tuyết", "Món chiên", 100000),
  image: "/images/Sườn chiên muối tuyết.webp",
  description: "sườn mềm, ngọt, không bị khô,muối tuyết thơm, công thức muối tuyết đặc biệt, có mùi thơm đặc trưng của các thành phần tạo nên muối"
},
{
  ...generateHotDishItem("Sườn chiên muối phong sa", "Món chiên", 100000),
  image: "/images/sườn chiên muối phong sa.webp",
  description: "Sườn ngọt, mềm, không khô,có nguyên liệu đặc trưng tạo nên muối, thơm mùi tỏi"
},
  {
 ... generateHotDishItem("Thịt lợn tẩm vừng", "Món chiên", 80000),
  image: "/images/thịt lợn tẩm vừng.webp",
  description:"Thịt áo bột chiên giòn, xóc cùng muối ớt,thơm của muối ớt"
},
{
  ... generateHotDishItem("Thịt lợn sốt chua ngọt ", "Món chiên", 80000),
   image: "/images/thịt lợn sốt chua ngọt.webp",
   description:"Vị chua, ngọt,màu hơi đỏ"
 },
  {
    ...generateHotDishItem("Chả tôm mã thầy", "Món chiên", 62000),
    image: "/images/chả tôm mã thầy.webp",
    description: "giòn của tôm, ngọt của mã thầy chấm cùng sốt chanh sả"
  },
  {
    ...generateHotDishItem("Đậu phụ bách hoa", "Món chiên", 60000),
    image: "/images/đậu phụ bách hoa.webp",
    description: "Đậu mềm, cay nhẹ"
  },

  // MÓN TẦN
  {
    ...generateHotDishItem("Gà đen tần hoa đông trùng", "Món tần", 150000),
    image: "/images/gà đen tần hoa đông trùng.webp",
    description: "Màu vàng sẫm, vị ngọt thanh của táo đỏ, tần >6 tiếng"
    
},
  {
    ...generateHotDishItem("Gà đen tần nấm bụng dê", "Món tần", 160000),
    image: "/images/gà đen tần bào ngư nấm bụng dê.webp",
    description: " Vị ngọt thanh từ các nguyên liệu kết hợp lại, thơm nhẹ mùi ngọc trúc, hoài sơn"
},
{
  ...generateHotDishItem("Thịt vây cá tần bào ngư nấm bụng dê", "Món tần", 160000),
  image: "/images/thịt vây cá tần bào ngư nấm bụng dê.webp",
  description: "- vị ngọt tự nhiên từ các nguyên liệu được tần lâu, ngọt thanh"
},
  {
    ...generateHotDishItem("Canh gà cổ truyền", "Món tần", 140000),
    image: "/images/canh gà cổ truyền.webp",
    description: "Vị béo, ngậy ko ngán, phục hồi thể lực, bồi bổ sức khỏe, đặc biệt với người mới ốm dậy"
  },
  {
    ...generateHotDishItem("Canh gà hải sâm", "Món tần", 170000),
    image: "/images/canh gà hải sâm.webp",
    description: "Vị béo, ngậy không ngán, thêm hải sâm mềm"
  },
  {
    ...generateHotDishItem("Thịt vây cá tần bắp lợn", "Món tần", 150000),
    image: "/images/thịt vây cá tần bắp lợn.webp",
    description: "thịt vây cá và bắp lợn mền, nước tần bổ dưỡng, ngon nhất,thơm, ngọt thanh"  
},

  // MÓN NO
  {
    ...generateHotDishItem("Miến/mỳ xào cua", "Món no", 70000),
    image: "/images/Miến xào thịt cua.webp",
    description: "Vị xì dầu đặc trưng, mùi thơm của thịt cua áp chảo"
},

  {
    ...generateHotDishItem("Mỳ cua sốt Thượng Hải", "Món no", 80000),
    image: "/images/Mì cua Thượng Hải.webp",
    description: "thơm mùi gạch cua,mùi gừng, xì dầu, sợi mì dai"
},
{
  ...generateHotDishItem("Miến xào hải vị nồi đất", "Món no", 85000),
  image: "/images/miến xào tôm nồi đất.webp",
  description: "Gia vị đặc trưng làm nổi bật hải sản"
},
  {
    ...generateHotDishItem("Miến xào tôm nồi đất", "Món no", 78000),
    image: "/images/miến xào tôm nồi đất.webp",
    description: "Om trong nước gia vị,thơm đặc trưng của sốt sate"
},
  {
    ...generateHotDishItem("Mỳ xào thịt lợn sợi", "Món no", 90000),
    image: "/images/Mỳ xào thịt lợn sợi.webp",
    description: "thơm mùi chảo, sợi mì bùi, thơm, thịt lợn giòn, mềm, ngọt"
},
  {
    ...generateHotDishItem("Mì xào thịt bò", "Món no", 88000),
    image: "/images/Mỳ xào thịt bò.webp",
    description: "Thịt bò mềm, sợi mì dai, nước sốt đặc biệt"
},
  {
    ...generateHotDishItem("Cơm gà cá mặn", "Món no", 60000),
    image: "/images/Cơm rang thịt gà cá mặn.webp",
    description: "Thơm mùi gừng và cá mặn, thịt gà ngọt, mọng"
  },
  {
    ...generateHotDishItem("Cơm rang bò cay", "Món no", 62000),
    image: "/images/Cơm rang bò băm cay.webp",
    description: " vị cay, thơm mùi sốt mã lai và sốt tôm"
  },
  {
    ...generateHotDishItem("Cơm rang nhân sò thịt cua lòng trắng trứng", "Món no", 62000),
    image: "/images/Cơm rang nhân sò thịt cua lòng trắng trứng.webp",
    description: "mùi thơm của thịt cua và nhân sò,lòng trắng trứng béo, mềm, ngậy"
  },
  {
    ...generateHotDishItem("Cơm rang nhân sò điệp trứng cua", "Món no", 62000),
    image: "/images/Cơm rang điệp cơ trứng cua.webp",
    description: "thơm của sò điệp lòng trắng mềm, sò điệp khô giòn, vị hơi béo từ lòng trắng"
  },
  {
    ...generateHotDishItem("Cơm rang hải sản dứa", "Món no", 70000),
    image: "/images/Cơm rang hải sản với dứa.webp",
    description: "cơm rang mềm, ko phải cơm rang săn, màu vàng từ lòng đỏ trứng"
  },
  {
    ...generateHotDishItem("Cơm rang lòng trứng trứng", "Món no", 65000),
    image: "/images/Cơm rang sốt thịt cua.webp",
    description: "cơm rang săn, sốt thịt cua béo"
  },
  {
    ...generateHotDishItem("Cơm rang Dương Châu", "Món no", 68000),
    image: "/images/Cơm rang dương châu.webp",
    description: "Xá xíu mềm từ nạc vai, giòn, ko khô"
  },
  {
    ...generateHotDishItem("Cơm rang hải sản hoàng kim", "Món no", 72000),
    image: "/images/Cơm rang hải sản hoàng kim.webp",
    description: "Cơm rang săn hơn cơm rang với dứa, vị hơi béo, thơm mùi trứng muối"
  },
  {
    ...generateHotDishItem("Phở xào bò", "Món no", 72000),
    image: "/images/Phở xào thịt bò.webp",
    description: "thơm mùi chảo, sợi phở săn bùi, thịt bò mềm, không bị khô"
  },
  {
    ...generateHotDishItem("Phở xào hải sản sốt XO ", "Món no", 72000),
    image: "/images/Phở xào hải sản sốt XO.webp",
    description: "Hải sản tươi, phở xào giòn, vị sốt XO đặc trưng"
  },
  {
    ...generateHotDishItem("Xôi gà lá sen ", "Món no", 72000),
    image: "/images/Xôi gà lá sen.webp",
    description: "gạo nếp được ngâm và hấp cách thủy và nêm gia vị vừa phải, phần nhân từ thịt gà xào cùng tôm khô"
  },
  {
    ...generateHotDishItem("Sườn hấp xôi thập cẩm ", "Món no", 72000),
    image: "/images/Sườn hấp xôi thập cẩm.webp",
    description: "sườn ướp gia vị vừa phải, mềm ngọt, xôi được ngâm và hấp cách thủy"
  },

  // MÓN RAU
  {
    ...generateHotDishItem("Ngó xuân xào tỏi", "Món rau", 42000),
    image: "/images/ngó xuân xào tỏi.webp",
  },
  {
    ...generateHotDishItem("Cải chíp", "Món rau", 42000),
    image: "/images/cải chip luộc.webp",
  },
  {
    ...generateHotDishItem("Cải chip om nấm sốt dầu hào", "Món rau", 42000),
    image: "/images/cải chip om nấm sốt dầu hào.webp",
  },
  {
    ...generateHotDishItem("Rau theo mùa om trứng bách thảo", "Món rau", 45000),
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
  description: "thịt tôm giòn ngọt, không bị khô, thơm"
},
  {
    ... generateHotDishItem("Tôm viên Hồng Kông", "Món bổ sung", 55000),
  image: "/images/Tôm viên hồng kong.webp",
  description: "Nhân tôm, mực lá, hạnh nhân lát, sốt chua ngọt"
},
  {
    ... generateHotDishItem("Tôm viên sốt Tứ Xuyên", "Món bổ sung", 52000),
  image: "/images/Tôm viên sốt tứ xuyên.webp",
  description: "Nhân tôm thuỷ tinh, sốt tứ xuyên"
},
  {
    ... generateHotDishItem("Đậu phụ bách hoa", "Món bổ sung", 58000),
  image: "/images/đậu phụ bách hoa.webp",
  description: "mực mai trộn cùng mỡ phần,giòn ngọt,vị sốt mayo chua, ngọt, béo, mát"
},
  {
    ...generateHotDishItem("Cá tím ngự hương nòi đất", "Món bổ sung", 70000),
    image: "/images/Cà tím ngũ hương.webp",
    description: "món cổ truyền của người Hoa, vị mặn, thơm mùi cá mặn"
  },
  {
    ... generateHotDishItem("Đậu phụ Tứ Xuyên", "Món bổ sung", 45000),
  image: "/images/đậu phụ tứ xuyên.webp",
  description: "Cay tê,hơi mặn, ngọt ngọt"
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
    description: "Nhân tôm sò điệp, hành mùi, tỏi phi.",
    price: 50000,
    image: "/images/há cảo sò điệp.webp",
    mainCategory: "Dimsum",
    subCategory: "Món hấp",
  },
  {
    id: "banh-xep-bo-xoi",
    name: "Bánh xếp bò xôi",
    description: "tôm giòn, ngọt rau bó xôi thanh mát",
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
    id: "sui-cao-tu-xuyen",
    name: "Sủi cảo sốt Tứ Xuyên",
    description: "Thịt lợn vai giòn, hành mùi, bắp cải, sốt tứ xuyên.",
    price: 45000,
    image: "/images/Sủi cảo sốt tứ xuyên.webp",
    mainCategory: "Dimsum",
    subCategory: "Món hấp",
  },
  {
    id: "sui-cao-sot-xo",
    name: "Sủi cảo sốt XO",
    description: "Thịt lợn vai giòn, hành mùi, bắp cải, sốt XO.",
    price: 45000,
    image: "/images/Sủi cảo sốt XO.webp",
    mainCategory: "Dimsum",
    subCategory: "Món hấp",
  },
  {
    id: "sui-cao-sot-chua-ngot",
    name: "Sủi cảo sốt chua ngọt",
    description: "Thịt lợn vai giòn, hành mùi, bắp cải, sốt chua ngọt.",
    price: 45000,
    image: "/images/Sủi cảo sốt chua ngọt.webp",
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
    description: "Tôm thuỷ tinh, hành tây, hẹ,  gia vị.",
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
    description: "Nhân tôm thuỷ tinh, vi cá, nước dùng vi cá"
  },
  {
    ...generateHotDishItem("Cảo cá tuyết nấm hương", "Món hấp", 68000),
    image: "/images/Cảo cá tuyết nấm hương.webp",
    description: "Thịt cá tuyết, gia vị , nấm hương, trứng cá tầm"
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
    description: "Bắp bò tươi, hành gừng, nước súp.",
    price: 55000,
    image: "/images/tiểu long bao bích ngọc.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },
  {
    id: "suon-non-xot-sacha",
    name: "Sườn non sốt Sacha",
    description: "Sườn non với xốt sa cha thơm ngon.",
    price: 65000,
    image: "/images/sườn sốt sacha.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },
  {
    id: "chan-ga-xot-xo",
    name: "Chân gà sốt XO",
    description: "Sườn non với sốt XO thơm ngon, đặc biệt.",
    price: 65000,
    image: "/images/chân gà tàu xì.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },
  {
    id: "xiu-mai-ca-mu",
    name: "Xíu mại cá mú ",
    description: "thịt cá mú mềm, có vị ngọt của hải sản, vỏ xíu mại dai",
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
    description: "Nhân tôm thuỷ tinh, ngô ngọt, măng tây, rau mùi.",
    price: 42000,
    image: "/images/há cảo ngô ngọt.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },
  {
    id: "ha-cao-xo",
    name: "Há cảo XO",
    description: "Nhân tôm thuỷ tinh, sốt XO.",
    price: 42000,
    image: "public/images/há cảo XO.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },
  {
    id: "ha-cao-tien-vua",
    name: "Há cảo tiên vua",
    description: "nhân tôm sú giòn ngọt, rau tiến vua giòn,vỏ bánh trong, dai, mềm và ướt",
    price: 60000,
    image: "/images/há cảo tiến vua.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },
  {
    id: "ha-cao-tom-hum",
    name: "Há cảo tôm hùm",
    description: "Thịt tôm hùm, gia vị, da cảo thuỷ tinh.",
    price: 60000,
    image: "/images/Há cảo tôm hùm.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },
  {
    id: "bo-vien-cu-nang-xot-xi-muoi",
    name: "Bò viên củ năng xốt xí muối",
    description: "Nhân bắp bò, củ năng, sốt xí muội.",
    price: 55000,
    image: "/images/Bò viên củ năng sốt xí muội.webp",
    mainCategory: "Dimsum",
    subCategory: "Món mới",
  },

  // DIMSUM - Món chiên mới
  {
    id: "hoanh-thanh-tom-chien",
    name: "Hoành thánh tôm chiên",
    description: "Tôm thuỷ tinh, da hoành thánh.",
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
    description: "Tôm thuỷ tinh, hành, mùi, cà rốt, pho mai, khoai môn.",
    price: 50000,
    image: "/images/Chả giòtôm phượng hoàng .webp",
    mainCategory: "Dimsum",
    subCategory: "Món chiên mới",
  },
  {
    id: "cha-ca-nhoi-kho-qua-chien",
    name: "Chả cá nhồi khổ qua chiên",
    description: "Chả cá thác lác, khổ qua.",
    price: 50000,
    image: "/images/Chả tôm nhồi khổ qua.webp",
    mainCategory: "Dimsum",
    subCategory: "Món chiên mới",
  },
  {
    id: "cha-ca-nhoi-ot-sung",
    name: "Chả cá nhồi ớt sừng",
    description: "Chả cá thác lác, ớt sừng.",
    price: 50000,
    image: "/images/Chả tôm nhồi ớt sừng.webp",
    mainCategory: "Dimsum",
    subCategory: "Món chiên mới",
  },
  {
    id: "tom-hum-vien",
    name: "Tôm hùm viên",
    description: "Thịt tôm hùm, gia vị viên chiên xù.",
    price: 50000,
    image: "/images/Tôm hùm viên chiên.webp",
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
    id: "tau-hu-ky-xot-dau-hao",
    name: "Tàu hũ ky xốt dầu hào ",
    description: "Lá tàu hủ ky, tôm thuỷ tinh, sốt dầu hào .",
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
    id: "rau-muc-chien-ngu-vi",
    name: "Râu mực chiên ngũ vị",
    description: "râu mực được tẩm ướp gia vị cùng ngũ vị hương tạo mùi hương đặc trưng của ngũ vị hương và vị đậm đà cho món ăn.",
    price: 48000,
    image: "/images/Râu mực chiên ngũ vị.webp",
    mainCategory: "Dimsum",
    subCategory: "Món chiên mới",
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
    description: "Cao quy linh, mật ong.",
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
    description: "Bột hạnh nhân, hạnh nhân lát, kem béo sữa tươi"
  },
  {
    ...generateHotDishItem("Dương chi cam lộ", "Món tráng miệng", 38000),
    image: "/images/Dương chi cam lộ.webp",
    description: "món ăn đc kết hợp từ xoài xay, xoài cắt hạt lựu tép bưởi, tạo nên độ tươi mát, dễ ăn, phù hơp với mọi khách hàng"
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
    image: "/images/bánh bao xíu mại pho mai.webp",
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
    name: "Bánh bao bò sốt tiêu đen",
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
    description: "Nạc vai giòn, tương quế lâm, hành, gừng, nước súp.",
    price: 48000,
    image: "/images/Tiểu long bao quế lâm.webp",
    mainCategory: "Dimsum",
    subCategory: "Bánh bao thượng hải",
  },
  {
    id: "tieu-long-bao-hai-vi",
    name: "Tiểu long bao hải vị",
    description: "Nạc vai giòn, thịt cua, hành gừng, nước súp.",
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
    description: "Thịt vai giòn, thịt cua, tổ yến, nước súp.",
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
    description: "Nạc vai giòn, nước súp da heo, hành, gừng"
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
