"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Achievement {
  id: number;
  icon: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  category: "Academic" | "Leadership" | "Technical" | "Competition" | "Award" | "Certification";
  images?: string[];
  detailedDescription?: string;
}

export default function EducationSection() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const achievements: Achievement[] = [
    {
      id: 1,
      icon: "🏆",
      title: "Dean's List Recognition",
      organization: "Embry-Riddle Aeronautical University",
      date: "Fall 2025",
      description: "Maintained 4.0 GPA while pursuing Aerospace Engineering degree",
      category: "Academic",
      images: ["/achievements/deans-list-fall-2025.png"],
      detailedDescription: "Consistently named to the Dean's List at Embry-Riddle Aeronautical University for exceptional academic performance throughout all semesters of enrollment. This recognition highlights sustained excellence while completing a rigorous aerospace engineering curriculum within the College of Engineering."
    },
    {
      id: 2,
      icon: "🚀",
      title: "NASA JPL-ERAU Academic Student Exchange Program",
      organization: "NASA Jet Propulsion Laboratory",
      date: "May 2025",
      description: "Selected from competitive applicant pool to network with leading engineers and researchers at NASA JPL",
      category: "Award",
      images: ["/achievements/nasa-jpl-1.png", "/achievements/nasa-jpl-2.png"],
      detailedDescription: "Selected from a competitive applicant pool to participate in the NASA JPL-ERAU Academic Exchange Program in Pasadena, CA. Networked with leading engineers and researchers at NASA's Jet Propulsion Laboratory to gain insight into advanced space mission design, propulsion systems, and career pathways in aerospace innovation."
    },
    {
      id: 3,
      icon: "✈️",
      title: "GE Aerospace L.I.F.T. Summit",
      organization: "GE Aerospace",
      date: "July 2025",
      description: "Selected for competitive, invitation-only program recognizing high-achieving engineering students",
      category: "Leadership",
      images: ["/achievements/ge-lift-1.png", "/achievements/ge-lift-2.png"],
      detailedDescription: "Selected to participate in the GE Aerospace LIFT Summit, a competitive, invitation-only program recognizing high-achieving engineering students with strong technical aptitude and leadership potential. The summit provided exposure to aerospace engineering challenges, industry innovation, and professional development through direct engagement with GE Aerospace engineers and leaders."
    },
    {
      id: 4,
      icon: "�",
      title: "Student Research Symposium Presenter",
      organization: "Embry-Riddle Aeronautical University",
      date: "2025",
      description: "Presented research poster at ERAU's premier campus-wide showcase of student research",
      category: "Academic",
      images: ["/achievements/srs-presentation.png"],
      detailedDescription: "Selected to present my research poster at Embry-Riddle Aeronautical University's Student Research Symposium (SRS), the university's premier campus-wide showcase of undergraduate and graduate research. At this professional academic event, I communicated findings from my XD Lab research to faculty, peers, and industry partners, demonstrating scholarly rigor, technical insight, and effective scientific communication. This experience strengthened my ability to articulate complex concepts, receive constructive feedback, and engage with the broader research community in a scholarly environment."
    },
    {
      id: 5,
      icon: "�",
      title: "AIAA SciTech Forum Publication - XD Lab",
      organization: "XD Lab Research",
      date: "2025",
      description: "Co-authored peer-reviewed research paper accepted at AIAA SciTech Forum",
      category: "Technical",
      detailedDescription: "Co-authored a peer-reviewed research paper through the XD Lab that was accepted for publication at the AIAA SciTech Forum, demonstrating original research contribution, technical rigor, and professional-level scientific communication."
    },
    {
      id: 6,
      icon: "🔬",
      title: "AIAA SciTech Forum Publication - Thermal Sciences",
      organization: "Thermal Sciences Laboratory",
      date: "2025",
      description: "Research on supercritical CO₂ heat transfer accepted at AIAA SciTech Forum",
      category: "Technical",
      detailedDescription: "Conducting advanced thermal–fluids research in the Thermal Sciences Laboratory focused on heat transfer and pressure drop behavior in supercritical CO₂ gas coolers. Developing a Python-based numerical model inspired by Dang and Hihara's experimental work to investigate the influence of surface roughness on local heat transfer coefficients and hydraulic performance. Simulating a tube-in-tube counterflow heat exchanger transferring heat between supercritical CO₂ and water to quantify performance sensitivity to mass flux, operating pressure, and relative roughness. This work supports improved thermal management strategies for high-performance energy and aerospace applications."
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30";
      case "Leadership":
        return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30";
      case "Technical":
        return "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/30";
      case "Competition":
        return "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/30";
      case "Award":
        return "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/30";
      case "Certification":
        return "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30";
      default:
        return "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="education" className="min-h-screen flex items-center justify-center bg-gray-100 text-black dark:bg-gray-950 dark:text-white py-10 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Milestones, awards, and accomplishments throughout my academic and professional journey
          </p>
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div 
                onClick={() => setSelectedAchievement(achievement)}
                className="h-full bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:scale-105 hover:-translate-y-2 cursor-pointer"
              >
                {/* Icon Circle */}
                <div className="mb-3 sm:mb-4 flex items-center justify-between">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl sm:text-3xl shadow-lg">
                    {achievement.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryColor(achievement.category)}`}>
                    {achievement.category}
                  </span>
                </div>

                {/* Click indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                    Click to view →
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  {achievement.organization}
                </p>

                <p className="text-xs text-gray-500 dark:text-gray-500 mb-2 sm:mb-3">
                  {achievement.date}
                </p>

                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-bl-full rounded-tr-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="text-center p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 min-w-[200px]">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              4.0
            </div>
            <div className="text-lg text-gray-600 dark:text-gray-400 mt-3">Cumulative GPA</div>
          </div>
        </motion.div>

        {/* Achievement Detail Modal */}
        <AnimatePresence>
          {selectedAchievement && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
              onClick={() => setSelectedAchievement(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 flex items-center justify-center transition-all z-10"
                >
                  <span className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">×</span>
                </button>

                {/* Content */}
                <div className="p-4 sm:p-8">
                  {/* Header */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl sm:text-4xl shadow-lg">
                        {selectedAchievement.icon}
                      </div>
                      <div className="flex-1">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-2 ${getCategoryColor(selectedAchievement.category)}`}>
                          {selectedAchievement.category}
                        </span>
                        <h3 className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                          {selectedAchievement.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                      {selectedAchievement.organization}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-1">
                      {selectedAchievement.date}
                    </p>
                  </div>

                  {/* Description */}
                  {selectedAchievement.detailedDescription && (
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                        About This Achievement
                      </h4>
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        {selectedAchievement.detailedDescription}
                      </p>
                    </div>
                  )}

                  {/* Certificate/Images */}
                  {selectedAchievement.images && selectedAchievement.images.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Photos
                      </h4>
                      <div className="space-y-4">
                        {selectedAchievement.images.map((img, idx) => (
                          <div key={idx} className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4">
                              <img
                                src={img}
                                alt={`${selectedAchievement.title} image ${idx + 1}`}
                                className="w-full rounded-lg shadow-lg"
                                onError={(e) => {
                                  e.currentTarget.src = `https://via.placeholder.com/800x600/6366f1/ffffff?text=Image+${idx + 1}`;
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
