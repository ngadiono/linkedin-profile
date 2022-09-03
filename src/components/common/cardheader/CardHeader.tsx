// Vendors
import React, { memo } from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Styles
import { Wrapper } from './CardHeader.style';

interface Props {
  children?: React.ReactNode;
  title: string;
  back?: boolean;
}

const CardHeader: React.FC<Props> = ({ title, children, back = false }) => {
  return (
    <>
      <Wrapper>
        {back && (
          <Link href="/in/johndoe">
            <IconButton sx={{ marginRight: '10px' }}>
              <ArrowBackIcon sx={{ color: '#ffffffe6' }} />
            </IconButton>
          </Link>
        )}
        <Typography variant="h5">{title}</Typography>
        {children}
      </Wrapper>
    </>
  );
};

export default memo(CardHeader);
