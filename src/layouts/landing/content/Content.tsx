import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Content: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default Content;
