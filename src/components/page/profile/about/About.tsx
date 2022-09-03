// Vendors
import React, { useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import IconButton from '@mui/material/IconButton';

// Components
import { useAuth } from '@/common/auth/AuthProvider';
import CardHeader from '@/common/cardheader/CardHeader';
import CardSection from '@/common/cardsection/CardSection';
import BtnAction from '@/common/btnaction/BtnAction';
import Dialog from '@/common/dialog/Dialog';
import AboutForm from './AboutForm';

// Hooks
import { useAppSelector, useAppDispatch } from '@/hooks/useReactRedux';
// Stores
import { profileDetailUpdate } from '@/store/module/profile/profileSlice';

// Config
import { ABOUT } from '@/constants';

const About: React.FC = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const profile = useAppSelector((state) => state.module.profile.detail);

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleSync = (val: any) => {
    setLoading(true);
    const syncProfile = async () => {
      try {
        const res = await axios.post('/api/profile', val);
        if (res) {
          setLoading(false);
          // Purpose demo only
          dispatch(profileDetailUpdate(val));
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
      <CardSection showMore={false}>
        <CardHeader title={ABOUT}>
          {user && (
            <>
              {profile?.temp === undefined ? (
                <BtnAction
                  title={ABOUT}
                  type={profile?.about !== '' ? 'edit' : 'add'}
                  onClick={handleDialog}
                />
              ) : (
                <>
                  {loading && profile?.temp !== undefined ? (
                    <IconButton>
                      <HourglassBottomIcon sx={{ color: '#ffffffe6' }} />
                    </IconButton>
                  ) : (
                    <>
                      {profile?.temp !== undefined && (
                        <BtnAction title={ABOUT} type="sync" onClick={() => handleSync(profile.about)} />
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </CardHeader>
        <Typography variant="body1" sx={{ color: '#ffffffe6' }}>
          {profile?.about}
        </Typography>
      </CardSection>
      <Dialog
        open={openDialog}
        onCloseDialog={handleDialog}
        title={`${profile?.about !== '' ? 'Edit' : 'Add'} ${ABOUT}`}
      >
        <AboutForm onCloseDialog={handleDialog} />
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

export default About;
