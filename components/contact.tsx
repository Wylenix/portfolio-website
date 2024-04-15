"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-44 sm:mb-52 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contactez-moi</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Vous pouvez me contacter directement :{" "}
        <a className="underline" href="mailto:lionel.auray@gmail.com">
          lionel.auray@gmail.com
        </a>{" "}
        ou via ce formulaire
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Votre message m'a bien été envoyé !");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Votre email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        ></input>
        <textarea
          placeholder="Votre message"
          required
          name="message"
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
