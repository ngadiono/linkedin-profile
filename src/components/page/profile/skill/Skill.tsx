import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import GroupIcon from '@mui/icons-material/Group';

// Components
import CardHeader from '@/common/cardheader/CardHeader';
import CardSection from '@/common/cardsection/CardSection';

// Hooks
import { useAppSelector } from '@/hooks/useReactRedux';

const Skill: React.FC = () => {
  const profile = useAppSelector((state) => state.module.profile.detail);

  return (
    <CardSection showMoreTitle="6 skills">
      <CardHeader title="Skills"></CardHeader>
      {profile?.skills.length > 0 && (
        <List>
          {profile?.skills.map((item, idx) => (
            <ListItem sx={{ paddingLeft: 0 }} key={idx}>
              <ListItemIcon sx={{ minWidth: '40px' }}>
                <GroupIcon sx={{ color: '#ffffffe6' }} />
              </ListItemIcon>
              <ListItemText primary={item} sx={{ color: '#ffffffe6' }} />
            </ListItem>
          ))}
        </List>
      )}
    </CardSection>
  );
};

export default Skill;
