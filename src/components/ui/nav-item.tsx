import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  href: string;
  selected?: boolean;
};

export const NavItem = ({ title, href, selected }: Props) => {
  return (
    <a className={`px-4 py-2 ${selected ? 'text-blue-500' : 'text-white'}`} href={href}>
      {title}
    </a>
  );
};
