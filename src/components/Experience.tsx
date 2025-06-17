'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';

const experiences = [
  {
    company: 'ShopAgain (LatticeAi)',
    position: 'Software Developer',
    period: 'Dec 2021 – May 2025',
    description: 'Contributed to multiple projects including the main ShopAgain Platform, Chatty AI integration, and Next.js Live Chat UI.',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Python', 'Django', 'Flask', 'FastAPI', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'GraphQL', 'Qdrant', 'Celery'],
    projects: [
      {
        name: 'ShopAgain Platform',
        achievements: [
          'Migrated core APIs from REST to GraphQL for improved efficiency',
          'Built responsive UI components using React.js + Material UI',
          'Designed optimized PostgreSQL schemas for high-volume data',
          'Developed advanced audience segmentation and automation flows',
          'Integrated third-party services (Mailgun, TrustSignal, WhatsApp)',
          'Built automation tools using Python + Selenium and Node.js',
          'Integrated EasyEmail for drag-and-drop email templates',
          'Developed Flask-based LLM microservices for AI features'
        ]
      },
      {
        name: 'Chatty: AI Chatbot',
        achievements: [
          'Developed FastAPI endpoints for webhook and chat management',
          'Integrated LLM systems for AI-powered responses',
          'Built Qdrant + OpenAI semantic product search',
          'Implemented conversation tracking and analytics'
        ]
      },
      {
        name: 'Next.js Live Chat UI',
        achievements: [
          'Built responsive chat interface with Next.js and TypeScript',
          'Implemented real-time messaging features',
          'Ensured cross-platform compatibility with Material UI',
          'Integrated with backend systems for full chat pipeline'
        ]
      }
    ]
  },  {
    company: 'Freelance Projects',
    position: 'Full Stack Developer',
    period: '',
    description: 'Developed full-stack web applications and automation systems for clients.',
    technologies: ['PHP (Laravel)', 'React.js', 'Chakra UI', 'MySQL', 'Docker', 'Linode VPS'],
    achievements: [
      'Built two full-stack web applications using Laravel and React.js',
      'Developed RSS feed aggregation system with REST APIs',
      'Implemented content filtering and search functionality',
      'Handled MySQL schema design and Docker deployment',
      'Set up and managed Linode VPS infrastructure'
    ]
  }
];

export default function Experience() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="py-20 bg-gray-900" id="experience">
        <div className="container mx-auto px-4">
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Work Experience
            </h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <m.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 rounded-lg p-6 shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                      <p className="text-xl text-blue-400">{exp.company}</p>
                    </div>
                    <p className="text-gray-400 mt-2 md:mt-0">{exp.period}</p>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>                  {exp.projects ? (
                    <div className="space-y-6">
                      {exp.projects.map((project, index) => (
                        <div key={index} className="bg-gray-700/30 p-4 rounded-lg">
                          <h4 className="text-lg font-semibold text-white mb-3">{project.name}</h4>
                          <ul className="list-disc list-inside text-gray-300 space-y-2">
                            {project.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm">{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : exp.achievements ? (
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
