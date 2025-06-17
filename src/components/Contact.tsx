'use client';

import { FadeIn, ScaleOnHover } from './motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto px-4">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Open for Work</h2>
          
          <p className="text-xl text-gray-300 mb-8">
            I&apos;m open to freelance projects and full-time remote roles.
            If you&apos;re building SaaS, automation systems, or eCommerce tools — let&apos;s talk.
          </p>
          
          <ScaleOnHover>
            <a
              href="mailto:hdshreenidhi@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
            >
              <EnvelopeIcon className="w-6 h-6" />
              <span>Get in Touch</span>
            </a>
          </ScaleOnHover>
        </FadeIn>
      </div>
    </section>
  );
}