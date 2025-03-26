export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    desc: string;
    skills: string[];
    longDesc: string;
    education: string[];
    experience: {
      company: string;
      role: string;
      period: string;
      description: string;
    }[];
    projects: {
      name: string;
      description: string;
      technologies: string[];
      image: string;
    }[];
    certifications: string[];
    languages: string[];
    contact: {
      email: string;
      linkedin: string;
      github: string;
    };
  }
  
  export const teamMembers: TeamMember[] = [
    {
      id: "jhonatan-diaz",
      name: "Jhonatan Díaz",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      desc: "Especialista en arquitecturas escalables y desarrollo full stack con más de 8 años de experiencia.",
      skills: ["React", "Node.js", "AWS", "TypeScript"],
      longDesc: "Desarrollador Full Stack con amplia experiencia en la creación de aplicaciones web escalables y robustas. Especializado en arquitecturas cloud-native y metodologías ágiles.",
      education: [
        "Ingeniería en Sistemas Computacionales - Universidad Nacional",
        "Maestría en Ingeniería de Software - Universidad Tecnológica"
      ],
      experience: [
        {
          company: "Tech Solutions Inc.",
          role: "Senior Full Stack Developer",
          period: "2020 - Presente",
          description: "Liderazgo técnico en proyectos de transformación digital para clientes Fortune 500."
        },
        {
          company: "Digital Innovators",
          role: "Full Stack Developer",
          period: "2017 - 2020",
          description: "Desarrollo de soluciones e-commerce y sistemas de gestión empresarial."
        }
      ],
      projects: [
        {
          name: "E-commerce Platform",
          description: "Plataforma de comercio electrónico escalable con más de 1M de usuarios activos.",
          technologies: ["React", "Node.js", "AWS", "MongoDB"],
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Healthcare Management System",
          description: "Sistema integral para la gestión de clínicas y hospitales.",
          technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
          image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ],
      certifications: [
        "AWS Certified Solutions Architect",
        "MongoDB Certified Developer",
        "Scrum Master Certified"
      ],
      languages: ["Español (Nativo)", "Inglés (Avanzado)"],
      contact: {
        email: "jhonatan@elevaforge.com",
        linkedin: "linkedin.com/in/jhonatandiaz",
        github: "github.com/jhonatandiaz"
      }
    },
    {
      id: "luis-ceron",
      name: "Luis Cerón",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      desc: "Experto en interfaces de usuario y experiencia de usuario con enfoque en rendimiento y accesibilidad.",
      skills: ["Vue.js", "React", "UI/UX", "WebGL"],
      longDesc: "Desarrollador Frontend apasionado por crear experiencias de usuario excepcionales y accesibles. Especialista en optimización de rendimiento y animaciones web avanzadas.",
      education: [
        "Licenciatura en Diseño Digital - Universidad de Diseño",
        "Especialización en UX/UI - Instituto de Tecnología"
      ],
      experience: [
        {
          company: "Creative Digital Agency",
          role: "Senior Frontend Developer",
          period: "2019 - Presente",
          description: "Desarrollo de interfaces de usuario innovadoras y experiencias interactivas."
        },
        {
          company: "Web Solutions Co.",
          role: "UI Developer",
          period: "2016 - 2019",
          description: "Implementación de diseños responsivos y optimización de rendimiento."
        }
      ],
      projects: [
        {
          name: "3D Product Configurator",
          description: "Configurador de productos en tiempo real con visualización 3D.",
          technologies: ["Three.js", "React", "WebGL", "GSAP"],
          image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Interactive Portfolio Platform",
          description: "Plataforma para crear portfolios interactivos para artistas digitales.",
          technologies: ["Vue.js", "Canvas API", "Firebase"],
          image: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ],
      certifications: [
        "Google UX Design Certificate",
        "Advanced JavaScript Certification",
        "Web Accessibility Specialist"
      ],
      languages: ["Español (Nativo)", "Inglés (Avanzado)", "Francés (Intermedio)"],
      contact: {
        email: "luis@elevaforge.com",
        linkedin: "linkedin.com/in/luisceron",
        github: "github.com/luisceron"
      }
    },
    {
      id: "miguel-cajigas",
      name: "Miguel Cajigas",
      role: "Backend Developer",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      desc: "Especialista en arquitecturas de microservicios y bases de datos distribuidas.",
      skills: ["Python", "Go", "PostgreSQL", "Docker"],
      longDesc: "Desarrollador Backend especializado en diseño y implementación de arquitecturas distribuidas y microservicios. Experto en optimización de bases de datos y sistemas de alta disponibilidad.",
      education: [
        "Ingeniería en Computación - Universidad Tecnológica",
        "Maestría en Ciencias de la Computación - Instituto de Tecnología"
      ],
      experience: [
        {
          company: "Cloud Systems Inc.",
          role: "Senior Backend Developer",
          period: "2018 - Presente",
          description: "Diseño e implementación de arquitecturas de microservicios escalables."
        },
        {
          company: "Data Solutions Corp",
          role: "Database Engineer",
          period: "2015 - 2018",
          description: "Optimización y mantenimiento de bases de datos de alto rendimiento."
        }
      ],
      projects: [
        {
          name: "Distributed Payment System",
          description: "Sistema de pagos distribuido procesando millones de transacciones diarias.",
          technologies: ["Go", "Kubernetes", "Apache Kafka", "PostgreSQL"],
          image: "https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Real-time Analytics Platform",
          description: "Plataforma de análisis en tiempo real para datos IoT.",
          technologies: ["Python", "Apache Spark", "Elasticsearch", "Redis"],
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ],
      certifications: [
        "Certified Kubernetes Administrator",
        "Google Cloud Professional Engineer",
        "Oracle Certified Database Expert"
      ],
      languages: ["Español (Nativo)", "Inglés (Avanzado)"],
      contact: {
        email: "miguel@elevaforge.com",
        linkedin: "linkedin.com/in/miguelcajigas",
        github: "github.com/miguelcajigas"
      }
    },
    {
      id: "santiago-reyes",
      name: "Santiago Reyes",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      desc: "Experto en automatización, CI/CD y arquitecturas cloud nativas.",
      skills: ["Kubernetes", "AWS", "Terraform", "GitOps"],
      longDesc: "Ingeniero DevOps con amplia experiencia en automatización de infraestructura y implementación de prácticas de CI/CD. Especializado en arquitecturas cloud-native y seguridad.",
      education: [
        "Ingeniería en Sistemas - Universidad Tecnológica",
        "Especialización en Cloud Computing - AWS Academy"
      ],
      experience: [
        {
          company: "Cloud Innovations Ltd.",
          role: "Senior DevOps Engineer",
          period: "2019 - Presente",
          description: "Implementación de infraestructura como código y pipelines de CI/CD."
        },
        {
          company: "Tech Operations Co.",
          role: "Systems Engineer",
          period: "2016 - 2019",
          description: "Gestión y automatización de infraestructura cloud."
        }
      ],
      projects: [
        {
          name: "Multi-Cloud Infrastructure",
          description: "Implementación de infraestructura multi-cloud para aplicaciones globales.",
          technologies: ["Terraform", "AWS", "GCP", "Kubernetes"],
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Security Automation Platform",
          description: "Plataforma automatizada de seguridad y cumplimiento.",
          technologies: ["Python", "AWS Security Hub", "Docker", "Jenkins"],
          image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ],
      certifications: [
        "AWS Certified DevOps Engineer",
        "Certified Kubernetes Administrator",
        "HashiCorp Certified Terraform Associate"
      ],
      languages: ["Español (Nativo)", "Inglés (Avanzado)"],
      contact: {
        email: "santiago@elevaforge.com",
        linkedin: "linkedin.com/in/santiagoreyes",
        github: "github.com/santiagoreyes"
      }
    }
  ];