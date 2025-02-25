import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import './globals.css';
import ScrollToTop from '@/components/ui/scroll-to-top';

const oswaldSans = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Hi, I'm Truong",
  description: 'Welcome to my portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${oswaldSans.className}`}>
      <body className={`${oswaldSans}`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
