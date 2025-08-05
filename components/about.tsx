'use client';


import Image from 'next/image';
import { TracingBeam } from './ui/tracing-beam';

const content = [
  {
    title: 'Academic Journey',
    description: (
      <>
        <p>
          Currently pursuing BS in Data Science and Applications from IIT Madras, I&apos;ve completed my Foundation and Diploma levels with expertise in both Programming and Data Science tracks. My academic journey has equipped me with strong foundations in mathematics, statistics, machine learning, and full-stack development.
        </p>
        <p className="mt-4">
          Through rigorous coursework and hands-on projects, I&apos;ve developed proficiency in Python, Java, web technologies, and advanced data science tools, preparing me for the evolving landscape of technology and AI.
        </p>
      </>
    ),
    badge: 'Education',
    image: '/Professional Pic.jpg',
  },
  {
    title: 'Technical Expertise',
    description: (
      <>
        <p>
          I specialize in building intelligent systems that bridge the gap between data science and software engineering. My expertise spans across AI/ML model development, full-stack web applications, and enterprise-grade solutions using cutting-edge technologies.
        </p>
        <p className="mt-4">
          From developing fraud detection systems using Graph Neural Networks to creating multi-modal RAG systems for enterprise knowledge management, I focus on delivering impactful solutions that solve real-world problems with measurable results.
        </p>
      </>
    ),
    badge: 'Expertise',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2670&auto=format&fit=crop',
  },
  {
    title: 'Innovation & Impact',
    description: (
      <>
        <p>
          My projects have consistently delivered significant business value - from reducing fraud response times by 87% to improving ESG risk assessment precision by 15%. I believe in creating technology that not only works but transforms how organizations operate and make decisions.
        </p>
        <p className="mt-4">
          Whether it&apos;s developing quantum-inspired optimization engines or building privacy-preserving synthetic data generators, I&apos;m passionate about pushing the boundaries of what&apos;s possible at the intersection of AI, data science, and software engineering.
        </p>
      </>
    ),
    badge: 'Impact',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center font-orbitron glow-text mb-16">
          About Me
        </h2>
        <TracingBeam className="px-6">
          <div className="max-w-4xl mx-auto antialiased pt-4 relative">
            {content.map((item, index) => (
              <div key={`content-${index}`} className="mb-16">
                <h2 className="bg-background text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2>

                <p className="text-xl mb-6 font-orbitron text-primary-foreground">
                  {item.title}
                </p>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {item.image && (
                    <div className="order-2 md:order-1">
                      <Image
                        src={item.image}
                        alt={item.title}
                        height={300}
                        width={500}
                        className="rounded-lg object-cover w-full h-[250px]"
                        style={{ objectPosition: 'center 10%' }}
                        style={{ objectPosition: 'center' }}
                      />
                    </div>
                  )}
                  <div className="text-sm prose prose-sm dark:prose-invert text-muted-foreground order-1 md:order-2">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
