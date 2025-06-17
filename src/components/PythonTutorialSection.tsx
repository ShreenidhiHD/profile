import React from 'react';

interface SectionProps {
  heading: string;
  content: string;
}

const PythonTutorialSection: React.FC<SectionProps> = ({ heading, content }) => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-gray-300 mb-4">{heading}</h3>
      <div className="prose prose-invert max-w-none bg-gray-800 p-6 rounded-lg shadow-md">
        <pre className="whitespace-pre-wrap text-sm text-gray-300">{content}</pre>
      </div>
    </div>
  );
};

export default PythonTutorialSection;
