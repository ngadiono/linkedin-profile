import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Education: React.FC = () => {
  return (
    <List>
      <ListItem alignItems="flex-start" sx={{ paddingLeft: 0 }}>
        <ListItemAvatar sx={{ marginRight: '10px' }}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 48, height: 48, borderRadius: 0 }}
          />
        </ListItemAvatar>
        <ListItemText
          primary="Frontend Developer"
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: '#ffffff99', display: 'block', marginBottom: '10px' }}
              >
                Google
              </Typography>
            </>
          }
          sx={{ color: '#ffffffe6', textTransform: 'capitalize' }}
        />
      </ListItem>
      <Divider
        variant="inset"
        component="li"
        sx={{ backgroundColor: '#ffffff25', marginTop: '15px', marginLeft: 0 }}
      />
    </List>
  );
};

export default Education;
