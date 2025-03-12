'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

type Props = {
  image: string;
  name: string;
  description: string;
};

const ProjectCard = ({ name, image, description }: Props) => {
  return (
    <motion.div
      className="w-52 h-80 flex-none bg-opacity-30 shadow rounded-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.05, boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)' }}
    >
      {/* Image Section with Hover Effect */}
      <motion.div className="relative w-full h-4/5 overflow-hidden">
        <motion.div className="absolute inset-0" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Image src={image} className="object-cover rounded-lg" alt={name} fill />
        </motion.div>
      </motion.div>

      {/* Text Content */}
      <div className="my-4 px-2">
        <h5 className="text-white font-bold">{name}</h5>
        <p className="text-white line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
