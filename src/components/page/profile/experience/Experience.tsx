// Vendors
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

// Hooks
import { useAppSelector } from '@/hooks/useReactRedux';

const Experience: React.FC = () => {
  const profile = useAppSelector((state) => state.module.profile.detail);

  return (
    <CardSection showMoreTitle="6 experiences">
      <CardHeader title="Experience"></CardHeader>
      {profile?.experiences.length > 0 && (
        <List>
          {profile?.experiences.map(
            ({ id, title, companyName, logo, location, description, startDate, endDate }, idx) => (
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
                          sx={{ color: '#ffffffe6', display: 'block', marginBottom: '10px' }}
                        >
                          {companyName}
                        </Typography>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: '#ffffff99', display: 'block' }}
                        >
                          Feb 2019 - Present · 3 yrs 7 mos
                        </Typography>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: '#ffffff99', display: 'block', marginBottom: '10px' }}
                        >
                          {location}
                        </Typography>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: '#ffffffe6', display: 'block' }}
                        >
                          {description}
                        </Typography>
                      </>
                    }
                    sx={{ color: '#ffffffe6', textTransform: 'capitalize' }}
                  />
                </ListItem>
                {profile?.experiences.length !== idx + 1 && (
                  <Divider
                    variant="inset"
                    component="li"
                    sx={{ backgroundColor: '#ffffff25', marginTop: '15px', marginLeft: 0 }}
                  />
                )}
              </div>
            )
          )}
        </List>
      )}
    </CardSection>
  );
};

export default Experience;
