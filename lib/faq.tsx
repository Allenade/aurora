export type FaqItem = {
  question: string;
  answer: string;
};

const FAQ = Object.freeze({
  title: "Frequently Asked Questions",
  image: "/images/faq-character.png",
  imageAlt: "Person in futuristic techwear helmet",
  items: [
    {
      question: "Who Do I contact to build a robot?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Who Do I contact to build a robot?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Who Do I contact to build a robot?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Who Do I contact to build a robot?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ] satisfies FaqItem[],
  cta: Object.freeze({
    title: "Still Have Questions?",
    label: "Send Email",
    href: "mailto:support@aurorarobotics.com",
  }),
});

export default FAQ;
