// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default function contact(req: NextApiRequest, res: NextApiResponse) {
  const nodemailer = require("nodemailer");
  const mailList = ["info@ermolaeva-patent.ru", "karelin.igor@gmail.com"];
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.yandex.ru",
    auth: {
      user: "karelin.igor.src@yandex.ru",
      pass: "p247ho55",
    },
    secure: true,
  });

  const mailData = {
    from: "karelin.igor.src@yandex.ru",
    to: mailList,
    subject: `ermolaeva-patent.ru`,
    text: req.body.name,
    html: `
      <h1>Вам новое письмо</h1>
      <ul style="list-style: none;">
        <li><strong>Name:</strong> ${req.body.name}</li>
        <li><strong>Email:</strong> ${req.body.email}</li>
        <li><strong>Phone:</strong> ${req.body.phone}</li>
        <li><strong>Message:</strong> ${req.body.description}</li>
      </ul>
      <p>
        <a href="https://ermolaeva-patent.ru"><i>ermolaeva-patent.ru</i></a>
      </p>
 `,
  };

  transporter.sendMail(mailData);

  return res.status(200).json({ success: true });
}
