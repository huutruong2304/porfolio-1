'use client';
import { motion } from 'motion/react';

interface InfoProps {
  firstName: string;
  lastName: string;
  role: string;
}

const InfoComponent: React.FC<InfoProps> = ({ firstName, lastName, role }) => {
  return (
    <motion.div
      className="flex flex-col gap-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <motion.h2
        className="text-5xl text-white"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        {lastName}
      </motion.h2>

      <motion.h1
        className="font-bold text-8xl text-white"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2, delay: 0.4 }}
      >
        {firstName}
      </motion.h1>

      <motion.p
        className="text-4xl text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        {role}
      </motion.p>
    </motion.div>
  );
};

export default InfoComponent;
