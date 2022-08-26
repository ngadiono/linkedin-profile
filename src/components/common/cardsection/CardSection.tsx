// Vendors
import React, { memo } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

// Styles
import { Card, CardHeader, CardBody } from './CardSection.style';

interface Props {
  children?: React.ReactNode;
  title: string;
  add?: boolean;
  edit?: boolean;
}

const CardSection: React.FC<Props> = ({ children, title, add = true, edit = true }) => {
  return (
    <Card>
      <CardHeader>
        <Typography variant="h5">{title}</Typography>
        {add && (
          <IconButton>
            <AddIcon sx={{ color: '#ffffffe6' }} />
          </IconButton>
        )}
        {edit && (
          <IconButton>
            <EditIcon sx={{ color: '#ffffffe6' }} />
          </IconButton>
        )}
      </CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default memo(CardSection);
