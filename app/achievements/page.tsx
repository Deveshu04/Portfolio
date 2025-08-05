import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Starfield from '@/components/starfield';
import Achievements from '@/components/achievements';

export const metadata: Metadata = {
  title: 'Leadership & Recognition | Deveshu Pathak',
  description: 'Leadership roles, competitive achievements, and professional recognition earned by Deveshu Pathak through academic excellence and industry engagement.',
};

export default function AchievementsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Starfield />
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-24 sm:py-32">
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron glow-text mb-4">
              Leadership & Recognition
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of leadership roles, competitive achievements, and professional milestones 
              that have shaped my journey in technology and innovation.
            </p>
          </div>
          <Achievements />
        </div>
      </main>
      <Footer />
    </div>
  );
}