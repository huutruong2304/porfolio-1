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
          <b className="text-6xl md:text-7xl">{amountYear}</b> <br />
          <span className="text-lg sm:text-xl lg:text-4xl">
            years <br /> experience <br />
            working
          </span>
        </h3>
      </div>
      <div className="row-span-3 col-span-3 grid grid-flow-row grid-cols-4 gap-1">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="col-span-1 h-36 md:h-48 shadow flex justify-center items-center bg-white bg-opacity-30 p-1 rounded cursor-pointer"
          >
            <div key={skill.id} className="relative h-12 md:h-20 lg:h-32 aspect-square hover:scale-125 transition ease-in-out">
              <Image src={skill.icon} className="object-contain " alt={skill.name} fill />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBoard;
