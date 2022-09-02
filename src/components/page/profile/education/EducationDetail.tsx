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
import BtnAction from '@/common/btnaction/BtnAction';

// Hooks
import { useAppSelector } from '@/hooks/useReactRedux';

// Config
import { EDUCATIONS } from '@/constants';

const EducationDetail: React.FC = () => {
  const profile = useAppSelector((state) => state.module.profile.detail);

  return (
    <CardSection empty={profile?.educations.length === 0}>
      <CardHeader title={EDUCATIONS} back>
        <BtnAction title={EDUCATIONS} type="add" />
      </CardHeader>
      {profile?.educations.length > 0 && (
        <List component="div">
          {profile?.educations.map(({ id, title, companyName, logo }, idx) => (
            <div key={id}>
              <ListItem alignItems="flex-start" sx={{ paddingLeft: 0 }} component="div">
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

export default EducationDetail;
