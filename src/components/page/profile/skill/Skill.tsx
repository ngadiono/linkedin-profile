import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import GroupIcon from '@mui/icons-material/Group';

// Components
import CardHeader from '@/common/cardheader/CardHeader';
import CardSection from '@/common/cardsection/CardSection';
import BtnAction from '@/common/btnaction/BtnAction';

// Hooks
import { useAppSelector } from '@/hooks/useReactRedux';

const title: string = 'Skill';
const limitData: number = 4;

const Skill: React.FC = () => {
  const profile = useAppSelector((state) => state.module.profile.detail);

  return (
    <CardSection
      showMore={profile?.skills.length > limitData}
      showMoreTitle={`${profile?.skills.length - limitData} ${title.toLowerCase()}s`}
      empty={profile?.skills.length === 0}
      redirect="skills"
    >
      <CardHeader title="Skills">
        <BtnAction title={title} type="add" />
        <BtnAction title={title} type="edit" />
      </CardHeader>
      {profile?.skills.length > 0 && (
        <List component="div">
          {profile?.skills.slice(0, limitData).map((item, idx) => (
            <ListItem sx={{ paddingLeft: 0 }} key={idx} component="div">
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
