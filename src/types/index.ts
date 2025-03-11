export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  image: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Article {
  title: string;
  url: string;
  platform: string;
  date: string;
  description: string;
}

export interface Skills {
  programming: string[];
  frameworks: string[];
  tools: string[];
  domains: string[];
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  instagram: string;
  facebook: string;
  email: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  phone: string;
  email: string;
  location: string;
  experience: Experience[];
  education: Education[];
  skills: Skills;
  articles: Article[];
  projects: Project[];
  certifications: Certification[];
  socialLinks: SocialLinks;
}