## Ortam Değişkenleri

Proje köküne `.env.local` dosyası oluşturun ve aşağıdakileri ekleyin:

```
MONGODB_URI=YOUR_ATLAS_CONNECTION_STRING
MONGODB_DB=hipnodil
```

`YOUR_ATLAS_CONNECTION_STRING` değerini Atlas'tan alacaksınız (aşağıda adımlar var).

## MongoDB Atlas Kurulum Adımları

1. Atlas hesabı oluşturun ve giriş yapın: https://www.mongodb.com/atlas/database
2. "Create" ile ücretsiz bir Shared Cluster (M0) oluşturun.
3. Region seçin, cluster ismi verin ve oluşturun.
4. Database Access menüsünden bir kullanıcı oluşturun (ör. `app_user`) ve güçlü bir parola belirleyin. Role: Read and write to any database.
5. Network Access menüsünde IP erişimine `0.0.0.0/0` (development için) ekleyin veya kendi IP'nizi yetkilendirin.
6. Clustera girip "Connect" > "Drivers" seçin. Node.js için verilen bağlantı URI'sını kopyalayın. Şuna benzer olacaktır:

```
mongodb+srv://app_user:<PASSWORD>@<CLUSTER_NAME>.mongodb.net/?retryWrites=true&w=majority&appName=<APP_NAME>
```

7. Bu URI'yı `.env.local` dosyasında `MONGODB_URI` değişkenine yapıştırın ve `<PASSWORD>` kısmını belirlediğiniz parola ile değiştirin.
8. İsteğe bağlı olarak `MONGODB_DB` adını belirleyin (örn. `hipnodil`).
9. Geliştirme sunucusunu yeniden başlatın: `npm run dev`.

## API Uçları

- `POST /api/auth/signup` — Kullanıcı oluşturur. Gövde JSON:

```json
{
  "firstName": "...",
  "lastName": "...",
  "birthDate": "YYYY-MM-DD",
  "tcNumber": "...",
  "phone": "5xxxxxxxxx",
  "email": "...",
  "education": "...",
  "password": "..."
}
```

Yanıt: `{ message, userId }`

- `POST /api/auth/login` — E-posta ve şifre doğrular. Gövde JSON:

```json
{ "email": "...", "password": "..." }
```

Yanıt: `{ message, userId }`

Not: Bu örnekte session/JWT dahil edilmemiştir; ihtiyaç halinde NextAuth veya JWT ekleyin.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
