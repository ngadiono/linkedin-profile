// Vendors
import React, { memo } from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import SyncIcon from '@mui/icons-material/Sync';

// Styles
import {} from './BtnAction';

interface Props {
  title: string;
  type: string;
  onClick?: () => void;
}

const BtnAction: React.FC<Props> = ({ title, type, onClick }) => {
  return (
    <Tooltip title={`${type === 'sync' ? 'Syncronize' : type === 'add' ? 'Add' : 'Edit'} ${title}`}>
      <IconButton onClick={onClick}>
        {type === 'add' && <AddIcon sx={{ color: '#ffffffe6' }} />}{' '}
        {type === 'edit' && <EditIcon sx={{ color: '#ffffffe6' }} />}
        {type === 'sync' && <SyncIcon sx={{ color: '#ffffffe6' }} />}
      </IconButton>
    </Tooltip>
  );
};

export default memo(BtnAction);
