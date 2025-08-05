'use client';

import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate title with staggered letter animation
    if (titleRef.current) {
      titleRef.current.innerHTML = titleRef.current.textContent!.replace(/\S/g, "<span class='letter'>$&</span>");
      
      anime.timeline({ loop: false })
        .add({
          targets: '.letter',
          scale: [0, 1],
          duration: 1500,
          elasticity: 600,
          delay: (el, i) => 45 * (i + 1)
        });
    }

    // Animate subtitle
    anime({
      targets: subtitleRef.current,
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: 1000,
      easing: 'easeOutExpo'
    });

    // Animate button
    anime({
      targets: buttonRef.current,
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 800,
      delay: 1500,
      easing: 'easeOutExpo'
    });
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="container z-10 px-4">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold font-orbitron glow-text mb-4"
        >
          Deveshu Pathak
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 opacity-0"
        >
          Data Scientist & Gen AI Developer crafting intelligent solutions for tomorrow's challenges.
        </p>
        <div ref={buttonRef} className="opacity-0">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={scrollToAbout}
          >
            Explore My Universe
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </Button>
        </div>
      </div>
    </section>
  );
}
