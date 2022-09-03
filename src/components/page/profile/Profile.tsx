// Vendors
import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import ImageUploading from 'react-images-uploading';
import Snackbar from '@mui/material/Snackbar';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import IconButton from '@mui/material/IconButton';

// Components
import About from './about/About';
import Education from './education/Education';
import Experience from './experience/Experience';
import Language from './language/Language';
import Organization from './organization/Organization';
import Skill from './skill/Skill';
import BtnAction from '@/common/btnaction/BtnAction';
import Dialog from '@/common/dialog/Dialog';
import ProfileForm from './ProfileForm';

// Hooks
import { useAppSelector, useAppDispatch } from '@/hooks/useReactRedux';

// Stores
import {
  profileLoading,
  profileDetail,
  profileFailure,
  profileAvatarUpdate,
  profileDetailUpdate,
} from '@/store/module/profile/profileSlice';

// Styles
import { CardProfile, HeroImage, ProfileImage, ProfileDesc } from './Profile.style';

// Config
import { INTRO } from '@/constants';

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.module.profile.detail);
  const { id, firstName, lastName, headline, age, avatar } = profile ?? {};

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleUploadImage = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
    const postProfile = async () => {
      try {
        const res = await axios.put('/api/profile');
        if (res) {
          dispatch(profileAvatarUpdate(imageList[0]['data_url']));
        }
      } catch (err) {
        dispatch(profileFailure());
      }
    };
    postProfile();
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

  useEffect(() => {
    dispatch(profileLoading());
    const fetchProfile = async () => {
      try {
        const res = await axios.get('/api/profile');

        // PURPOSE DEMO ONLY
        if (profile === null) {
          if (res) {
            dispatch(profileDetail(res.data));
          }
        } else {
          dispatch(profileDetail(profile));
        }
      } catch (err) {
        dispatch(profileFailure());
      }
    };
    fetchProfile();
  }, []);
  return (
    <>
      <CardProfile>
        <HeroImage />
        <Box sx={{ marginTop: 'auto' }}>
          {profile && (
            <>
              <ImageUploading
                value={images}
                onChange={handleUploadImage}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({ imageList, onImageUpload, onImageUpdate, onImageRemove }) => (
                  <ProfileImage
                    onClick={onImageUpload}
                    alt={firstName}
                    src={imageList.length > 0 ? imageList[0]['data_url'] : avatar}
                    sx={{ cursor: 'pointer' }}
                  />
                )}
              </ImageUploading>
              <ProfileDesc>
                <div>
                  <Typography variant="h5" gutterBottom>
                    {firstName} {lastName}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {headline}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {age} Years old
                  </Typography>
                </div>
                {profile.temp === undefined ? (
                  <div>
                    <BtnAction title={INTRO} type="edit" onClick={handleDialog} />
                  </div>
                ) : (
                  <>
                    {loading && profile.temp !== undefined ? (
                      <div>
                        <IconButton>
                          <HourglassBottomIcon sx={{ color: '#ffffffe6' }} />
                        </IconButton>
                      </div>
                    ) : (
                      <>
                        {profile.temp !== undefined && (
                          <div>
                            <BtnAction
                              title={INTRO}
                              type="sync"
                              onClick={() =>
                                handleSync({
                                  id,
                                  firstName,
                                  lastName,
                                  headline,
                                  age,
                                  avatar,
                                })
                              }
                            />
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}
              </ProfileDesc>
            </>
          )}
        </Box>
      </CardProfile>
      <Dialog open={openDialog} onCloseDialog={handleDialog} title={`Edit ${INTRO}`}>
        <ProfileForm onCloseDialog={handleDialog} />
      </Dialog>
      <About />
      <Experience />
      <Education />
      <Skill />
      <Language />
      <Organization />
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        message="No internect connection."
      />
    </>
  );
};

export default Profile;
