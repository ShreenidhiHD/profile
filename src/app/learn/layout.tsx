'use client';

import { FadeIn } from '@/components/motion';

interface TutorialLayoutProps {
  children: React.ReactNode;
}

export default function TutorialLayout({ children }: TutorialLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto px-4 py-20">
        <FadeIn>
          {children}
        </FadeIn>
      </main>
    </div>
  );
}
