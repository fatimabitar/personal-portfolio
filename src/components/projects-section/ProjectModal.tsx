import { motion, AnimatePresence } from "framer-motion";
import { Project } from "./types";
import { X } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const images = project.details?.screenshots?.length
    ? project.details.screenshots
    : [project.image];

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: { perView: 1 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          className="relative bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
          >
            <X className="h-5 w-5 text-gray-700" />
          </button>

          <div>
            <div
              ref={sliderRef}
              className="keen-slider h-64 md:h-96 rounded-t-xl overflow-hidden"
            >
              {images.map((src, idx) => (
                <div className="keen-slider__slide" key={idx}>
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-2 justify-center mt-4 px-4 flex-wrap">
              {images.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`border rounded overflow-hidden w-16 h-16 ${
                    idx === currentSlide ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <img
                    src={src}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="p-8">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full mb-3">
                  {project.category}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-500 mb-4">{project.period}</p>
                <p className="text-gray-700 mb-6">{project.description}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {project.detailedDescription?.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Overview
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    {project.detailedDescription.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.details?.challenges?.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Challenges
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    {project.details.challenges.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.details?.solutions?.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Solutions
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    {project.details.solutions.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.details?.results?.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Results
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                    {project.details.results.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.details?.clientReview && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Client Review
                  </h3>
                  <p className="text-sm text-gray-700 italic">
                    "{project.details.clientReview}"
                  </p>
                </div>
              )}

              {project.link && (
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    Visit Live Site
                  </a>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
