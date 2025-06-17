'use client';

import { FadeIn, ScaleOnHover } from './motion';

const techStacks = {
  languages: [
    { name: 'Python', logo: '🐍' },
    { name: 'JavaScript', logo: '📜' },
    { name: 'TypeScript', logo: '💪' },
    { name: 'HTML', logo: '🌐' },
    { name: 'CSS', logo: '🎨' },
    { name: 'SQL', logo: '📊' }
  ],
  frameworks: [
    { name: 'Django', logo: '🎯' },
    { name: 'FastAPI', logo: '⚡' },
    { name: 'Flask', logo: '🌶️' },
    { name: 'React', logo: '⚛️' },
    { name: 'Node.js', logo: '🟩' },
    { name: 'Express', logo: '🚂' }
  ],
  tools: [
    { name: 'Docker', logo: '🐳' },
    { name: 'GitHub Actions', logo: '🔄' },
    { name: 'Redis', logo: '📕' },
    { name: 'PostgreSQL', logo: '🐘' },
    { name: 'AWS', logo: '☁️' }
  ]
};

const TechCategory = ({ title, items }: { title: string; items: typeof techStacks.languages }) => (
  <div className="mb-8 md:mb-12">
    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">{title}</h3>
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {items.map((tech) => (
        <ScaleOnHover key={tech.name}>
          <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gray-800/80 backdrop-blur-sm rounded-lg hover:bg-gray-800 transition-colors">
            <span className="text-xl md:text-2xl" role="img" aria-label={`${tech.name} icon`}>{tech.logo}</span>
            <span className="text-sm md:text-base text-gray-300">{tech.name}</span>
          </div>
        </ScaleOnHover>
      ))}
    </div>
  </div>
);

export default function TechStack() {
  return (
    <section className="py-12 md:py-20 bg-gray-900" id="tech">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
            Technical Expertise
          </h2>
          <div className="space-y-8 md:space-y-12">
            <TechCategory title="Languages" items={techStacks.languages} />
            <TechCategory title="Frameworks & Libraries" items={techStacks.frameworks} />
            <TechCategory title="Tools & Technologies" items={techStacks.tools} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}