import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// Components
import CardHeader from '@/common/cardheader/CardHeader';
import CardSection from '@/common/cardsection/CardSection';
import BtnAction from '@/common/btnaction/BtnAction';

// Hooks
import { useAppSelector } from '@/hooks/useReactRedux';

const title: string = 'Organization';
const limitData: number = 4;

const Organization: React.FC = () => {
  const profile = useAppSelector((state) => state.module.profile.detail);
  return (
    <CardSection
      showMore={profile?.organizations.length > limitData}
      showMoreTitle={`${profile?.organizations.length - limitData} ${title.toLowerCase()}s`}
      empty={profile?.organizations.length === 0}
      redirect="organizations"
    >
      <CardHeader title="Organizations">
        <BtnAction title={title} type="add" />
        <BtnAction title={title} type="edit" />
      </CardHeader>
      {profile?.organizations.length > 0 && (
        <List component="div">
          {profile?.organizations.slice(0, limitData).map(({ id, organizationName, position }) => (
            <ListItem sx={{ paddingLeft: 0 }} component="div">
              <ListItemText
                primary={organizationName}
                secondary={
                  <Typography component="span" variant="body2" sx={{ color: '#ffffff99', display: 'block' }}>
                    {position} · Feb 2019 - Present
                  </Typography>
                }
                sx={{ color: '#ffffffe6', textTransform: 'capitalize' }}
              />
            </ListItem>
          ))}
        </List>
      )}
    </CardSection>
  );
};

export default Organization;
