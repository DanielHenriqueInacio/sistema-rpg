import nodemailer from "nodemailer";

export default nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b74e013f62b907",
        pass: "72c3dc1a30c573"
    }
    // host: "mail.simplifysoftwares.com.br",
    // port: 465,
    // secure: true,
    // auth: {
    //     user: "no-reply@simplifysoftwares.com.br",
    //     pass: "xPfuQUPxTuTb"
    // }
});