import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Starfield from '@/components/starfield';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { allProjects } from '@/lib/projects-data';

export const metadata: Metadata = {
  title: 'Projects | Deveshu Pathak',
  description: 'A comprehensive showcase of projects by Deveshu Pathak, featuring AI/ML, web development, data science, blockchain, and enterprise solutions.',
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Starfield />
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 md:px-6 py-24 sm:py-32">
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron glow-text mb-4">
              Project Archive
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of my voyages through the digital universe.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <Card
                key={project.title}
                className="bg-background/50 border-primary/20 overflow-hidden flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-glow hover:-translate-y-2"
              >
                <CardHeader className="p-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-xl font-bold mb-2 font-orbitron">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary font-mono">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-end gap-4">
                  <Link href={project.github} passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon">
                        <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
                      </Button>
                    </a>
                  </Link>
                  <Link href={project.live} passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon">
                        <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary" />
                      </Button>
                    </a>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
