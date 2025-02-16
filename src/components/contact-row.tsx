import React from 'react';

type Props = {
  title: string;
  href?: string;
  content: string;
};

const ContactRow = ({ title, href, content }: Props) => {
  return (
    <h5 className="text-white text-2xl">
      {title}:{' '}
      {href ? (
        <a href={href} className="hover:underline">
          {content}
        </a>
      ) : (
        content
      )}
    </h5>
  );
};

export default ContactRow;
