import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SectionTitle = ({ children }: Props) => {
  return <h2 className="text-5xl text-white mb-8">{children}</h2>;
};

export default SectionTitle;
