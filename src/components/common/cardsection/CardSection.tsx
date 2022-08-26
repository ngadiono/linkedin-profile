// Vendors
import React, { memo } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';

// Styles
import { Card, ShowMore } from './CardSection.style';

interface Props {
  children?: React.ReactNode;
  showMore?: boolean;
  showMoreTitle?: string;
}

const CardSection: React.FC<Props> = ({ children, showMore = true, showMoreTitle }) => {
  return (
    <>
      <Card showMore={showMore}>{children}</Card>
      {showMore && (
        <ShowMore variant="contained" fullWidth>
          Show all {showMoreTitle} <ArrowRightAltIcon sx={{ marginLeft: '5px' }} />
        </ShowMore>
      )}
    </>
  );
};

export default memo(CardSection);
