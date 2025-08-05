'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export const useTextAnimation = (delay = 0) => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const textContent = element.textContent || '';
            element.innerHTML = textContent.replace(
              /\S/g,
              "<span class='letter' style='display:inline-block; opacity: 0;'>$&</span>"
            );

            anime.timeline({
              targets: element.querySelectorAll('.letter'),
              easing: 'easeOutExpo',
              delay: anime.stagger(50, { start: delay }),
            })
            .add({
              translateY: ['1em', 0],
              opacity: [0, 1],
              duration: 750,
            });
            
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return ref;
};
