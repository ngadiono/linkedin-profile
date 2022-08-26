import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// Components
import CardHeader from '@/common/cardheader/CardHeader';

const Language: React.FC = () => {
  return (
    <>
      <CardHeader title="Languages"></CardHeader>
      <List>
        <ListItem sx={{ paddingLeft: 0 }}>
          <ListItemText
            primary="Frontend Developer"
            secondary={
              <Typography component="span" variant="body2" sx={{ color: '#ffffff99', display: 'block' }}>
                Feb 2019 - Present · 3 yrs 7 mos
              </Typography>
            }
            sx={{ color: '#ffffffe6', textTransform: 'capitalize' }}
          />
        </ListItem>
      </List>
    </>
  );
};

export default Language;
