'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';

const navLinks = [
	{
		name: 'Resume',
		url: '/resume',
	}
];

const socialLinks = [
	{
		name: 'GitHub',
		url: 'https://github.com/yourusername',
		icon: (
			<svg
				className="w-6 h-6"
				fill="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					fillRule="evenodd"
					d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/yourusername',
		icon: (
			<svg
				className="w-6 h-6"
				fill="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
	},
	{
		name: 'Stack Overflow',
		url: 'https://stackoverflow.com/users/yourid',
		icon: (
			<svg
				className="w-6 h-6"
				fill="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z" />
			</svg>
		),
	},
	{
		name: 'Email',
		url: 'mailto:hdshreenidhi@gmail.com',
		icon: (
			<svg
				className="w-6 h-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
				/>
			</svg>
		),
	},
];

export default function Footer() {
	return (
		<LazyMotion features={domAnimation}>
			<footer className="py-12 bg-gray-800">
				<div className="container mx-auto px-4">				<div className="flex flex-col items-center">
						<div className="flex space-x-6 mb-6">
							{navLinks.map((link) => (
								<m.a
									key={link.name}
									href={link.url}
									className="text-gray-400 hover:text-white transition-colors text-sm"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
								>
									{link.name}
								</m.a>
							))}
						</div>
						<div className="flex space-x-6 mb-4">
							{socialLinks.map((link) => (
								<m.a
									key={link.name}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-white transition-colors"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
									title={link.name}
								>
									{link.icon}
									<span className="sr-only">{link.name}</span>
								</m.a>
							))}
						</div>
						<p className="text-gray-400 text-sm">
							© {new Date().getFullYear()} Shreenidhi H D. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</LazyMotion>
	);
}