import React, { useState } from "react";
import "../../../assets/css/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const PickupHelp = () => {
  const faqItems = [
    {
      question: "What services does your app provide?",
      answer: "Our app provides services such as XYZ, ABC, etc.",
    },
    {
      question: "How do I download the app?",
      answer: "To use feature X, follow these steps: ...",
    },
    {
      question: "How do I book a ride?",
      answer:
        "Open the app, enter your destination, and select a ride option that suits you. Confirm your pick-up location, and a driver will be on their way to you.",
    },
    {
      question: "Can I schedule rides in advance?",
      answer: "To use feature X, follow these steps: ...",
    },
    {
      question: "How do I know my driver is trustworthy?",
      answer: "To use feature X, follow these steps: ...",
    },
    {
      question: "What types of deliveries can I request?",
      answer: "To use feature X, follow these steps: ...",
    },
    {
      question: "What payment methods do you accept?",
      answer: "To use feature X, follow these steps: ...",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="pickupHelp-sec">
        <div className="row">
          <div className="col-md-12">
            {faqItems.map((item, index) => (
              <div className="pickupHelp-mainCard" key={index}>
                <div className="questions-CardHelp">
                  <h5
                    className="pickupHelp-Questions"
                    onClick={() => toggleAnswer(index)} // Toggle answer on click
                  >
                    {item.question}
                    <FontAwesomeIcon
                      className="pickupHelp-downicon"
                      icon={activeIndex === index ? faChevronUp : faChevronDown}
                    />
                  </h5>
                </div>
                {activeIndex === index && (
                  <div className="pickupHelp-answer">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PickupHelp;
