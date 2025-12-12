const DEFAULT_PARAM_ENDPOINT = "https://mpi.param.com.tr/api/mpi/payment";

const requiredEnvVars = [
  "PARAM_CLIENT_CODE",
  "PARAM_GUID",
  "PARAM_USERNAME",
  "PARAM_PASSWORD",
];

const missingVars = requiredEnvVars.filter((key) => !process.env[key]);

if (missingVars.length > 0) {
  console.warn(
    `[Param] Eksik environment değişkenleri: ${missingVars.join(
      ", "
    )}. Ödeme isteği gönderilemeyecek.`
  );
}

export async function createParamPayment(payload) {
  if (missingVars.length > 0) {
    throw new Error("Param yapılandırması eksik. Lütfen env değişkenlerini girin.");
  }

  const endpoint = process.env.PARAM_API_URL || DEFAULT_PARAM_ENDPOINT;

  const enrichedPayload = {
    ClientCode: process.env.PARAM_CLIENT_CODE,
    ClientUsername: process.env.PARAM_USERNAME,
    ClientPassword: process.env.PARAM_PASSWORD,
    GUID: process.env.PARAM_GUID,
    ...payload,
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(enrichedPayload),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `[Param] İstek başarısız. Status: ${response.status}. Mesaj: ${errorText}`
    );
  }

  return response.json();
}

