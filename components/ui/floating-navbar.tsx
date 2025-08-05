"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { cn } from "@/lib/utils";
 
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  // Always visible when component is rendered
  const [visible, setVisible] = useState(true);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      // Check if we're on the homepage
      if (window.location.pathname === '/') {
        e.preventDefault();
        const targetId = href.substring(2);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If not on homepage, navigate to homepage with hash
        window.location.href = href;
      }
    }
  };
 
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-primary/20 rounded-full bg-background/80 backdrop-blur-sm shadow-glow z-[5000] pr-6 pl-6 py-3 items-center justify-center space-x-6",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            onClick={(e) => handleLinkClick(e, navItem.link)}
            className={cn(
              "relative text-muted-foreground items-center flex space-x-1 hover:text-primary transition-colors text-sm font-medium"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block">{navItem.name}</span>
          </a>
        ))}
        <a
          href="/projects"
          className="border text-sm font-medium relative border-primary/20 text-primary-foreground bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-full transition-colors"
        >
          <span>View All Projects</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-primary to-transparent h-px" />
        </a>
      </motion.div>
    </AnimatePresence>
  );
};