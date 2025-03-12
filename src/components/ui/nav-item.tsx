'use client';
import Link from 'next/link';
import React, { MouseEvent } from 'react';

type Props = {
  title: string;
  href: string;
  selected?: boolean;
};

export const NavItem = ({ title, href, selected }: Props) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Link className={`px-4 py-2 ${selected ? 'text-blue-500' : 'text-white'}`} href={href} onClick={handleClick}>
      {title}
    </Link>
  );
};
