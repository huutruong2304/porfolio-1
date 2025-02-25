'use client';
import React, { useEffect, useState } from 'react';
import { NavItem } from '../ui/nav-item';

const Header = () => {
  const nav: {
    id: string;
    name: string;
  }[] = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'project', name: 'Projects' },
    { id: 'contact', name: 'Contact' },
  ];
  const [activeSection, setActiveSection] = useState<string>();

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';
      for (const navItem of nav) {
        const element = document.getElementById(navItem.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = navItem.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full h-14 fixed top-0 bg-black bg-opacity-80 shadow z-10">
      <nav className="h-full flex justify-center items-center space-x-2">
        {nav.map((item) => (
          <NavItem key={item.id} title={item.name} href={`#${item.id}`} selected={item.id === activeSection} />
        ))}
      </nav>
    </header>
  );
};

export default Header;
