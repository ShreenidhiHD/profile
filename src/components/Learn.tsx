'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import Link from 'next/link';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

const topics = [
  {
    title: 'Python Backend Development',
    path: '/learn/python',
    icon: '🐍',
    description: 'FastAPI, Django, and Python best practices',
    topics: ['FastAPI architecture', 'Django ORM mastery', 'Python design patterns']
  },
  {
    title: 'React & Next.js',
    path: '/learn/react',
    icon: '⚛️',
    description: 'Modern frontend development with React',
    topics: ['React hooks deep dive', 'Next.js 13+ features', 'State management']
  },
  {
    title: 'Docker & DevOps',
    path: '/learn/devops',
    icon: '🐳',
    description: 'Containerization and deployment strategies',
    topics: ['Docker best practices', 'Multi-stage builds', 'CI/CD pipelines']
  },
  {
    title: 'Database Design',
    path: '/learn/database',
    icon: '🗄️',
    description: 'PostgreSQL and database optimization',
    topics: ['Schema design', 'Query optimization', 'Indexing strategies']
  }
];

export default function Learn() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="py-20 bg-gray-900" id="learn">
        <div className="container mx-auto px-4">
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Learn With Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topics.map((topic) => (
                <m.div
                  key={topic.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700/80 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl" role="img" aria-label={topic.title}>
                      {topic.icon}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{topic.description}</p>
                      <ul className="space-y-2">
                        {topic.topics.map((item, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                            <CodeBracketIcon className="w-4 h-4" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4">                        <Link
                          href={topic.path}
                          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                        >
                          <span>Read More</span>
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </Link>
                      </div>
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
