// Vendors
import React from 'react';
import Container from '@mui/material/Container';

// Styles
import { Wrapper } from './Content.style';

interface Props {
  children: React.ReactNode;
}

const Content: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Content;
