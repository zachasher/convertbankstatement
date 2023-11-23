'use client';

import { useState } from 'react';
import React from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: 'How does StatementConverter process and convert PDF bank statements?',
      content: 'StatementConverter uses advanced AI technologies, including Machine Learning, and OCR, to turn PDF bank statements into Excel, CSV, or JSON formats. Our standout feature is our high accuracy rate when converting bank statements. This high level of precision makes StatementConverter an ideal choice for those who require accuracy for workflow automation.'
    },
    {
      title: "What kinds of bank statements can be converted?",
      content: "Our tool can convert any bank statement, no matter the format or layout. We don't use fixed templates, so our tool works with every kind of statement. Our AI technology makes it easy to identify the data you need from any bank statement in the world."
    },
    {
      title: "Is my data secure with StatementConverter?",
      content: "Your data security is our top priority. We assure you that your information is completely safe with StatementConverter. After conversion, your data is promptly removed from our systems to ensure maximum privacy and security."
    }
    // Add more items as needed
  ];

  return (
    <div className="flex flex-col items-center mx-auto py-8 bg-white">
      <h2 className='text-black font-bold text-3xl'>Frequently Asked Questions</h2>
      <div className="w-1/2 mx-auto py-8 bg-white">
        {accordionItems.map((item, index) => (
          <div key={index} className="border rounded-md mb-2">
            <div
              className="flex justify-between items-center bg-white p-4 cursor-pointer border border-b-1 border-gray-200 rounded-t-md"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-semibold text-black">{item.title}</h3>
              <svg
                className={`w-6 h-6 transition-transform transform ${
                  openIndex === index ? 'rotate-270' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={openIndex === index ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                />
              </svg>
            </div>
            {openIndex === index && (
              <div className="p-4 bg-white">
                <p className="text-gray-700">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
