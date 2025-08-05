'use client';

import Link from 'next/link';
import { Rocket, Menu, User, FolderOpen, GraduationCap, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import { FloatingNav } from './ui/floating-navbar';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/curriculum', label: 'Curriculum' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/#contact', label: 'Contact' },
];

const floatingNavItems = [
  {
    name: "About",
    link: "/#about",
    icon: <User className="h-4 w-4" />,
  },
  {
    name: "Projects",
    link: "/#projects",
    icon: <FolderOpen className="h-4 w-4" />,
  },
  {
    name: "Curriculum",
    link: "/curriculum",
    icon: <GraduationCap className="h-4 w-4" />,
  },
  {
    name: "Achievements",
    link: "/achievements",
    icon: <User className="h-4 w-4" />,
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: <Mail className="h-4 w-4" />,
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating nav when scrolled more than 50px
      setShowFloatingNav(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    closeMenu();
    if (href.startsWith('/#')) {
      if (pathname !== '/') {
        // Navigate to home page first, then scroll
        window.location.href = href;
      } else {
        e.preventDefault();
        const targetId = href.substring(2);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      {/* Floating Navigation - only show when scrolled */}
      {showFloatingNav && <FloatingNav navItems={floatingNavItems} />}
      
      {/* Normal Header - hide when floating nav is shown */}
      <header className={`fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm transition-all duration-300 ${showFloatingNav ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Rocket className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-mono glow-text">
              Deveshu
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-8">
                     <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
                        <Rocket className="h-8 w-8 text-primary" />
                        <span className="text-xl font-bold font-mono glow-text">
                          Deveshu
                        </span>
                      </Link>
                  </div>
                  <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                        onClick={(e) => handleLinkClick(e, link.href)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </header>
    </>
  );
}
