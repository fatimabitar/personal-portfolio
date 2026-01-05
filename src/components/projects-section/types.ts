export interface ProjectDetails {
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  screenshots?: string[];
  clientReview?: string;
}

export interface Project {
  title: string;
  period: string;
  description: string;
  detailedDescription?: string[];
  technologies: string[];
  category: string;
  status: "Active" | "Completed" | "Live" | "Demo";
  image: string;
  link?: string;
  details?: ProjectDetails;
}
