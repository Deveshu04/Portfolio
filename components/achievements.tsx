'use client';

import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Trophy, Users, Briefcase, GraduationCap, ExternalLink, Calendar, MapPin } from 'lucide-react';

const achievements = [
  {
    title: 'Fintech Olympiad 2023 Finalist',
    organization: 'India FinTech Forum',
    period: '2023',
    type: 'Competition',
    icon: Trophy,
    description: 'Selected as a finalist while representing IIT Madras in the prestigious Fintech Olympiad, competing against top talent from across India in financial technology innovation.',
    highlights: [
      'Represented IIT Madras on national stage',
      'Competed in financial technology innovation',
      'Selected from thousands of participants nationwide'
    ],
    link: 'https://fintecholympiad.org/',
    color: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400'
  },
  {
    title: 'Joint Secretary - Student Placement Council',
    organization: 'IIT Madras',
    period: 'Jan 2024 - Jan 2025',
    type: 'Leadership',
    icon: Users,
    description: 'Led strategic initiatives for student placements, managing a large team and coordinating with industry partners to enhance career opportunities for over 1,000 students.',
    highlights: [
      'Directed a 30-member team executing 90+ placement events',
      'Forged partnerships with 50+ companies',
      'Achieved 15% increase in internship and job offers',
      'Implemented student tracking system improving efficiency by 25%'
    ],
    color: 'bg-blue-500/20 border-blue-500/30 text-blue-400'
  },
  {
    title: 'Data Science Intern',
    organization: 'Annam.ai at IIT Ropar',
    period: 'May 2025 - July 2025',
    type: 'Professional',
    icon: Briefcase,
    description: 'Completed an intensive 8-week Data Science internship, working on cutting-edge projects spanning from traditional data science to modern MLOps implementations. Gained hands-on experience with industry-standard practices under NDA-protected projects.',
    highlights: [
      '8-week intensive program',
      'End-to-end data science project experience',
      'MLOps and deployment expertise',
      'Industry-standard practices and methodologies'
    ],
    color: 'bg-green-500/20 border-green-500/30 text-green-400'
  },
  {
    title: 'Aspire Leaders Programme Cohort 4',
    organization: 'Aspire Institute',
    period: '2025 - Present',
    type: 'Leadership Development',
    icon: GraduationCap,
    description: 'Selected for the prestigious Aspire Leaders Programme, a global leadership development initiative focused on building next-generation leaders with cross-cultural competency and social impact mindset.',
    highlights: [
      'Global leadership development program',
      'Cross-cultural collaboration and learning',
      'Social impact and community building focus',
      'International network of emerging leaders'
    ],
    link: 'https://www.aspireleaders.org/program/aspire-leaders-program/',
    color: 'bg-purple-500/20 border-purple-500/30 text-purple-400'
  }
];

export default function Achievements() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold font-orbitron glow-text mb-4">
            Leadership & Recognition
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey of leadership, innovation, and professional growth through competitive achievements, 
            organizational roles, and transformative experiences.
          </p>
        </motion.div>

        <div className="space-y-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background/50 border border-primary/20 rounded-lg p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon and Type */}
                  <div className="flex items-center lg:flex-col lg:items-center gap-4 lg:gap-2 lg:min-w-[120px]">
                    <div className={`rounded-lg p-3 ${achievement.color}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <Badge variant="outline" className="text-xs font-mono">
                      {achievement.type}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold font-orbitron text-primary-foreground mb-2">
                          {achievement.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {achievement.organization}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {achievement.period}
                          </div>
                        </div>
                      </div>
                      {achievement.link && (
                        <a
                          href={achievement.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                        >
                          Learn More <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {achievement.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-primary-foreground">Key Achievements:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {achievement.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}