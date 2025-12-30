"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ResumeSection() {
  return (
    <section id="resume" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-black text-black dark:text-white py-10 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 sm:mb-8">
            Download or preview my complete professional resume
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open in New Tab
          </a>
          <a 
            href="/resume.pdf" 
            download 
            className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-purple-500 dark:border-indigo-500 bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-purple-600 dark:text-indigo-400 hover:bg-purple-500 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-2"
        >
          <div className="w-full h-[50vh] sm:h-[70vh] md:h-[75vh] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
            <iframe src="/resume.pdf" className="w-full h-full" title="Resume PDF" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
