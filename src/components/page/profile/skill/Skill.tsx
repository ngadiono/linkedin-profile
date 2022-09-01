import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import GroupIcon from '@mui/icons-material/Group';

// Components
import CardHeader from '@/common/cardheader/CardHeader';
import CardSection from '@/common/cardsection/CardSection';

const Skill: React.FC = () => {
  return (
    <CardSection showMoreTitle="6 skills">
      <CardHeader title="Skills"></CardHeader>
      <List>
        <ListItem sx={{ paddingLeft: 0 }}>
          <ListItemIcon sx={{ minWidth: '40px' }}>
            <GroupIcon sx={{ color: '#ffffffe6' }} />
          </ListItemIcon>
          <ListItemText primary="Single-line item" sx={{ color: '#ffffffe6' }} />
        </ListItem>
        <ListItem sx={{ paddingLeft: 0 }}>
          <ListItemIcon sx={{ minWidth: '40px' }}>
            <GroupIcon sx={{ color: '#ffffffe6' }} />
          </ListItemIcon>
          <ListItemText primary="Single-line item" sx={{ color: '#ffffffe6' }} />
        </ListItem>
      </List>
    </CardSection>
  );
};

export default Skill;
