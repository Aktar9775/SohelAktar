export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'fullstack' | 'other';
  featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  level: number; // 1-5
}

export interface SiteData {
  personal: {
    name: string;
    title: string;
    bio: string;
    email: string;
    phone: string;
    location: string;
    avatar: string;
    resume: string;
    social: {
      github: string;
      linkedin: string;
      twitter: string;
    };
  };
  projects: Project[];
  blogPosts: BlogPost[];
  experience: Experience[];
  skills: Skill[];
}