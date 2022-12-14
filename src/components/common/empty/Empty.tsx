// Vendors
import React, { memo } from 'react';
import Typography from '@mui/material/Typography';
import SimCardAlertIcon from '@mui/icons-material/SimCardAlert';

// Styles
import { Wrapper } from './Empty.style';

const Empty: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <SimCardAlertIcon sx={{ color: '#ffffff99' }} />
        <Typography variant="body1" sx={{ color: '#ffffff99' }}>
          No data yet
        </Typography>
      </div>
    </Wrapper>
  );
};

export default memo(Empty);
