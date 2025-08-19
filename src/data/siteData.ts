import { SiteData } from '../types';

export const siteData: SiteData = {
  personal: {
    name: "Sohel Aktar",
    title: "Full Stack Developer & Software Engineer",
    bio: "I am a Software Engineer and Full Stack Developer working 2+ years of real-world problem. Skilled in solving problems by applying efficient, scalable, and modern technology solutions.Hands-on with React.js, Node.js, REST APIs, Firebase, WebSocket, and cloud services like AWS.DevOps expertise in Docker, Kubernetes, Kafka, Git, CI/CD, and containerized deployments.Hardworking and consistent—committed to delivering optimal solutions using the latest tech daily",
    email: "sohelaktar9775@example.com",
    phone: "NA",
    location: "Delhi,India",
    avatar: "/Copy.jpg",
    resume: "/resume.pdf",
    social: {
      github: "https://github.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson",
      twitter: "https://twitter.com/alexjohnson"
    }
  },
  projects: [
    {
      id: "1",
      title: "O`Note (AI-powered note-taking)",
      description: "O’Note, an AI-powered note-taking web app with rich-text editing, smart suggestions (OpenAI), real-time sync (Firebase), PDF export, and secure sharing across platforms.",
      image: "/O`Note.png",
      technologies: ["React", "Node.js", "OpenAI", "Firebase", "Tailwind CSS"],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/alexjohnson/ecommerce",
      category: "fullstack",
      featured: true
    },
    {
      id: "2",
      title: "Portfolio",
      description: "Our Portfolio you can visit and Subscribe us for any thing you have an idea yo can tell us .Our team work for you.",
      image: "/portfolio.png",
      technologies: ["React","typescript" ,"Node.js", "Doker", "Kubernetes", "Tailwind CSS"],
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/alexjohnson/ecommerce",
      category: "fullstack",
      featured: true
    },
    {
      id: "3",
      title: "Chat Appication",
      description: "Built a real-time chat app with React, Node.js, and Socket.IO, featuring secure login, live messaging, and file sharing.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE5MVcmf_-QGYaGlzB4dqqOtVMFHUjaT44dA&s",
      technologies: ["React", "Docker", "Material-UI", "Socket.io"],
      liveUrl: "https://taskflow-app.com",
      githubUrl: "https://github.com/alexjohnson/taskflow",
      category: "web",
      featured: true
    },
    {
      id: "4",
      title: "Mess Management",
      description: "Built a React-based Mess Management System with real-time meal tracking, feedback, billing, and secure role-based access.",
      image: "/mess.png",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      liveUrl: "https://weather-dashboard-demo.com",
      githubUrl: "https://github.com/alexjohnson/weather-dashboard",
      category: "web",
      featured: false
    },
    {
      id: "5",
      title: "Task Management",
      description: "Android Kotlin Based dayli task managementapp with daily plans, progress tracking, and social features.",
      image: "https://www.chanty.com/blog/wp-content/uploads/2020/10/Task-manager-apps-scaled.jpg",
      technologies: ["React Native", "Redux", "SQLite", "Firebase"],
      githubUrl: "https://github.com/alexjohnson/fitness-app",
      category: "mobile",
      featured: true
    },
     {
      id: "6",
      title: "URL_Shortner",
      description: "Short URL is the application for create short URL of any live URL on the internet",
      image: "/urlshort.png",
      technologies: ["React", "Javascript", "JWT", "NodeJS"],
      githubUrl: "https://github.com/alexjohnson/fitness-app",
      category: "mobile",
      featured: true
    }
  ],
  blogPosts: [
    
  ],
  experience: [
    {
      id: "1",
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      startDate: "2022-01",
      description: "Led development of multiple client projects, mentored junior developers, and implemented CI/CD pipelines. Reduced application load times by 40% through performance optimizations.",
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      id: "2",
      company: "StartupXYZ",
      position: "Frontend Developer",
      startDate: "2020-03",
      endDate: "2021-12",
      description: "Built responsive web applications from scratch, collaborated with design team to implement pixel-perfect UIs, and integrated with REST APIs.",
      technologies: ["React", "TypeScript", "SASS", "Redux", "Jest"]
    },
    {
      id: "3",
      company: "Digital Agency Inc",
      position: "Junior Developer",
      startDate: "2019-06",
      endDate: "2020-02",
      description: "Developed and maintained client websites, implemented responsive designs, and learned modern web development best practices.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"]
    }
  ],
  skills: [
   
  ]
};