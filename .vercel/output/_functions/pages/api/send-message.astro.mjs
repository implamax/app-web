import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
export { renderers } from '../../renderers.mjs';

const prerender = false;
dotenv.config();
async function POST({ request }) {
  try {
    const body = await request.json();
    console.log("Datos recibidos:", body);
    const { name, email, message } = body;
    if (!name || !email || !message) {
      console.error("Faltan datos en la solicitud");
      return new Response(JSON.stringify({ error: "Faltan datos" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_TOKEN
      }
    });
    const mailOptions = {
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: "betolguinv99@gmail.com",
      subject: `CONTACTO WEB IMPLAMAX`,
      text: `Nombre: ${name}
Correo: ${email}
Mensaje:
${message}`
    };
    console.log("Enviando correo...");
    await transporter.sendMail(mailOptions);
    console.log("Correo enviado con éxito");
    return new Response(JSON.stringify({ message: "Correo enviado exitosamente" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Error en el servidor:", error);
    return new Response(JSON.stringify({ error: "Error al enviar el correo" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
