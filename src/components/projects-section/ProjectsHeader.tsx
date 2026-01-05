import { motion } from "framer-motion";

const ProjectsHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2a65e5]">
        Featured Projects
      </h2>
      <p className="text-xl text-gray-800 font-thin max-w-3xl mx-auto">
        A showcase of my recent work in web development, demonstrating expertise
        in modern React.js applications.
      </p>
    </motion.div>
  );
};

export default ProjectsHeader;
