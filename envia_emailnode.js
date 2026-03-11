const nodemailer = require("nodemailer");

async function enviarEmail() {

  // Configuração do transporte (exemplo com Gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "seuemail@gmail.com",
      pass: "sua_senha_de_app"
    }
  });

  // Conteúdo do e-mail
  const mailOptions = {
    from: "seuemail@gmail.com",
    to: "destinatario@email.com",
    subject: "Teste de envio com Node.js",
    html: `
      <h2>Olá!</h2>
      <p>Este é um e-mail enviado usando Node.js.</p>
      <p>Tenha um ótimo dia! 😊</p>
    `
  };

  // Enviar
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("E-mail enviado:", info.response);
  } catch (error) {
    console.error("Erro ao enviar:", error);
  }
}

enviarEmail();
