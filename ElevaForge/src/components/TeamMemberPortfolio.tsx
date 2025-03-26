import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { teamMembers } from '../data/team';
import { ArrowLeft, Mail, Github, Linkedin, Award, Globe, Book, Briefcase } from 'lucide-react';

export default function TeamMemberPortfolio() {
  const { id } = useParams<{ id: string }>();
  const member = teamMembers.find(m => m.id === id);

  if (!member) {
    return (
      <div className="min-h-screen bg-ef-gray flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-ef-dark mb-4">Miembro no encontrado</h1>
          <Link to="/" className="text-ef-blue hover:text-ef-navy">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ef-gray">
      {/* Header */}
      <header className="bg-gradient-to-r from-ef-dark to-ef-navy text-white py-20">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-ef-yellow hover:text-ef-orange mb-8 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver al inicio
          </Link>
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <h1 className="text-5xl font-bold mb-4">{member.name}</h1>
              <div className="text-ef-yellow text-xl mb-6">{member.role}</div>
              <p className="text-ef-gray text-lg mb-8">{member.longDesc}</p>
              <div className="flex flex-wrap gap-3">
                {member.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-ef-dark/30 text-ef-yellow px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="py-20">
        <div className="container mx-auto px-6">
          {/* Experience Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-ef-dark">
              Experiencia Profesional
              <div className="w-20 h-1 bg-ef-yellow mt-4"></div>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {member.experience.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-ef-orange font-semibold mb-2">{exp.period}</div>
                  <h3 className="text-xl font-bold text-ef-dark mb-2">{exp.role}</h3>
                  <div className="text-ef-navy mb-4">{exp.company}</div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-ef-dark">
              Proyectos Destacados
              <div className="w-20 h-1 bg-ef-yellow mt-4"></div>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {member.projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-ef-dark mb-3">{project.name}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="bg-ef-gray text-ef-dark px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Certifications */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <section>
              <h2 className="text-3xl font-bold mb-12 text-ef-dark">
                Educación
                <div className="w-20 h-1 bg-ef-yellow mt-4"></div>
              </h2>
              <div className="space-y-6">
                {member.education.map((edu, index) => (
                  <div 
                    key={index}
                    className="flex items-start"
                  >
                    <Book className="h-6 w-6 text-ef-blue mr-4 mt-1" />
                    <div className="text-gray-600">{edu}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-12 text-ef-dark">
                Certificaciones
                <div className="w-20 h-1 bg-ef-yellow mt-4"></div>
              </h2>
              <div className="space-y-6">
                {member.certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-start"
                  >
                    <Award className="h-6 w-6 text-ef-orange mr-4 mt-1" />
                    <div className="text-gray-600">{cert}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Languages & Contact */}
          <div className="grid md:grid-cols-2 gap-12">
            <section>
              <h2 className="text-3xl font-bold mb-12 text-ef-dark">
                Idiomas
                <div className="w-20 h-1 bg-ef-yellow mt-4"></div>
              </h2>
              <div className="space-y-6">
                {member.languages.map((lang, index) => (
                  <div 
                    key={index}
                    className="flex items-start"
                  >
                    <Globe className="h-6 w-6 text-ef-navy mr-4 mt-1" />
                    <div className="text-gray-600">{lang}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-12 text-ef-dark">
                Contacto
                <div className="w-20 h-1 bg-ef-yellow mt-4"></div>
              </h2>
              <div className="space-y-6">
                <a 
                  href={`mailto:${member.contact.email}`}
                  className="flex items-center text-gray-600 hover:text-ef-blue transition-colors"
                >
                  <Mail className="h-6 w-6 mr-4" />
                  {member.contact.email}
                </a>
                <a 
                  href={`https://${member.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-ef-blue transition-colors"
                >
                  <Linkedin className="h-6 w-6 mr-4" />
                  LinkedIn
                </a>
                <a 
                  href={`https://${member.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 hover:text-ef-blue transition-colors"
                >
                  <Github className="h-6 w-6 mr-4" />
                  GitHub
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}