import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// Components
import CardHeader from '@/common/cardheader/CardHeader';
import CardSection from '@/common/cardsection/CardSection';
import BtnAction from '@/common/btnaction/BtnAction';

// Hooks
import { useAppSelector } from '@/hooks/useReactRedux';

const title: string = 'Education';
const limitData: number = 4;

const Education: React.FC = () => {
  const profile = useAppSelector((state) => state.module.profile.detail);

  return (
    <CardSection
      showMore={profile?.educations.length > limitData}
      showMoreTitle={`${profile?.educations.length - limitData} ${title.toLowerCase()}s`}
      empty={profile?.educations.length === 0}
      redirect="educations"
    >
      <CardHeader title="Education">
        <BtnAction title={title} type="add" />
        <BtnAction title={title} type="edit" />
      </CardHeader>
      {profile?.educations.length > 0 && (
        <List>
          {profile?.educations.slice(0, limitData).map(({ id, title, companyName, logo }, idx) => (
            <div key={id}>
              <ListItem alignItems="flex-start" sx={{ paddingLeft: 0 }}>
                <ListItemAvatar sx={{ marginRight: '10px' }}>
                  <Avatar alt={title} src={logo} sx={{ width: 48, height: 48, borderRadius: 0 }} />
                </ListItemAvatar>
                <ListItemText
                  primary={title}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: '#ffffff99', display: 'block', marginBottom: '10px' }}
                      >
                        {companyName}
                      </Typography>
                    </>
                  }
                  sx={{ color: '#ffffffe6', textTransform: 'capitalize' }}
                />
              </ListItem>
              {profile?.educations.length !== idx + 1 && (
                <Divider
                  variant="inset"
                  component="li"
                  sx={{ backgroundColor: '#ffffff25', marginTop: '15px', marginLeft: 0 }}
                />
              )}
            </div>
          ))}
        </List>
      )}
    </CardSection>
  );
};

export default Education;
