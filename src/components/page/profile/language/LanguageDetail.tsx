// Vendors
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

// Config
import { LANGUAGES } from '@/constants';

const LanguageDetail: React.FC = () => {
  const profile = useAppSelector((state) => state.module.profile.detail);

  return (
    <CardSection empty={profile?.languages.length === 0}>
      <CardHeader title={LANGUAGES} back>
        <BtnAction title={LANGUAGES} type="add" />
      </CardHeader>
      {profile?.languages.length > 0 && (
        <List component="div">
          {profile?.languages.map(({ id, language, proficiency }) => (
            <ListItem sx={{ paddingLeft: 0 }} key={id} component="div">
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

export default LanguageDetail;
