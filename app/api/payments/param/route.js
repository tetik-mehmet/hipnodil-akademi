import { NextResponse } from "next/server";
import { createParamPayment } from "@/lib/paramClient";

const PACKAGES = {
  silver: {
    name: "Silver",
    amount: 22950,
    description: "Silver MYK Koç Seviye 6 Paketi",
  },
  platinum: {
    name: "Platinum",
    amount: 25950,
    description: "Platinum MYK Koç Seviye 6 Paketi",
  },
  diamond: {
    name: "Diamond",
    amount: 37950,
    description: "Diamond MYK Koç Seviye 6 Paketi",
  },
};

const baseUrl =
  process.env.PARAM_CALLBACK_BASE_URL || process.env.NEXT_PUBLIC_SITE_URL;

function ensureBaseUrl() {
  if (!baseUrl) {
    throw new Error(
      "Callback URL bulunamadı. PARAM_CALLBACK_BASE_URL ya da NEXT_PUBLIC_SITE_URL tanımlayın."
    );
  }
  return baseUrl.replace(/\/$/, "");
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { packageId, customer } = body ?? {};

    if (!packageId || !PACKAGES[packageId]) {
      return NextResponse.json(
        { error: "Geçerli bir paket seçiniz." },
        { status: 400 }
      );
    }

    const pkg = PACKAGES[packageId];
    const orderId = `hip-${packageId}-${Date.now()}`;
    const callbackBase = ensureBaseUrl();

    const successUrl = `${callbackBase}/api/payments/param/callback?status=success`;
    const failureUrl = `${callbackBase}/api/payments/param/callback?status=fail`;

    const payload = {
      Amount: pkg.amount,
      OrderId: orderId,
      Description: pkg.description,
      CurrencyCode: "TL",
      InstallmentCount: 1,
      SuccessUrl: successUrl,
      FailureUrl: failureUrl,
      PurchaserName: customer?.name || "Hipnodil Web",
      PurchaserEmail: customer?.email,
      PurchaserGsmNumber: customer?.phone,
    };

    const paramResponse = await createParamPayment(payload);

    const redirectUrl =
      paramResponse?.RedirectUrl || paramResponse?.url || paramResponse?.Url;
    const paymentId =
      paramResponse?.PaymentId || paramResponse?.paymentId || paramResponse?.Id;

    if (!redirectUrl || !paymentId) {
      console.error("[Param] Beklenen alanlar yok:", paramResponse);
      return NextResponse.json(
        { error: "Param yanıtı eksik. Günlükleri kontrol edin." },
        { status: 502 }
      );
    }

    return NextResponse.json({ paymentId, redirectUrl, orderId });
  } catch (error) {
    console.error("[Param] Ödeme isteği hatası:", error);
    return NextResponse.json(
      { error: "Ödeme isteği oluşturulamadı." },
      { status: 500 }
    );
  }
}

