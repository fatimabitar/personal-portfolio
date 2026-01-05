import { Filter, X } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectsFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onClearFilters: () => void;
  filteredCount: number;
  totalCount: number;
}

const ProjectsFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
  onClearFilters,
  filteredCount,
  totalCount,
}: ProjectsFilterProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <div className="flex flex-wrap items-center gap-4 justify-center mb-6">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-blue-600" />
          <span className="text-lg font-semibold text-gray-900">Filter:</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium text-gray-700 self-center">
            Category:
          </span>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {selectedCategory !== "All" && (
        <div className="flex justify-center">
          <button
            onClick={onClearFilters}
            className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
          >
            <X className="h-4 w-4" />
            Clear Filter
          </button>
        </div>
      )}

      <div className="text-center mt-4">
        <span className="text-sm text-gray-600">
          Showing {filteredCount} of {totalCount} projects
        </span>
      </div>
    </motion.div>
  );
};

export default ProjectsFilter;
