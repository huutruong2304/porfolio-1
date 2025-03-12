import React, { ReactNode } from 'react';
import FadeInSection from './motion/fade-in-section';

type Props = {
  children: ReactNode;
  className?: string;
};

const SectionContent = ({ children, className }: Props) => {
  return <FadeInSection className={`h-full container md:px-20 mx-auto flex ${className ?? ''}`}>{children}</FadeInSection>;
};

export default SectionContent;
