'use client';
import { motion } from 'motion/react';

const FadeInSection = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      className={`opacity-0 ${className ?? ''} `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
