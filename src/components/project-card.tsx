import Image from 'next/image';
import React from 'react';

type Props = {
  image: string;
  name: string;
  description: string;
};

const ProjectCard = ({ name, image, description }: Props) => {
  return (
    <div className="w-52 h-80 flex-none">
      <div className="relative w-full h-4/5">
        <Image src={image} className="object-cover rounded" alt={name} fill />
      </div>
      <div className="my-4">
        <h5 className="text-white font-bold">{name}</h5>
        <p className="text-white line-clamp-2 ">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
