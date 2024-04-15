/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind, Button } from "@react-email/components";
type ContactFormEmailProps = {
  message: string;
  sender: string;
};
export default function ContactFormEmail({
  message,
  sender,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nouveau message du portfoLio</Preview>
      <Tailwind>
        <Body className="bg-sky-900 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading as="h2" className="leading-tight">
                Message reçu du formulaire de contact
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>L'email est envoyé par : {sender}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
