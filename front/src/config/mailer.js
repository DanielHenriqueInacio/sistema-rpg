import nodemailer from "nodemailer";

export default nodemailer.createTransport({
    host: "mail.simplifysoftwares.com.br",
    port: 465,
    secure: true,
    auth: {
        user: "no-reply@simplifysoftwares.com.br",
        pass: "xPfuQUPxTuTb"
    }
});