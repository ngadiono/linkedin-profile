// Vendors
import React from 'react';

// Components
import Header from '../header/Header';
import Content from '../content/Content';
import Footer from '../footer/Footer';

// Styles
import { Wrapper } from './Container.style';

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};

export default Container;
