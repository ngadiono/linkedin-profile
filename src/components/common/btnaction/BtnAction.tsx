// Vendors
import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

// Styles
import {} from './BtnAction';

interface Props {
  children: React.ReactNode;
  title: string;
}

const BtnAction: React.FC<Props> = ({ children, title }) => {
  return (
    <Tooltip title={''}>
      <IconButton>{children}</IconButton>
    </Tooltip>
  );
};

export default BtnAction;
