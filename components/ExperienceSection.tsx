"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Experience {
  id: number;
  type: "Research" | "Internship" | "Project";
  title: string;
  organization: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  images: string[];
  detailedDescription: string;
  challenges?: string[];
  outcomes?: string[];
  pdfDocument?: string;
}

export default function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const experiences: Experience[] = [
    {
      id: 1,
      type: "Project",
      title: "Design Optimization of a Multi-Component Assembly",
      organization: "CATIA V5 Design Project",
      duration: "Aug 2023 - Dec 2023",
      description: "This project involved the 3D modeling and redesign of a complex Batmobile assembly in CATIA V5, consisting of 20 unique pieces.",
      achievements: [
        "Designed custom rear aileron to improve aerodynamic characteristics",
        "Redesigned tires to enhance realism and mechanical robustness",
        "Added windshield to improve vehicle safety while maintaining design integrity"
      ],
      technologies: ["CATIA V5", "3D Modeling", "Reverse Engineering", "Component Integration", "Design Optimization"],
      images: ["/projects/batmobile-1.jpg", "/projects/batmobile-2.jpg", "/projects/batmobile-3.jpg"],
      detailedDescription: "This project involved the 3D modeling and redesign of a complex Batmobile assembly in CATIA V5, consisting of 20 unique pieces. After analyzing the original design for functionality and aesthetics, I developed three custom components to enhance overall performance and visual impact. These improvements included: designed a custom rear aileron to improve aerodynamic characteristics, improved the tires to enhance realism and mechanical robustness, and integrated a windshield component to enhance structural integrity and occupant safety compliance. The project emphasized reverse engineering, component integration, and design optimization while maintaining compatibility within the full assembly.",
      pdfDocument: "/Acchione_FinalDrawingPackage.pdf",
      challenges: [
        "Maintaining compatibility with existing 20-piece assembly structure",
        "Balancing aerodynamic performance with aesthetic design goals",
        "Ensuring mechanical robustness while improving visual realism"
      ],
      outcomes: [
        "Successfully integrated 3 custom components into the assembly",
        "Enhanced aerodynamic profile through optimized aileron design",
        "Achieved improved safety standards with windshield integration"
      ]
    },
    {
      id: 2,
      type: "Project",
      title: "Water Distribution Tank Design for El Tunel, Nicaragua",
      organization: "Engineers Without Borders - ERAU Chapter",
      duration: "Aug 2023 - Dec 2024",
      description: "Actively involved in a research and design project aimed at developing a working water distribution system for the community of El Tunel, Nicaragua.",
      achievements: [
        "Designed water tank and support platform using SolidWorks CAD software",
        "Conducted comprehensive stress analysis testing to ensure structural integrity",
        "Contributed to sustainable water infrastructure for underserved community"
      ],
      technologies: ["SolidWorks", "Stress Analysis", "CAD Design", "Structural Engineering", "Community Development"],
      images: [],
      detailedDescription: "Actively involved in a research and design project aimed at developing a working water distribution system for the community of El Tunel, Nicaragua. Utilized SolidWorks to design and perform stress analysis testing on a water tank and water tank platform, ensuring the structural integrity and safety of critical infrastructure components for the community's water distribution needs.",
      challenges: [
        "Designing for real-world environmental conditions in Nicaragua",
        "Ensuring structural safety with limited material availability",
        "Balancing cost-effectiveness with durability requirements"
      ],
      outcomes: [
        "Successfully validated water tank design through stress analysis",
        "Delivered engineering drawings and documentation for implementation",
        "Contributed to improved water access for El Tunel community"
      ]
    },
    {
      id: 3,
      type: "Project",
      title: "Custom FPV 5-Inch Drone Build & Flight System Integration",
      organization: "Personal Engineering Project",
      duration: "Summer 2024",
      description: "Designed, assembled, and calibrated a custom 5-inch FPV racing drone, integrating electrical components and optimizing flight performance through BetaFlight configuration.",
      achievements: [
        "Soldered and integrated electrical components including flight controller, ESCs, and transmitter",
        "Assembled complete airframe with motors, propellers, and structural components",
        "Implemented testing and calibration procedures using BetaFlight for optimal performance"
      ],
      technologies: ["BetaFlight", "Soldering", "Flight Control Systems", "Electronics Integration", "Systems Testing"],
      images: ["/projects/fpv-drone-1.jpg", "/projects/fpv-drone-2.jpg", "/projects/fpv-drone-3.jpg"],
      detailedDescription: "Designed, assembled, and calibrated a custom 5-inch FPV racing drone from the ground up. This hands-on project involved precision soldering of electrical components including the flight controller, electronic speed controllers (ESCs), and transmitter systems. Assembled the frame, motors, and propellers to construct a fully functional drone capable of stable flight. Implemented comprehensive testing and calibration procedures using BetaFlight firmware to ensure optimal drone performance, including PID tuning and flight mode configuration.",
      challenges: [
        "Precision soldering of delicate electronic components without damage",
        "Troubleshooting electrical connectivity and signal integrity issues",
        "Fine-tuning flight parameters for stable and responsive control"
      ],
      outcomes: [
        "Successfully built fully functional FPV racing drone from components",
        "Achieved stable flight characteristics through BetaFlight calibration",
        "Gained hands-on experience in electronics integration and flight systems"
      ]
    },
    {
      id: 4,
      type: "Research",
      title: "AI-Driven Trajectory Optimization Research",
      organization: "Embry-Riddle XD Lab - Daytona Beach, FL",
      duration: "May 2025 - Present",
      description: "Implementing genetic algorithms and reinforcement learning AI agents in Python for comprehensive global optimization of interplanetary and halo-orbit transfer trajectories.",
      achievements: [
        "Developed genetic algorithms for multi-objective trajectory optimization",
        "Implemented reinforcement learning agents for autonomous trajectory planning",
        "Optimized interplanetary and halo-orbit transfer trajectories using advanced AI techniques"
      ],
      technologies: ["Python", "Genetic Algorithms", "Reinforcement Learning", "Machine Learning", "Orbital Mechanics", "Trajectory Optimization"],
      images: [],
      detailedDescription: "Conducting cutting-edge research at the Embry-Riddle XD Lab focusing on artificial intelligence applications in spaceflight trajectory optimization. Implementing genetic algorithms and reinforcement learning AI agents in Python for comprehensive global optimization of interplanetary and halo-orbit transfer trajectories. This research combines advanced machine learning techniques with orbital mechanics to develop autonomous systems capable of finding optimal spacecraft trajectories for complex mission scenarios.",
      challenges: [
        "Balancing computational efficiency with solution optimality in high-dimensional search spaces",
        "Integrating physics-based constraints into AI learning frameworks",
        "Developing robust algorithms that generalize across diverse mission scenarios"
      ],
      outcomes: [
        "Successfully implemented AI-driven optimization framework for trajectory design",
        "Demonstrated improved convergence rates compared to traditional methods",
        "Contributing to advancement of autonomous mission planning capabilities"
      ]
    },
    {
      id: 5,
      type: "Internship",
      title: "Lead Drone Developmental Engineer Intern",
      organization: "Phemotron Systems - Daytona Beach, FL",
      duration: "May 2025 - Aug 2025",
      description: "Overseeing the design and manufacturing of custom Unmanned Aerial Systems (UAS) tailored for surveillance, mapping, delivery, and autonomous flight operations while supporting CubeSat payload integration.",
      achievements: [
        "Led design and manufacturing of custom UAS for surveillance, mapping, and delivery applications",
        "Supported payload subsystem integration for AI-MotherBox-1 CubeSat mission",
        "Integrated multispectral optical imager into CubeSat payload architecture"
      ],
      technologies: ["UAS Design", "Autonomous Flight Systems", "CubeSat Engineering", "Payload Integration", "Multispectral Imaging", "Systems Engineering"],
      images: ["/projects/phemotron-1.jpg", "/projects/phemotron-2.jpg", "/projects/phemotron-3.jpg", "/projects/phemotron-4.jpg", "/projects/phemotron-5.jpg", "/projects/phemotron-6.jpg", "/projects/phemotron-7.jpg", "/projects/phemotron-8.jpg"],
      detailedDescription: "Served as Lead Drone Developmental Engineer Intern at Phemotron Systems, overseeing the design and manufacturing of custom Unmanned Aerial Systems (UAS) tailored for applications in surveillance, mapping, delivery, and other advanced autonomous flight operations. Simultaneously supported the payload subsystem for the AI-MotherBox-1 CubeSat, specifically focused on the integration and performance optimization of its multispectral optical imager. This dual-role position bridged aerospace vehicle development across both atmospheric and space domains.",
      challenges: [
        "Balancing requirements for multiple UAS platforms with diverse mission profiles",
        "Integrating complex multispectral imaging payload within CubeSat size constraints",
        "Coordinating between drone development and space systems engineering workflows"
      ],
      outcomes: [
        "Successfully designed and manufactured custom UAS platforms for multiple applications",
        "Achieved successful integration of multispectral imager into CubeSat payload",
        "Developed expertise in both atmospheric and space vehicle systems engineering"
      ]
    },
    {
      id: 6,
      type: "Research",
      title: "Supercritical CO₂ Heat Transfer Research",
      organization: "Embry-Riddle Thermal Sciences Lab - Daytona Beach, FL",
      duration: "Sep 2025 - Present",
      description: "Investigating the influence of surface roughness on heat transfer and pressure drop in supercritical CO₂ gas coolers using Python-based numerical modeling.",
      achievements: [
        "Developed Python-based numerical model for supercritical CO₂ heat transfer analysis",
        "Simulated tube-in-tube counterflow heat exchanger performance under varying conditions",
        "Investigated surface roughness effects on heat transfer and pressure drop characteristics"
      ],
      technologies: ["Python", "Numerical Modeling", "Heat Transfer Analysis", "Thermodynamics", "Supercritical Fluids", "CFD"],
      images: [],
      detailedDescription: "Conducting thermal sciences research at the Embry-Riddle Thermal Sciences Lab, investigating the influence of surface roughness on heat transfer and pressure drop in supercritical CO₂ gas coolers using a Python-based numerical model inspired by Dang & Hihara's experimental work. Simulating a tube-in-tube counterflow heat exchanger transferring heat between supercritical CO₂ and H₂O to determine performance impacts at varying mass flux, pressure, and relative roughness. This research contributes to advancing understanding of supercritical CO₂ thermal systems for next-generation power cycles and cooling applications.",
      challenges: [
        "Accurately modeling complex thermophysical properties of supercritical CO₂",
        "Correlating surface roughness effects with experimental validation data",
        "Optimizing numerical convergence across wide ranges of operating conditions"
      ],
      outcomes: [
        "Successfully developed and validated numerical heat exchanger model",
        "Quantified surface roughness impacts on system performance",
        "Generated insights for supercritical CO₂ system design optimization"
      ]
    }
  ];

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "Research":
        return "bg-purple-500/20 text-purple-600 dark:text-purple-400 border-purple-500/50";
      case "Internship":
        return "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/50";
      case "Project":
        return "bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/50";
      default:
        return "bg-gray-500/20 text-gray-600 dark:text-gray-400 border-gray-500/50";
    }
  };

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white py-10 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4 text-center bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 sm:mb-16 text-base sm:text-lg">
            Research, Internships, and Projects
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 opacity-20"></div>

          {/* Experience Cards */}
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div 
                    onClick={() => setSelectedExperience(exp)}
                    className="group relative bg-gray-50 dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 hover:scale-105 cursor-pointer"
                  >
                    {/* Type Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getBadgeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</span>
                    </div>

                    {/* Title & Organization */}
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                      {exp.organization}
                    </p>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                      {exp.description}
                    </p>

                    {/* Click to learn more indicator */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold">
                        Click for details →
                      </span>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <span className="text-purple-500 mr-2">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-md text-xs text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-4 border-white dark:border-black shadow-lg"></div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedExperience && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
              onClick={() => setSelectedExperience(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 flex items-center justify-center transition-all z-10"
                >
                  <span className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">×</span>
                </button>

                {/* Image Gallery */}
                {selectedExperience.images.length > 0 && (
                  <div className="relative h-48 sm:h-72 bg-gradient-to-br from-purple-500 to-blue-500 rounded-t-2xl sm:rounded-t-3xl overflow-hidden">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-2 sm:p-4 h-full">
                      {selectedExperience.images.map((img, idx) => (
                        <div
                          key={idx}
                          className="relative bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden"
                        >
                          <img
                            src={img}
                            alt={`${selectedExperience.title} ${idx + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = `https://via.placeholder.com/400x300/6366f1/ffffff?text=Image+${idx + 1}`;
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="p-4 sm:p-8">
                  {/* Header */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 flex-wrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getBadgeColor(selectedExperience.type)}`}>
                        {selectedExperience.type}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {selectedExperience.duration}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedExperience.title}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
                      {selectedExperience.organization}
                    </p>
                  </div>

                  {/* Detailed Description */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      Overview
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedExperience.detailedDescription}
                    </p>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {selectedExperience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start text-sm sm:text-base text-gray-700 dark:text-gray-300">
                          <span className="text-purple-500 mr-2 sm:mr-3 text-lg sm:text-xl">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenges & Outcomes Grid */}
                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    {selectedExperience.challenges && (
                      <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                          Challenges
                        </h4>
                        <ul className="space-y-2">
                          {selectedExperience.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300 text-sm">
                              <span className="text-orange-500 mr-2">▸</span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedExperience.outcomes && (
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          Outcomes
                        </h4>
                        <ul className="space-y-2">
                          {selectedExperience.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300 text-sm">
                              <span className="text-green-500 mr-2">▸</span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg text-sm text-gray-800 dark:text-gray-200 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* PDF Document Viewer */}
                  {selectedExperience.pdfDocument && (
                    <div className="mt-8">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Technical Documentation
                      </h4>
                      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-1 rounded-2xl">
                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                              </div>
                              <div>
                                <h5 className="text-lg font-bold text-gray-900 dark:text-white">Final Drawing Package</h5>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Complete CAD documentation & technical drawings</p>
                              </div>
                            </div>
                            <a
                              href={selectedExperience.pdfDocument}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
                            >
                              View Full PDF
                            </a>
                          </div>
                          <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                            <iframe
                              src={selectedExperience.pdfDocument}
                              className="w-full h-96"
                              title="Project Documentation"
                            />
                          </div>
                        </div>
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
