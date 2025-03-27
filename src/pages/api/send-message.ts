
export const prerender = false; 
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';



dotenv.config();

export async function POST({ request }: { request: Request }) {
    try {
        const body = await request.json();
        console.log("Datos recibidos:", body); 
    
        const { name, email, message } = body;
    
        if (!name || !email || !message) {
          console.error("Faltan datos en la solicitud");
          return new Response(JSON.stringify({ error: "Faltan datos" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
    
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER, 
            pass: process.env.GMAIL_TOKEN, 
          },
        });
    
        const mailOptions = {
          from: email,
          to: "betolguinv99@gmail.com",
          subject: `Nuevo mensaje de ${name}`,
          text: `Nombre: ${name}\nCorreo: ${email}\nMensaje:\n${message}`,
        };
    
        console.log("Enviando correo...");
        await transporter.sendMail(mailOptions);
        console.log("Correo enviado con éxito"); 
    
        return new Response(JSON.stringify({ message: "Correo enviado exitosamente" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (error) {
        console.error("Error en el servidor:", error); 
        return new Response(JSON.stringify({ error: "Error al enviar el correo" }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }
    }