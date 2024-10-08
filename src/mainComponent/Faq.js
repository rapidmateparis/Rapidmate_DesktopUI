import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const faqData = [
  {
    question: "What services does your app provide?",
    answer:
      "Here is the answer to the question about the services our app provides.",
  },
  {
    question: "How do I download the app?",
    answer: "You can contact support via email at support@example.com.",
  },
  {
    question: "How do I book a ride?",
    answer: "The user guide is available in the 'Help' section of the app.",
  },
  {
    question: "Can I schedule rides in advance?",
    answer: "The user guide is available in the 'Help' section of the app.",
  },
  {
    question: "How do I know my driver is trustworthy?",
    answer: "The user guide is available in the 'Help' section of the app.",
  },
  {
    question: "What types of deliveries can I request?",
    answer: "The user guide is available in the 'Help' section of the app.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "The user guide is available in the 'Help' section of the app.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="HomeFAQs-Sec">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="HomeFaq-TitleMainCard">
              <h4 className="HomeFaq-Title">FAQs</h4>
            </div>
          </div>
          <div className="col-md-6">
            {faqData.map((faq, index) => (
              <div key={index} className="HomeFaqAnswer-QuestionCard">
                <div
                  className="HomeFaq-QuestionCard"
                  onClick={() => toggleAnswer(index)}
                >
                  <h4 className="HomeFaq-Question">{faq.question}</h4>
                  <FontAwesomeIcon
                    className="HomeFaq-Plusicon"
                    icon={openIndex === index ? faMinus : faPlus}
                  />
                </div>
                {openIndex === index && (
                  <div className="HomeFaq-Answer">
                    <p className="HomeFaq-AnswerText">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
