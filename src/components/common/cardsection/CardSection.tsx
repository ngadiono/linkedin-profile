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
import { Card, CardHeader, CardBody, ShowMore } from './CardSection.style';

interface Props {
  children?: React.ReactNode;
  title: string;
  add?: boolean;
  edit?: boolean;
  view?: boolean;
  showMore?: boolean;
  showMoreTitle?: string;
}

const CardSection: React.FC<Props> = ({
  children,
  title,
  add = true,
  edit = true,
  view = true,
  showMore = true,
  showMoreTitle,
}) => {
  return (
    <>
      <Card showMore={showMore}>
        <CardHeader>
          <Typography variant="h5">{title}</Typography>
          {add && (
            <Tooltip title={`Add ${title}`}>
              <IconButton>
                <AddIcon sx={{ color: '#ffffffe6' }} />
              </IconButton>
            </Tooltip>
          )}
          {edit && (
            <Tooltip title={`Edit ${title}`}>
              <IconButton>
                <EditIcon sx={{ color: '#ffffffe6' }} />
              </IconButton>
            </Tooltip>
          )}
          {view && (
            <Tooltip title="Public view">
              <Switch />
            </Tooltip>
          )}
        </CardHeader>
        <CardBody>{children}</CardBody>
      </Card>
      {showMore && (
        <ShowMore variant="contained" fullWidth>
          Show all {showMoreTitle} <ArrowRightAltIcon sx={{ marginLeft: '5px' }} />
        </ShowMore>
      )}
    </>
  );
};

export default memo(CardSection);
