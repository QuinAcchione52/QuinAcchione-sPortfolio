"use client";

import React from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  category: "Software" | "Hardware" | "Programming" | "Manufacturing" | "Interpersonal";
  icon: string;
}

export default function SkillsSection() {
  const technicalSkills: Skill[] = [
    // Software
    { name: "CATIA", category: "Software", icon: "🔧" },
    { name: "SolidWorks", category: "Software", icon: "📐" },
    { name: "Autodesk Fusion 360", category: "Software", icon: "🎨" },
    { name: "Microsoft Office", category: "Software", icon: "📊" },
    { name: "Visio", category: "Software", icon: "📋" },
    { name: "STK", category: "Software", icon: "🛰️" },
    { name: "AutoCAD", category: "Software", icon: "📏" },
    { name: "Nexus", category: "Software", icon: "🔗" },
    { name: "BetaFlight", category: "Software", icon: "🛸" },
    { name: "CFD", category: "Software", icon: "🌊" },
    
    // Hardware
    { name: "Vicon", category: "Hardware", icon: "📹" },
    
    // Programming
    { name: "MATLAB", category: "Programming", icon: "📈" },
    { name: "Python", category: "Programming", icon: "🐍" },
    { name: "C++", category: "Programming", icon: "💻" },
    { name: "JavaScript", category: "Programming", icon: "⚡" },
    
    // Manufacturing
    { name: "3D Printing", category: "Manufacturing", icon: "🖨️" },
    { name: "Soldering", category: "Manufacturing", icon: "🔥" },
  ];

  const interpersonalSkills: Skill[] = [
    { name: "Leadership", category: "Interpersonal", icon: "👑" },
    { name: "Time Management", category: "Interpersonal", icon: "⏱️" },
    { name: "Teamwork", category: "Interpersonal", icon: "🤝" },
    { name: "Problem-Solving", category: "Interpersonal", icon: "🧩" },
    { name: "Emotional Intelligence", category: "Interpersonal", icon: "💡" },
    { name: "Adaptable", category: "Interpersonal", icon: "🔄" },
    { name: "Attentive", category: "Interpersonal", icon: "👁️" },
    { name: "Resilient", category: "Interpersonal", icon: "💪" },
    { name: "Strong Work Ethic", category: "Interpersonal", icon: "⚙️" },
    { name: "Project Management", category: "Interpersonal", icon: "📅" },
    { name: "Communication", category: "Interpersonal", icon: "💬" },
    { name: "Presentation Skills", category: "Interpersonal", icon: "🎤" },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Software: "from-blue-500 to-cyan-600",
      Hardware: "from-orange-500 to-red-600",
      Programming: "from-green-500 to-emerald-600",
      Manufacturing: "from-purple-500 to-indigo-600",
      Interpersonal: "from-pink-500 to-rose-600",
    };
    return colors[category as keyof typeof colors];
  };

  return (
    <section className="py-8 sm:py-12 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-3 text-center bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
            Technical Expertise & Professional Capabilities
          </p>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-8"
        >
          <h3 className="text-lg sm:text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Technical Skills
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 max-w-6xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.01 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`relative bg-gradient-to-br ${getCategoryColor(skill.category)} p-[1px] rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-105`}>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-2 sm:p-3 h-full flex flex-col items-center justify-center gap-1">
                    <span className="text-lg sm:text-xl">{skill.icon}</span>
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-900 dark:text-white text-center leading-tight">
                      {skill.name}
                    </span>
                    <span className="text-[8px] sm:text-[10px] text-gray-500 dark:text-gray-400">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interpersonal Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Interpersonal Skills
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-2 sm:gap-3 max-w-6xl mx-auto">
            {interpersonalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.01 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`relative bg-gradient-to-br ${getCategoryColor(skill.category)} p-[1px] rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 hover:scale-105 hover:shadow-pink-500/20`}>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-2 sm:p-3 h-full flex flex-col items-center justify-center gap-1">
                    <span className="text-lg sm:text-xl">{skill.icon}</span>
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-900 dark:text-white text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {["Software", "Hardware", "Programming", "Manufacturing", "Interpersonal"].map((category) => (
            <div key={category} className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${getCategoryColor(category)}`}></div>
              <span className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">{category}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
