import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  classes?: string;
};

const SectionContent = ({ children, classes }: Props) => {
  return <div className={`h-full container md:px-20 mx-auto flex ${classes ?? ''}`}>{children}</div>;
};

export default SectionContent;
