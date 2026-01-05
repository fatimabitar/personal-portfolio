import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    { name: "React.js", color: "from-blue-400 to-blue-600" },
    { name: "TypeScript", color: "from-sky-400 to-blue-600" },
    { name: "Tailwind CSS", color: "from-blue-500 to-sky-500" },
    { name: "Next.js", color: "from-sky-500 to-blue-500" },
    { name: "JavaScript", color: "from-blue-600 to-sky-400" },
    { name: "GSAP", color: "from-sky-600 to-blue-400" },
  ];

  const experience = [
    {
      title: "Frontend Developer",
      company: "Divcodes",
      period: "2024 - Current",
      location: "Lebanon",
      description:
        "Build responsive, user-friendly web applications using React.js, Next.js and modern tools.",
    },
    {
      title: "React Developer",
      company: "Rare Web",
      period: "2025 - Current",
      location: "Lattakia",
      description:
        "Specializing in building dynamic, responsive web applications using React and TypeScript.",
    },
    {
      title: "Frontend Developer",
      company: "Codlex",
      period: "2021 - 2022",
      location: "Syria",
      description:
        "Developed responsive designs and reusable components for enhanced user experience.",
    },
  ];

  const education = [
    {
      degree: "Master in Web Sciences",
      institution: "Syrian Virtual University",
      period: "2024 - Current",
      status: "In Progress",
    },
    {
      degree: "Bachelor in Informatics Engineering",
      institution: "Tishreen University",
      period: "2015 - 2020",
      status: "Completed",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gray-50 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2a65e5]">
            About Me
          </h2>
          <p className="text-xl text-black font-thin max-w-3xl mx-auto">
            I'm a passionate Frontend Developer with a focus on React.js and
            TypeScript. Currently pursuing a Master's degree in Web Sciences,
            I'm committed to continuous learning and seeking opportunities to
            grow my skills internationally.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Technical Skills
            </h3>

            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`cursor-default rounded-full px-5 py-2 bg-gradient-to-r ${skill.color} text-white font-semibold shadow-md hover:scale-105 transform transition-transform duration-300 select-none`}
                >
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Work Experience & Education side-by-side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Work Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-6 border-l-2 border-blue-500"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />
                    <div className="bg-white rounded-lg p-6 shadow">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {exp.title}
                      </h4>
                      <p className="text-blue-600 font-medium">
                        {exp.company} • {exp.location}
                      </p>
                      <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-6 shadow"
                  >
                    <h4 className="text-lg font-semibold text-gray-900">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 font-medium">
                      {edu.institution}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-sm text-gray-500">{edu.period}</p>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === "In Progress"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
