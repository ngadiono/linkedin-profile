// Vendors
import React, { memo } from 'react';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

// Styles
import { Wrapper } from './Loading.style';

interface Props {
  text: string;
}

const Loading: React.FC<Props> = ({ text }) => {
  return (
    <Wrapper>
      <div>
        <CircularProgress />
        <Typography variant="h5" gutterBottom>
          {text}
        </Typography>
      </div>
    </Wrapper>
  );
};

export default memo(Loading);
