'use client';

import { FadeIn } from '@/components/motion';
import PythonTutorialSection from '@/components/PythonTutorialSection';

const introductionContent = `# Python Basics

Python is a versatile programming language used for web development, data analysis, artificial intelligence, and more. Here's a simple example:

\`\`\`python
# Print a message
print("Hello, World!")

# Variables and data types
name = "Alice"
age = 25
is_student = True

print(f"Name: {name}, Age: {age}, Student: {is_student}")
\`\`\`
`;

const controlFlowContent = `# Control Flow

Python supports conditional statements and loops. Here's an example:

\`\`\`python
# Conditional statements
x = 10
if x > 5:
    print("x is greater than 5")
else:
    print("x is less than or equal to 5")

# Loops
for i in range(5):
    print(f"Iteration {i}")
\`\`\`
`;

const pythonTutorials = [
	{
		title: 'Python Basics',
		sections: [
			{
				heading: 'Introduction to Python',
				content: introductionContent,
			},
			{
				heading: 'Control Flow in Python',
				content: controlFlowContent,
			},
		],
	},
];

export default function PythonTutorials() {
	return (
		<div className="max-w-4xl mx-auto py-12">
			<FadeIn>
				<h1 className="text-4xl font-bold text-white mb-12 text-center">
					Python Tutorials
				</h1>

				{pythonTutorials.map((tutorial, index) => (
					<div key={index} className="mb-16">
						<h2 className="text-3xl font-bold text-white mb-8 border-b border-gray-700 pb-2">
							{tutorial.title}
						</h2>

						{tutorial.sections.map((section, sIndex) => (
							<PythonTutorialSection
								key={sIndex}
								heading={section.heading}
								content={section.content}
							/>
						))}
					</div>
				))}
			</FadeIn>
		</div>
	);
}
