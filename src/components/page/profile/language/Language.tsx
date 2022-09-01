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

const title: string = 'Language';
const limitData: number = 4;

const Language: React.FC = () => {
  const profile = useAppSelector((state) => state.module.profile.detail);

  return (
    <CardSection
      showMore={profile?.languages.length > limitData}
      showMoreTitle={`${profile?.languages.length - limitData} ${title.toLowerCase()}s`}
      empty={profile?.languages.length === 0}
      redirect="languages"
    >
      <CardHeader title="Languages">
        <BtnAction title={title} type="add" />
        <BtnAction title={title} type="edit" />
      </CardHeader>
      {profile?.languages.length > 0 && (
        <List>
          {profile?.languages.slice(0, limitData).map(({ id, language, proficiency }) => (
            <ListItem sx={{ paddingLeft: 0 }} key={id}>
              <ListItemText
                primary={language}
                secondary={
                  <Typography component="span" variant="body2" sx={{ color: '#ffffff99', display: 'block' }}>
                    {proficiency}
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

export default Language;
