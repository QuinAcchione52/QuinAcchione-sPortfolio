"use client";

import React from "react";
import { BsLinkedin, BsEnvelope, BsPhone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <BsLinkedin className="text-3xl" />,
      label: "LinkedIn",
      value: "Quinten Acchione",
      link: "https://www.linkedin.com/in/quinten-acchione/",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:shadow-blue-500/50"
    },
    {
      icon: <BsEnvelope className="text-3xl" />,
      label: "School Email",
      value: "acchionq@my.erau.edu",
      link: "mailto:acchionq@my.erau.edu",
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:shadow-purple-500/50"
    },
    {
      icon: <MdEmail className="text-3xl" />,
      label: "Personal Email",
      value: "quinten.acchione@gmail.com",
      link: "mailto:quinten.acchione@gmail.com",
      color: "from-indigo-500 to-indigo-600",
      hoverColor: "hover:shadow-indigo-500/50"
    },
    {
      icon: <BsPhone className="text-3xl" />,
      label: "Phone",
      value: "(609) 444-6015",
      link: "tel:+16094446015",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:shadow-green-500/50"
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white py-10 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            I'm always open to discussing new opportunities, collaborations, or just connecting with fellow aerospace enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.label === "LinkedIn" ? "_blank" : undefined}
              rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} p-1 transition-all duration-300 hover:scale-105 ${item.hoverColor} hover:shadow-2xl`}
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full flex items-center gap-3 sm:gap-4 transition-all duration-300 group-hover:bg-opacity-95">
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg">
                  {item.icon}
                </div>
                <div className="flex-1 text-left">
                  <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${item.color} group-hover:bg-clip-text transition-all duration-300 break-all sm:break-normal">
                    {item.value}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-all duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 sm:mt-16 text-center space-y-4 sm:space-y-6">
          <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
            Looking forward to hearing from you!
          </p>
          
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState(null, '', '/');
            }}
            className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white font-semibold text-base sm:text-lg shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
            Back to Top
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
