import express from "express";
import { body, validationResult } from "express-validator";
import Contact from "../models/contact.js";
import nodemailer from "nodemailer";

const router = express.Router();

// Create nodemailer transporter using environment variables
const createTransporter = () => {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env;
  if (!SMTP_HOST || !SMTP_PORT) return null;

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
};

// API route for contact form
router.post(
  "/",
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("message").trim().notEmpty().withMessage("Message is required"),
    body("subject").trim().optional(),
  ],
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

      const { name, email, subject = "New message from portfolio", message } = req.body;

      // Save to MongoDB
      const contact = new Contact({ name, email, subject, message });
      await contact.save();

      // Send email notification
      const transporter = createTransporter();
      if (transporter) {
        const mailOptions = {
          from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
          subject: `Portfolio Contact: ${subject}`,
          text: `
You have a new contact form submission:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
      }

      res.status(201).json({ message: "Message received successfully" });
    } catch (err) {
      console.error("Error sending message:", err);
      next(err);
    }
  }
);

export default router;
