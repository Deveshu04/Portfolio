'use client';

import { Button } from '@/components/ui/button';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold font-orbitron glow-text mb-4">
            Contact Transmission
          </h2>
          <p className="text-muted-foreground mb-12">
            Ready to collaborate on the next breakthrough in AI? Let&apos;s connect and build something extraordinary together.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
            {/* Email Contact */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <a
                href="mailto:deveshupathak@gmail.com"
                className="flex flex-col items-center p-6 bg-background/50 border border-primary/20 rounded-lg transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-orbitron text-primary-foreground mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-3">Drop me a line</p>
                <div className="flex items-center text-primary text-sm font-medium">
                  Get in touch <ExternalLink className="w-4 h-4 ml-1" />
                </div>
              </a>
            </motion.div>

            {/* LinkedIn Contact */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <a
                href="https://www.linkedin.com/in/deveshupathak/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-background/50 border border-primary/20 rounded-lg transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold font-orbitron text-primary-foreground mb-2">LinkedIn</h3>
                <p className="text-sm text-muted-foreground mb-3">Let&apos;s connect professionally</p>
                <div className="flex items-center text-primary text-sm font-medium">
                  Connect <ExternalLink className="w-4 h-4 ml-1" />
                </div>
              </a>
            </motion.div>
          </div>

          <div className="mt-12 p-6 bg-secondary/30 rounded-lg border border-primary/10">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-medium">Open to opportunities:</span> AI/ML Engineering, Data Science, Full-Stack Development, and innovative projects at the intersection of technology and intelligence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
