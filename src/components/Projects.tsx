'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
	{
		title: 'HumaniPy',
		description: 'Python package for simulating human-like behavior in web automation and scraping tasks.',
		tech: ['Python', 'Selenium', 'PyPI'],
		github: 'https://github.com/username/humanipy',
		demo: 'https://pypi.org/project/humanipy',
	},
	{
		title: 'Linkedin-Post-Generate',
		description: 'AI-based content generator for LinkedIn posts using Gemini API.',
		tech: ['Python', 'Google Gemini API', 'NLP'],
		github: 'https://github.com/username/linkedin-post-generate',
	},
	{
		title: 'Telegram Bot Instagram',
		description: 'Telegram bot for downloading Instagram Reels with music from public URLs.',
		tech: ['Python', 'Telethon', 'Instagram API'],
		github: 'https://github.com/username/teligram_bot_instav2a',
	},
	{
		title: 'Shopify App Boilerplate',
		description: 'Built with Django + React, supports install/login flows.',
		tech: ['Django', 'React', 'TypeScript', 'Shopify API'],
		github: 'https://github.com/username/shopify-app-boilerplate',
	},
	{
		title: 'RSS Feed System',
		description: 'Built for news aggregation + region filter + API.',
		tech: ['PHP', 'Laravel', 'SQL'],
		github: 'https://github.com/username/rss-feed-system',
	},
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
	<m.div
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.5 }}
		className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
	>
		<h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
		<p className="text-gray-300 mb-4">{project.description}</p>

		<div className="flex flex-wrap gap-2 mb-4">
			{project.tech.map((tech) => (
				<span
					key={tech}
					className="px-3 py-1 text-sm bg-gray-900 text-gray-300 rounded-full"
				>
					{tech}
				</span>
			))}
		</div>

		<div className="flex gap-4">
			<a
				href={project.github}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
			>
				<CodeBracketIcon className="w-5 h-5" />
				<span>View Code</span>
			</a>
			{project.demo && (
				<a
					href={project.demo}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
				>
					<ArrowTopRightOnSquareIcon className="w-5 h-5" />
					<span>Live Demo</span>
				</a>
			)}
		</div>
	</m.div>
);

export default function Projects() {
	return (
		<LazyMotion features={domAnimation}>
			<section className="py-20 bg-gray-900" id="projects">
				<div className="container mx-auto px-4">
					<m.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="max-w-6xl mx-auto"
					>
						<h2 className="text-4xl font-bold text-white mb-12 text-center">
							Featured Projects
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{projects.map((project) => (
								<ProjectCard key={project.title} project={project} />
							))}
						</div>
					</m.div>
				</div>
			</section>
		</LazyMotion>
	);
}