'use client';
import React from 'react';
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
  return (
    <header className="w-full h-14 fixed top-0 bg-black bg-opacity-80 shadow z-10">
      <nav className="h-full flex justify-center items-center space-x-2">
        {nav.map((item) => (
          <NavItem key={item.id} title={item.name} href={`#${item.id}`} />
        ))}
      </nav>
    </header>
  );
};

export default Header;
