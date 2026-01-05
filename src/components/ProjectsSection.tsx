import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "./projects-section/types";
import { projects } from "./projects-section/ProjectsData";
import ProjectsHeader from "./projects-section/ProjectsHeader";
import ProjectsFilter from "./projects-section/ProjectsFilter";
import ProjectCard from "./projects-section/ProjectCard";
import ProjectModal from "./projects-section/ProjectModal";


const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      return (
        selectedCategory === "All" || project.category === selectedCategory
      );
    });
  }, [selectedCategory]);

  const clearFilters = () => setSelectedCategory("All");

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectsHeader />

        <ProjectsFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onClearFilters={clearFilters}
          filteredCount={filteredProjects.length}
          totalCount={projects.length}
        />

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
