// Vendors
import React, { memo } from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

// Styles
import {} from './BtnAction';

interface Props {
  title: string;
  type: string;
}

const BtnAction: React.FC<Props> = ({ title, type }) => {
  return (
    <Tooltip title={`${type === 'add' ? 'Add' : 'Edit'} ${title}`}>
      <IconButton>
        {type === 'add' && <AddIcon sx={{ color: '#ffffffe6' }} />}{' '}
        {type === 'edit' && <EditIcon sx={{ color: '#ffffffe6' }} />}
      </IconButton>
    </Tooltip>
  );
};

export default memo(BtnAction);
