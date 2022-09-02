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
import { ORGANIZATIONS } from '@/constants';

const OrganizationDetail: React.FC = () => {
  const profile = useAppSelector((state) => state.module.profile.detail);

  return (
    <CardSection empty={profile?.organizations.length === 0}>
      <CardHeader title={ORGANIZATIONS} back>
        <BtnAction title={ORGANIZATIONS} type="add" />
      </CardHeader>
      {profile?.organizations.length > 0 && (
        <List component="div">
          {profile?.organizations.map(({ id, organizationName, position }) => (
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

export default OrganizationDetail;
