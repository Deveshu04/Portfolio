'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { BookOpen, Database, Server, Code, Rocket, GitBranch, Palette } from 'lucide-react';

const curriculumData = [
  {
    icon: Palette,
    title: 'Module 1: Frontend Foundations',
    description: 'Mastering the core trio of the web: HTML for structure, CSS for styling, and JavaScript for interactivity. Building a solid base for all future development.',
  },
  {
    icon: Code,
    title: 'Module 2: Advanced JS & React',
    description: 'Diving deep into modern JavaScript (ES6+), followed by a comprehensive exploration of React for building dynamic, component-based user interfaces.',
  },
  {
    icon: Rocket,
    title: 'Module 3: Next.js & Full-Stack Frameworks',
    description: 'Leveraging the power of Next.js for server-side rendering, static site generation, and building production-grade, performant React applications.',
  },
  {
    icon: Server,
    title: 'Module 4: Backend & API Development',
    description: 'Constructing robust server-side applications with Node.js and Express, focusing on RESTful API design, middleware, and authentication.',
  },
  {
    icon: Database,
    title: 'Module 5: Databases & Data Modeling',
    description: 'Exploring both SQL and NoSQL databases, learning data modeling techniques, and integrating databases with backend services using ORMs like Prisma.',
  },
  {
    icon: GitBranch,
    title: 'Module 6: DevOps & Deployment',
    description: 'Understanding the full development lifecycle, including version control with Git, CI/CD pipelines, containerization with Docker, and deploying to the cloud.',
  },
];

export default function CurriculumTimeline() {
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const svgPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -100px 0px' }
    );

    const currentRef = timelineRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && svgPathRef.current) {
      const path = svgPathRef.current;
      const pathLength = path.getTotalLength();
      path.style.strokeDasharray = `${pathLength}`;
      path.style.strokeDashoffset = `${pathLength}`;
      // Trigger reflow to apply initial styles before animation
      path.getBoundingClientRect();
      path.classList.add('animate-draw');
    }
  }, [isVisible]);

  return (
    <div ref={timelineRef} className="relative w-full max-w-5xl mx-auto">
      <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2" aria-hidden="true">
        <svg className="h-full w-full" preserveAspectRatio="none">
          <path
            ref={svgPathRef}
            data-testid="curriculum-timeline-connector"
            d="M 0.5 0 V 9999"
            className="curriculum-timeline-path"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="space-y-12 md:space-y-0">
        {curriculumData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={cn(
                'md:grid md:grid-cols-2 md:gap-x-12 items-start space-y-4 md:space-y-0',
                index % 2 === 0 ? 'md:grid-flow-row-dense' : ''
              )}
            >
              <div className={cn('flex items-start gap-4 md:gap-6', index % 2 === 0 ? 'md:col-start-2' : '')}>
                <div className="relative">
                  <div className="absolute -left-9 md:left-1/2 top-1 w-6 h-6 bg-background border-2 border-primary rounded-full z-10 -translate-x-1/2"></div>
                  <div className="bg-primary/20 text-primary rounded-lg p-3 flex items-center justify-center border border-primary/30">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-orbitron text-primary-foreground">{item.title}</h3>
                  <p className="text-muted-foreground mt-2">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
