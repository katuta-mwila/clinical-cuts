"use client"

import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

export interface IFAQ {
  question: string;
  answer: string;
}

const faqs: IFAQ[] = [
  {
    question: "Do I need to book or can I walk in?",
    answer: "Appointments are recommended to ensure availability, but walk-ins are welcome whenever we have open slots."
  },
  {
    question: "How long does a haircut take?",
    answer: "A standard haircut usually takes 30–45 minutes. Styling or additional services may take longer."
  },
  {
    question: "Do you offer student discounts?",
    answer: "Yes, we offer student discounts with a valid student ID. Please ask when booking your appointment."
  },
  {
    question: "Can I book coloring and styling in the same appointment?",
    answer: "Absolutely! We can combine coloring, cutting, and styling in one session—just let us know when booking so we can allocate enough time."
  },
  {
    question: "Do you cut children’s hair?",
    answer: "Yes, we welcome children of all ages. We tailor our services to make it a fun and comfortable experience."
  },
  {
    question: "Is beard grooming included in a haircut?",
    answer: "Beard grooming is available and can be included with your haircut upon request."
  },
  {
    question: "Can I request a specific stylist?",
    answer: "Yes, you can request your preferred stylist when booking your appointment."
  }
]

export default function FAQ(){
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return <section className="theme-primary pb-section-y">
    <div className="centered-content-sm vert-10">
      <h1 className="text-center">F.A.Q</h1>
      <div className="vert-5">
          {faqs.map((faq, index) => (
            <FAQComp
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
    </div>
  </section>
}

function FAQComp(props: {faq: IFAQ; isOpen: boolean; onToggle: () => void;}) {
  const { faq, isOpen, onToggle } = props;

  return (
    <div
      className={`theme-secondary group px-5 py-4 cursor-pointer rounded-lg shadow-custom-1
                  ${isOpen ? "border-black text-black" : "border-b-gray-300 text-tint-dark"}
                  hover:border-black hover:text-black
                  transition-colors duration-300`}
      onClick={onToggle}
    >
      <div className="faq-button flex-panel gap-10 ">
        <p className="grow font-bold text-h6">{faq.question}</p>

        <div className="relative w-10 h-10">
          <motion.div
            initial={{opacity: 1}}
            animate={{opacity: isOpen ? 0 : 1}}
            className="abs-cover flex-center"
            transition={{duration: 0.3}}
          >
            <Plus/>
          </motion.div>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: !isOpen ? 0 : 1}}
            className="abs-cover flex-center"
            transition={{duration: 0.3}}
          >
            <Minus/>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="faq-answer overflow-hidden text-tint-dark"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="py-2 text-lg md:text-md cursor-text">{faq.answer}</p>
      </motion.div>
    </div>
  );
}

function Plus(props: {className?: string}){
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={clsx("lucide lucide-plus-icon lucide-plus", props.className)}><path d="M5 12h14"/><path d="M12 5v14"/></svg>
}

function Minus(props: {className?: string}){
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={clsx("lucide lucide-plus-icon lucide-plus", props.className)}><path d="M5 12h14"/></svg>
}