import React, { useState } from 'react';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// Components
import { useAuth } from '@/common/auth/AuthProvider';
import CardHeader from '@/common/cardheader/CardHeader';
import CardSection from '@/common/cardsection/CardSection';
import BtnAction from '@/common/btnaction/BtnAction';
import Dialog from '@/common/dialog/Dialog';
import OrganizationForm from './OrganizationForm';

// Hooks
import { useAppSelector } from '@/hooks/useReactRedux';

// Config
import { ORGANIZATIONS } from '@/constants';

const limitData: number = 4;

const Organization: React.FC = () => {
  const { user } = useAuth();
  const profile = useAppSelector((state) => state.module.profile.detail);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <CardSection
        showMore={profile?.organizations.length > limitData}
        showMoreTitle={`${profile?.organizations.length - limitData} ${ORGANIZATIONS.toLowerCase()}`}
        empty={profile?.organizations.length === 0}
        redirect="organizations"
      >
        <CardHeader title="Organizations">
          {user && (
            <>
              <BtnAction title={ORGANIZATIONS} type="add" onClick={handleDialog} />
              {profile?.organizations.length > 0 && (
                <Link href="/in/johndoe/details/organizations">
                  <BtnAction title={ORGANIZATIONS} type="edit" />
                </Link>
              )}
            </>
          )}
        </CardHeader>
        {profile?.organizations.length > 0 && (
          <List component="div">
            {profile?.organizations.slice(0, limitData).map(({ id, organizationName, position }) => (
              <ListItem sx={{ paddingLeft: 0 }} component="div">
                <ListItemText
                  primary={organizationName}
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: '#ffffff99', display: 'block' }}
                    >
                      {position} ?? Feb 2019 - Present
                    </Typography>
                  }
                  sx={{ color: '#ffffffe6', textTransform: 'capitalize' }}
                />
              </ListItem>
            ))}
          </List>
        )}
      </CardSection>
      <Dialog open={openDialog} onCloseDialog={handleDialog} title={`Add ${ORGANIZATIONS}`}>
        <OrganizationForm onCloseDialog={handleDialog} />
      </Dialog>
    </>
  );
};

export default Organization;
