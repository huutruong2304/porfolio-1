import Image from 'next/image';
import React from 'react';

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
    <div className="w-full grid grid-flow-col grid-rows-3 grid-cols-4 gap-1">
      <div className="row-span-3 col-span-1 flex justify-center items-center bg-white bg-opacity-30 p-1 rounded">
        <h3 className="text-white text-3xl text-center">
          <b className="text-7xl">{amountYear}</b> <br />
          years <br /> experience <br />
          working
        </h3>
      </div>
      <div className="row-span-3 col-span-3 grid grid-flow-row grid-cols-4 gap-1">
        {skills.map((skill) => (
          <div key={skill.id} className="col-span-1 h-36 md:h-48 shadow flex justify-center items-center bg-white bg-opacity-30 p-1 rounded">
            <div key={skill.id} className="relative h-20  md:h-30 aspect-square">
              <Image src={skill.icon} className="object-contain" alt={skill.name} fill />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBoard;
