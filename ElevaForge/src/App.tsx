import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Code2, Users, Sparkles, Send, ChevronRight, Phone, Mail, MapPin, Globe, Database, Shield, Cpu, Layout, Smartphone, Github, Star, Award, Briefcase, Coffee, Heart, Zap } from 'lucide-react';
import { teamMembers } from './data/team';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isVisible, setIsVisible] = useState({
    services: false,
    process: false,
    technologies: false,
    portfolio: false,
    github: false,
    stats: false,
    team: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'process', 'technologies', 'portfolio', 'github', 'stats', 'team'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          setIsVisible(prev => ({
            ...prev,
            [section]: rect.top < window.innerHeight - 100
          }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-ef-gray">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-ef-dark to-ef-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10"></div>
        </div>
        <nav className="container mx-auto px-6 py-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Code2 className="h-10 w-10 text-ef-yellow animate-spin-slow" />
              <span className="text-2xl font-bold">Eleva Forge</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-ef-yellow transition-colors">Servicios</a>
              <a href="#technologies" className="hover:text-ef-yellow transition-colors">Tecnologías</a>
              <a href="#portfolio" className="hover:text-ef-yellow transition-colors">Portafolio</a>
              <a href="#team" className="hover:text-ef-yellow transition-colors">Equipo</a>
              <a href="#contact" className="hover:text-ef-yellow transition-colors">Contacto</a>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 animate-slide-up">
              Forjando el Futuro Digital
              <span className="text-ef-yellow">.</span>
            </h1>
            <p className="text-xl mb-8 text-ef-gray animate-slide-up" style={{animationDelay: '0.2s'}}>
              Transformamos ideas innovadoras en soluciones digitales excepcionales. 
              Expertos en desarrollo web que elevan tu visión al siguiente nivel.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#contact" 
                className="bg-ef-yellow text-ef-dark px-8 py-4 rounded-lg font-semibold inline-flex items-center hover:bg-ef-orange transition-all transform hover:scale-105 animate-slide-up"
                style={{animationDelay: '0.4s'}}
              >
                Inicia Tu Proyecto
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#portfolio" 
                className="border-2 border-ef-yellow text-ef-yellow px-8 py-4 rounded-lg font-semibold inline-flex items-center hover:bg-ef-yellow hover:text-ef-dark transition-all transform hover:scale-105 animate-slide-up"
                style={{animationDelay: '0.6s'}}
              >
                Ver Portafolio
                <Briefcase className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div id="stats" className="bg-ef-dark/50 backdrop-blur-lg py-12 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: <Star className="h-8 w-8 text-ef-yellow" />, number: "100+", label: "Proyectos Completados" },
                { icon: <Users className="h-8 w-8 text-ef-blue" />, number: "50+", label: "Clientes Satisfechos" },
                { icon: <Coffee className="h-8 w-8 text-ef-orange" />, number: "5+", label: "Años de Experiencia" },
                { icon: <Award className="h-8 w-8 text-ef-yellow" />, number: "15+", label: "Reconocimientos" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center ${isVisible.stats ? 'animate-scale' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-ef-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-ef-dark">
            Servicios Especializados
            <div className="w-20 h-1 bg-ef-yellow mx-auto mt-4"></div>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-12 w-12 text-ef-orange" />,
                title: "Desarrollo Web",
                desc: "Sitios web modernos y aplicaciones web progresivas con las últimas tecnologías"
              },
              {
                icon: <Database className="h-12 w-12 text-ef-blue" />,
                title: "Arquitectura Cloud",
                desc: "Soluciones escalables en la nube con infraestructura moderna y segura"
              },
              {
                icon: <Shield className="h-12 w-12 text-ef-navy" />,
                title: "Ciberseguridad",
                desc: "Protección robusta para tus aplicaciones y datos empresariales"
              },
              {
                icon: <Cpu className="h-12 w-12 text-ef-orange" />,
                title: "Automatización",
                desc: "Optimización de procesos mediante soluciones tecnológicas avanzadas"
              },
              {
                icon: <Layout className="h-12 w-12 text-ef-blue" />,
                title: "Diseño UX/UI",
                desc: "Interfaces intuitivas y experiencias de usuario excepcionales"
              },
              {
                icon: <Smartphone className="h-12 w-12 text-ef-navy" />,
                title: "Desarrollo Móvil",
                desc: "Aplicaciones móviles nativas y multiplataforma de alto rendimiento"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 ${
                  isVisible.services ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 animate-bounce-soft">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-ef-dark">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-ef-dark text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nuestro Portafolio
            <div className="w-20 h-1 bg-ef-yellow mx-auto mt-4"></div>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "E-commerce Platform",
                category: "Web Development",
                desc: "Plataforma de comercio electrónico moderna y escalable"
              },
              {
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Business Analytics Dashboard",
                category: "Data Visualization",
                desc: "Dashboard interactivo para análisis empresarial"
              },
              {
                image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Mobile Banking App",
                category: "Mobile Development",
                desc: "Aplicación bancaria segura y fácil de usar"
              },
              {
                image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Healthcare Platform",
                category: "Web Development",
                desc: "Sistema de gestión para clínicas y hospitales"
              },
              {
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Educational Platform",
                category: "E-Learning",
                desc: "Plataforma educativa interactiva"
              },
              {
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Real Estate App",
                category: "Mobile Development",
                desc: "Aplicación inmobiliaria con realidad aumentada"
              }
            ].map((project, index) => (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-xl ${
                  isVisible.portfolio ? 'animate-scale' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ef-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-ef-yellow text-sm mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-ef-gray text-sm">{project.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-ef-dark">
            Nuestro Equipo
            <div className="w-20 h-1 bg-ef-yellow mx-auto mt-4"></div>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Link 
                to={`/team/${member.id}`}
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 ${
                  isVisible.team ? 'animate-scale' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ef-dark to-transparent opacity-30"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-ef-dark">{member.name}</h3>
                  <div className="text-ef-orange font-semibold mb-3">{member.role}</div>
                  <p className="text-gray-600 mb-4">{member.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="bg-ef-gray text-ef-dark px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section id="github" className="py-20 bg-ef-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-ef-dark">
            Contribuciones Open Source
            <div className="w-20 h-1 bg-ef-yellow mx-auto mt-4"></div>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Github className="h-12 w-12" />,
                title: "Framework Components",
                stars: "1.2k",
                desc: "Biblioteca de componentes React"
              },
              {
                icon: <Heart className="h-12 w-12" />,
                title: "Community Tools",
                stars: "800",
                desc: "Herramientas para desarrolladores"
              },
              {
                icon: <Zap className="h-12 w-12" />,
                title: "Performance Utils",
                stars: "500",
                desc: "Utilidades de optimización"
              }
            ].map((repo, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all ${
                  isVisible.github ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-ef-dark">{repo.icon}</div>
                  <div className="flex items-center text-ef-yellow">
                    <Star className="h-5 w-5 mr-2" />
                    <span>{repo.stars}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-ef-dark">{repo.title}</h3>
                <p className="text-gray-600">{repo.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 bg-ef-dark text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nuestro Stack Tecnológico
            <div className="w-20 h-1 bg-ef-yellow mx-auto mt-4"></div>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Frontend", techs: ["React", "Vue.js", "Next.js", "TypeScript"] },
              { name: "Backend", techs: ["Node.js", "Python", "Java", "Go"] },
              { name: "Database", techs: ["PostgreSQL", "MongoDB", "Redis", "Firebase"] },
              { name: "DevOps", techs: ["Docker", "Kubernetes", "AWS", "CI/CD"] }
            ].map((stack, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl bg-gradient-to-br from-ef-navy to-ef-dark border border-ef-blue/20 ${
                  isVisible.technologies ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-ef-yellow">{stack.name}</h3>
                <ul className="space-y-2">
                  {stack.techs.map((tech, i) => (
                    <li key={i} className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-ef-blue mr-2" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-ef-dark">
            Metodología de Trabajo
            <div className="w-20 h-1 bg-ef-yellow mx-auto mt-4"></div>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Calendar className="h-8 w-8 text-ef-blue" />,
                title: "1. Descubrimiento",
                desc: "Análisis profundo de necesidades y objetivos"
              },
              {
                icon: <Users className="h-8 w-8 text-ef-orange" />,
                title: "2. Planificación",
                desc: "Estrategia y arquitectura detallada"
              },
              {
                icon: <Code2 className="h-8 w-8 text-ef-navy" />,
                title: "3. Desarrollo",
                desc: "Implementación ágil y pruebas"
              },
              {
                icon: <Sparkles className="h-8 w-8 text-ef-yellow" />,
                title: "4. Lanzamiento",
                desc: "Despliegue y optimización continua"
              }
            ].map((step, index) => (
              <div 
                key={index}
                className={`text-center ${isVisible.process ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-ef-gray rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-ef-dark">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-ef-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-ef-dark">
              Inicia Tu Proyecto
              <div className="w-20 h-1 bg-ef-yellow mx-auto mt-4"></div>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ef-dark mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ef-blue focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ef-dark mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ef-blue focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ef-dark mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ef-blue focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-ef-yellow to-ef-orange text-ef-dark px-6 py-3 rounded-lg font-semibold hover:from-ef-orange hover:to-ef-yellow transition-all transform hover:scale-105 flex items-center justify-center"
                  >
                    Enviar Mensaje
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              </div>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-6 text-ef-dark">Información de Contacto</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-ef-blue mr-3" />
                      <span className="text-gray-600">+1 (234) 567-8900</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-ef-blue mr-3" />
                      <span className="text-gray-600">contacto@elevaforge.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-ef-blue mr-3" />
                      <span className="text-gray-600">Ciudad, País</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-ef-dark">Horario de Atención</h3>
                  <p className="text-gray-600">
                    Lunes a Viernes: 9:00 AM - 6:00 PM<br />
                    Sábados: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ef-dark text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Code2 className="h-10 w-10 text-ef-yellow animate-spin-slow" />
              <span className="text-2xl font-bold">Eleva Forge</span>
            </div>
            <div className="text-center md:text-right text-ef-gray">
              <p>&copy; {new Date().getFullYear()} Eleva Forge. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;