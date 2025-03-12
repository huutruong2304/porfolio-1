'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

export interface Skill {
  id: string;
  name: string;
  icon: string;
}

type Props = {
  amountYear: string;
  skills: Skill[];
};

const SkillBoard = ({ amountYear, skills }: Props) => {
  return (
    <motion.div
      className="w-full grid grid-flow-col grid-rows-3 grid-cols-4 gap-1"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Experience Box */}
      <motion.div
        className="row-span-3 col-span-1 flex justify-center items-center bg-white bg-opacity-30 p-1 rounded"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-white text-3xl text-center">
          <b className="text-6xl md:text-7xl">{amountYear}</b> <br />
          <span className="text-lg sm:text-xl lg:text-4xl">
            years <br /> experience <br />
            working
          </span>
        </h3>
      </motion.div>

      {/* Skill Cards */}
      <div className="row-span-3 col-span-3 grid grid-flow-row grid-cols-4 gap-1">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="col-span-1 h-36 md:h-48 shadow flex justify-center items-center bg-white bg-opacity-30 p-1 rounded cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <motion.div
              key={skill.id}
              className="relative h-12 md:h-20 lg:h-32 aspect-square"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Image src={skill.icon} className="object-contain" alt={skill.name} fill />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillBoard;
