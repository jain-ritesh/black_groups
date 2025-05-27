import { useState } from "react";

const faqData = [
  {
    question: "What is Black Grapes Group?",
    answer:
      "Black Grapes Group is a multi-vertical organization offering services in IT solutions, real estate, finance, investment & securities, insurance survey, and engineering valuations."
  },
  {
    question: "What industries do you serve?",
    answer:
      "We cater to a wide range of industries including technology, property, investment & insurance, real estate, and infrastructure development."
  },
  {
    question: "How can I request a service?",
    answer:
      "You can request a service by filling out the contact form on our website or by calling us directly. Visit our Contact Us page for more information."
  },
  {
    question: "Do you offer customized IT services?",
    answer:
      "Yes, Black Grapes Softech offers fully customized IT services including software development, website design, and enterprise solutions."
  },
  {
    question: "How can I track the status of my project?",
    answer:
      "Our team will assign a project coordinator who will provide regular updates. You can also log in to your client dashboard to check progress and reports."
  },
  {
    question: "Where is your office located?",
    answer:
      "Our headquarters are based in Indore, Madhya Pradesh, India. We also operate in several other cities through our service associates."
  }
];

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border rounded-md shadow-sm overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 text-left font-semibold bg-gray-100 hover:bg-gray-200 transition duration-200"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 text-gray-700 bg-white">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
