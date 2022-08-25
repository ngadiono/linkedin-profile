import React from 'react';

import Header from '../header/Header';
import Content from '../content/Content';
import Footer from '../footer/Footer';

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Container;
