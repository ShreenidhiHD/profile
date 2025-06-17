'use client';

import { FadeIn, ScaleOnHover } from './motion';
import { DocumentIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function Resume() {
  return (
    <section className="py-20 bg-gray-900" id="resume">
      <div className="container mx-auto px-4">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Resume</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ScaleOnHover>
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <DocumentIcon className="w-5 h-5" />
                <span>View Resume</span>
              </a>
            </ScaleOnHover>
            
            <ScaleOnHover>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ArrowDownTrayIcon className="w-5 h-5" />
                <span>Download PDF</span>
              </a>
            </ScaleOnHover>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}