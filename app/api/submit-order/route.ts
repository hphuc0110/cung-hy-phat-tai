import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    console.log("=== API Route Started ===")

    const orderData = await request.json()
    console.log("Received order data:", JSON.stringify(orderData, null, 2))

    // Basic validation
    if (!orderData.items || orderData.items.length === 0) {
      console.log("No items in order")
      return NextResponse.json({ success: false, message: "No items in order" }, { status: 400 })
    }

    if (!orderData.tableNumber) {
      console.log("No table number provided")
      return NextResponse.json({ success: false, message: "Table number is required" }, { status: 400 })
    }

    // Prepare data for Google Apps Script webhook
    const webhookData = {
      orderNumber: orderData.orderNumber || `ORD-${Date.now()}`,
      timestamp: orderData.timestamp, // Use original timestamp
      tableNumber: orderData.tableNumber,
      notes: orderData.notes || "",
      total: orderData.total,
      items: orderData.items.map((item) => `${item.name} (SL: ${item.quantity})`).join("; "), // Đã xử lý
    }

    // Replace with your Google Apps Script Web App URL
    const googleAppsScriptWebhookUrl =
      "https://script.google.com/macros/s/AKfycbyY7KJIQ3rGlYCw7emxanOOxY75kst2oVUpBg4K-qEwcanShapWfbwF7LK0UApWseWL/exec"

    console.log("Sending data to Google Apps Script:", JSON.stringify(webhookData, null, 2))

    const response = await fetch(googleAppsScriptWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Send as JSON
      },
      body: JSON.stringify(webhookData),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Google Apps Script Webhook error:", errorText)
      throw new Error(`Webhook failed: ${response.status} - ${errorText}`)
    }

    const result = await response.json()
    console.log("Google Apps Script response:", result)

    if (!result.success) {
      throw new Error(`Google Apps Script reported an error: ${result.message}`)
    }

    console.log("=== API Route Success ===")

    return NextResponse.json({
      success: true,
      message: "Order submitted successfully and recorded in Google Sheet",
      orderNumber: webhookData.orderNumber,
    })
  } catch (error) {
    console.error("=== API Route Error ===")
    console.error("Error type:", typeof error)
    console.error("Error message:", error instanceof Error ? error.message : String(error))
    console.error("Error stack:", error instanceof Error ? error.stack : "No stack trace")

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
