import type { Metadata } from 'next';
import IITCurriculumTimeline from '@/components/iit-curriculum-timeline';
import Starfield from '@/components/starfield';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Academic Curriculum | Deveshu Pathak',
  description: 'My academic journey through the IIT Madras BS in Data Science and Applications program, showcasing completed courses from Foundation to Diploma levels.',
};

export default function CurriculumPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Starfield />
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-24 sm:py-32">
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron glow-text mb-4">
              Academic Curriculum
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              My academic journey through the IIT Madras BS in Data Science and Applications program, 
              progressing from foundational mathematics and programming to advanced data science and machine learning.
            </p>
          </div>
          <IITCurriculumTimeline />
        </div>
      </main>
      <Footer />
    </div>
  );
}
