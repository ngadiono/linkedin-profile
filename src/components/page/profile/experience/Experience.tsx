// Vendors
import React, { useState } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
import axios from 'axios';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import IconButton from '@mui/material/IconButton';

// Components
import { useAuth } from '@/common/auth/AuthProvider';
import CardHeader from '@/common/cardheader/CardHeader';
import CardSection from '@/common/cardsection/CardSection';
import BtnAction from '@/common/btnaction/BtnAction';
import Dialog from '@/common/dialog/Dialog';
import ExperienceForm from './ExperienceForm';

// Hooks
import { useAppSelector, useAppDispatch } from '@/hooks/useReactRedux';

// Stores
import { profileEdit, profileExperienceUpdate } from '@/store/module/profile/profileSlice';

// Config
import { EXPERIENCES } from '@/constants';

const limitData: number = 4;

const Experience: React.FC = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.module.profile.detail);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [uniq, setUniq] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const handleDialog = () => {
    dispatch(profileEdit(null));
    setOpenDialog(!openDialog);
  };

  const handleSync = (val: any) => {
    setUniq(val.id);
    setLoading(true);
    const syncProfile = async () => {
      try {
        const res = await axios.post('/api/profile', val);
        if (res) {
          setLoading(false);
          // Purpose demo only
          dispatch(profileExperienceUpdate(val));
        }
      } catch (err) {
        setLoading(false);
      }
    };
    if (navigator.onLine) {
      syncProfile();
    } else {
      setLoading(false);
      setOpen(true);
      setTimeout(function () {
        setOpen(false);
      }, 2000);
    }
  };

  return (
    <>
      <CardSection
        showMore={profile?.experiences.length > limitData}
        showMoreTitle={`${profile?.experiences.length - limitData} ${EXPERIENCES.toLowerCase()}`}
        empty={profile?.experiences.length === 0}
        redirect="experiences"
      >
        <CardHeader title="Experience">
          {user && (
            <>
              <BtnAction title={EXPERIENCES} type="add" onClick={handleDialog} />
              {profile?.experiences.length > 0 && (
                <Link href="/in/johndoe/details/experiences">
                  <BtnAction title={EXPERIENCES} type="edit" />
                </Link>
              )}
            </>
          )}
        </CardHeader>
        {profile?.experiences.length > 0 && (
          <List component="div">
            {profile?.experiences
              .slice(0, limitData)
              .map(
                ({ id, title, companyName, logo, location, description, startDate, endDate, temp }, idx) => (
                  <div key={id}>
                    <Box sx={{ display: 'flex', alignItems: 'start' }}>
                      <Box sx={{ flexGrow: 1 }}>
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
                                  sx={{ color: '#ffffffe6', display: 'block', marginBottom: '10px' }}
                                >
                                  {companyName}
                                </Typography>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  sx={{ color: '#ffffff99', display: 'block' }}
                                >
                                  {dayjs(startDate).format('YY MMM YYYY')} -{' '}
                                  {endDate === 'present' || endDate === ''
                                    ? 'Present'
                                    : dayjs(endDate).format('YY MMM YYYY')}
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
                            sx={{ backgroundColor: '#ffffff25', marginTop: '15px', marginLeft: 0 }}
                          />
                        )}
                      </Box>
                      {uniq === id && loading && temp !== undefined ? (
                        <IconButton>
                          <HourglassBottomIcon sx={{ color: '#ffffffe6' }} />
                        </IconButton>
                      ) : (
                        <>
                          {temp !== undefined && (
                            <BtnAction
                              title={EXPERIENCES}
                              type="sync"
                              onClick={() =>
                                handleSync({
                                  id,
                                  title,
                                  companyName,
                                  logo,
                                  location,
                                  description,
                                  startDate,
                                  endDate,
                                })
                              }
                            />
                          )}
                        </>
                      )}
                    </Box>
                  </div>
                )
              )}
          </List>
        )}
      </CardSection>
      <Dialog open={openDialog} onCloseDialog={handleDialog} title={`Add ${EXPERIENCES}`}>
        <ExperienceForm onCloseDialog={handleDialog} />
      </Dialog>
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        message="No internect connection."
      />
    </>
  );
};

export default Experience;
