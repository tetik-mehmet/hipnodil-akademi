import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendPasswordResetEmail(email, resetToken) {
  const resetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${resetToken}`;

  try {
    const { data, error } = await resend.emails.send({
      from: "Hipnodil Akademi <onboarding@resend.dev>",
      to: [email],
      subject: "Şifre Yenileme - Hipnodil Akademi",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="${process.env.NEXT_PUBLIC_BASE_URL}/hipnodilakademilogo.png" alt="Hipnodil Akademi" style="max-width: 200px;">
          </div>
          
          <h2 style="color: #333; text-align: center; margin-bottom: 20px;">Şifre Yenileme Talebi</h2>
          
          <p style="color: #666; font-size: 16px; line-height: 1.6;">Merhaba,</p>
          
          <p style="color: #666; font-size: 16px; line-height: 1.6;">
            Hipnodil Akademi hesabınız için şifre yenileme talebinde bulundunuz. 
            Şifrenizi yenilemek için aşağıdaki butona tıklayın:
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${resetUrl}" 
               style="background: linear-gradient(135deg, #F9D162 0%, #F28B82 100%); 
                      color: white; 
                      padding: 15px 30px; 
                      text-decoration: none; 
                      border-radius: 8px; 
                      display: inline-block;
                      font-weight: bold;
                      font-size: 16px;
                      box-shadow: 0 4px 15px rgba(249, 209, 98, 0.3);">
              Şifremi Yenile
            </a>
          </div>
          
          <p style="color: #666; font-size: 14px; line-height: 1.6;">
            Bu bağlantı <strong>1 saat</strong> geçerlidir. Eğer bu talebi siz yapmadıysanız, 
            bu e-postayı görmezden gelebilirsiniz.
          </p>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #999; font-size: 12px; text-align: center;">
              Bu e-posta otomatik olarak gönderilmiştir. Lütfen yanıtlamayın.<br>
              <strong>Hipnodil Akademi</strong>
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend hatası:", error);
      return { success: false, error: error.message };
    }

    console.log("E-posta gönderildi:", data);
    return { success: true, data };
  } catch (error) {
    console.error("E-posta gönderme hatası:", error);
    return { success: false, error: error.message };
  }
}
