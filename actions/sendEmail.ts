"use server";
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const sender = formData.get("senderEmail");

  if (!validateString(sender, 500)) {
    return {
      error: "L'adresse d'envoi est invalide",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Le message est invalide",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact form <onboarding@resend.dev>",
      to: "lionel.auray@gmail.com",
      subject: "Nouvelle demande de contact",
      reply_to: sender as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        sender: sender as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return { data };
};
