"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function QRGenerator() {
  const [baseUrl, setBaseUrl] = useState("https://your-website-url.com")
  const [tableCount, setTableCount] = useState(10)
  const [qrCodes, setQrCodes] = useState<string[]>([])

  const generateQRCodes = () => {
    const codes = []
    for (let i = 1; i <= tableCount; i++) {
      const tableUrl = `${baseUrl}?table=${i}`
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(tableUrl)}`
      codes.push(qrCodeUrl)
    }
    setQrCodes(codes)
  }

  const downloadQRCode = (url: string, tableNumber: number) => {
    const link = document.createElement("a")
    link.href = url
    link.download = `table-${tableNumber}-qr.png`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const printAllQRCodes = () => {
    const printWindow = window.open("", "_blank")
    if (!printWindow) return

    printWindow.document.write(`
      <html>
        <head>
          <title>QR Codes for Tables</title>
          <style>
            body { font-family: Arial, sans-serif; }
            .qr-container { 
              display: flex; 
              flex-wrap: wrap; 
              gap: 20px; 
              justify-content: center;
            }
            .qr-item { 
              text-align: center; 
              margin-bottom: 30px;
              page-break-inside: avoid;
            }
            .qr-title { 
              font-size: 18px; 
              font-weight: bold; 
              margin: 10px 0;
            }
            @media print {
              .qr-item {
                width: 45%;
                margin: 10px;
              }
            }
          </style>
        </head>
        <body>
          <h1 style="text-align: center;">QR Codes cho các bàn</h1>
          <div class="qr-container">
    `)

    qrCodes.forEach((url, index) => {
      printWindow.document.write(`
        <div class="qr-item">
          <img src="${url}" alt="QR Code for Table ${index + 1}" style="width: 200px; height: 200px;">
          <div class="qr-title">Bàn số ${index + 1}</div>
        </div>
      `)
    })

    printWindow.document.write(`
          </div>
          <script>
            window.onload = function() {
              window.print();
            }
          </script>
        </body>
      </html>
    `)

    printWindow.document.close()
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Tạo QR Code cho các bàn</h1>
      <Card>
        <CardHeader>
          <CardTitle>Cài đặt QR Code</CardTitle>
          <CardDescription>Tạo QR code cho từng bàn để khách hàng có thể quét và đặt món</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="base-url">URL trang web của bạn</Label>
            <Input
              id="base-url"
              value={baseUrl}
              onChange={(e) => setBaseUrl(e.target.value)}
              placeholder="https://your-website-url.com"
            />
            <p className="text-sm text-muted-foreground">
              Đây là URL cơ bản của trang web của bạn. Số bàn sẽ được thêm vào dưới dạng tham số URL.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="table-count">Số lượng bàn</Label>
            <Input
              id="table-count"
              type="number"
              min="1"
              max="100"
              value={tableCount}
              onChange={(e) => setTableCount(Number.parseInt(e.target.value) || 1)}
            />
          </div>
          <Button onClick={generateQRCodes} className="w-full">
            Tạo QR Codes
          </Button>
        </CardContent>
      </Card>

      {qrCodes.length > 0 && (
        <div className="mt-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">QR Codes đã tạo</h2>
            <Button onClick={printAllQRCodes}>In tất cả QR Codes</Button>
          </div>
          <Separator className="my-4" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {qrCodes.map((url, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">Bàn số {index + 1}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex justify-center">
                  <img
                    src={url || "/placeholder.svg"}
                    alt={`QR Code for Table ${index + 1}`}
                    className="w-full max-w-[200px]"
                  />
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button variant="outline" className="w-full" onClick={() => downloadQRCode(url, index + 1)}>
                    Tải xuống
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
