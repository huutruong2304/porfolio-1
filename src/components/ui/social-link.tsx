import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const SocialLink = ({ children }: Props) => {
  return <a className=" text-white hover:text-blue-400 cursor-pointer">{children}</a>;
};

export default SocialLink;
