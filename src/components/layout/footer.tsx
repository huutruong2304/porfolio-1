'use client';
import React from 'react';

type Props = {
  username: string;
};

const Footer = ({ username }: Props) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-white">
      <div className="text-center py-3">
        <p className="text-sm">
          &copy; {currentYear} {username}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
