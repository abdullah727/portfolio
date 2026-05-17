export interface ExperienceItem {
  company: string;
  companyUrl?: string;
  location: string;
  role: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: string[];
  nda?: boolean;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
