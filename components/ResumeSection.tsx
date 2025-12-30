import React from "react";

export default function ResumeSection() {
  return (
    <section id="resume" className="min-h-screen flex items-center justify-center bg-gray-100 text-black dark:bg-gray-950 dark:text-white py-10 sm:py-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center py-8 sm:py-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Resume</h2>
        <p className="text-base sm:text-lg text-gray-700 dark:text-slate-200 mb-4 sm:mb-6">Download or preview my resume below.</p>

        <div className="mb-4 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90">
            Open PDF (new tab)
          </a>
          <a href="/resume.pdf" download className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white hover:opacity-90">
            Download PDF
          </a>
        </div>

        <div className="w-full h-[50vh] sm:h-[70vh] md:h-[60vh] rounded overflow-hidden border border-gray-200 bg-white dark:bg-slate-800">
          <iframe src="/resume.pdf" className="w-full h-full" title="Resume PDF" />
        </div>
      </div>
    </section>
  );
}
