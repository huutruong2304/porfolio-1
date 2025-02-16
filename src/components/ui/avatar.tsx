import Image from 'next/image';
import React from 'react';

type Props = {
  src: string;
};

const Avatar = ({ src }: Props) => {
  return (
    <div className="h-72 aspect-square relative ">
      <Image src={src} alt="avatar-me" className="object-cover rounded-full" fill />
    </div>
  );
};

export default Avatar;
