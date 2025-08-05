'use client';

import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Code, Database, Brain, Users, Lightbulb, Target } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'R', 'SQL', 'Go', 'Rust'],
    color: 'bg-blue-500/20 border-blue-500/30 text-blue-400'
  },
  {
    title: 'AI/ML & Data Science',
    icon: Brain,
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenAI API', 'LangChain', 'Hugging Face'],
    color: 'bg-purple-500/20 border-purple-500/30 text-purple-400'
  },
  {
    title: 'Web Technologies',
    icon: Database,
    skills: ['React', 'Next.js', 'Node.js', 'Flask', 'FastAPI', 'MongoDB', 'PostgreSQL', 'GraphQL'],
    color: 'bg-green-500/20 border-green-500/30 text-green-400'
  },
  {
    title: 'Leadership & Soft Skills',
    icon: Users,
    skills: ['Team Leadership', 'Strategic Planning', 'Project Management', 'Public Speaking', 'Mentoring'],
    color: 'bg-orange-500/20 border-orange-500/30 text-orange-400'
  },
  {
    title: 'Problem Solving',
    icon: Lightbulb,
    skills: ['Analytical Thinking', 'Algorithm Design', 'System Architecture', 'Research & Development'],
    color: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400'
  },
  {
    title: 'Business & Strategy',
    icon: Target,
    skills: ['Business Analytics', 'Financial Modeling', 'Market Research', 'Product Strategy', 'Risk Assessment'],
    color: 'bg-red-500/20 border-red-500/30 text-red-400'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold font-orbitron glow-text mb-4">
            Technical Arsenal
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning AI/ML, full-stack development, and leadership capabilities 
            honed through academic excellence and real-world applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background/50 border border-primary/20 rounded-lg p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
              >
                <div className="flex items-center mb-4">
                  <div className={`rounded-lg p-2 mr-3 ${category.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-orbitron text-primary-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary font-mono text-xs hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}