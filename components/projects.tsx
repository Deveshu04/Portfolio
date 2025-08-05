import { Button } from './ui/button';
import Link from 'next/link';
import { getFeaturedProjects } from '@/lib/projects-data';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const projects = getFeaturedProjects();

// Transform projects data for InfiniteMovingCards
const projectCards = projects.map(project => ({
  quote: project.description,
  name: project.title,
  title: project.tags.slice(0, 3).join(' • ')
}));

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center font-orbitron glow-text mb-12">
          Project Constellation
        </h2>
        
        <div className="mb-16">
          <InfiniteMovingCards
            items={projectCards}
            direction="right"
            speed="slow"
          />
        </div>
        
        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
