import { SignJWT, jwtVerify } from "jose";

const DEFAULT_EXPIRATION = "7d";

function getSecretKey() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error(
      "JWT_SECRET ortam değişkeni eksik. .env.local dosyasına ekleyin."
    );
  }
  return new TextEncoder().encode(secret);
}

export async function createSessionJwt(payload, options = {}) {
  const secretKey = getSecretKey();
  const expiresIn = options.expiresIn || DEFAULT_EXPIRATION;

  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(secretKey);

  return token;
}

export async function verifySessionJwt(token) {
  const secretKey = getSecretKey();
  const { payload } = await jwtVerify(token, secretKey, {
    algorithms: ["HS256"],
  });
  return payload;
}
