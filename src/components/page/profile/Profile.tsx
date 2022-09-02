// Vendors
import React, { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';

// Components
import About from './about/About';
import Education from './education/Education';
import Experience from './experience/Experience';
import Language from './language/Language';
import Organization from './organization/Organization';
import Skill from './skill/Skill';
import BtnAction from '@/common/btnaction/BtnAction';
import Loading from '@/common/loading/Loading';
const Dialog = dynamic(() => import('@/common/dialog/Dialog'), {
  ssr: false,
});
const ProfileForm = dynamic(() => import('./ProfileForm'), {
  suspense: true,
});

// Hooks
import { useAppSelector, useAppDispatch } from '@/hooks/useReactRedux';

// Stores
import { profileLoading, profileDetail, profileFailure } from '@/store/module/profile/profileSlice';

// Styles
import { CardProfile, HeroImage, ProfileImage, ProfileDesc } from './Profile.style';

// Config
import { INTRO } from '@/constants';

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.module.profile.detail);
  const { firstName, lastName, headline, age, experiences } = profile ?? {};

  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  useEffect(() => {
    dispatch(profileLoading());
    const fetchProfile = async () => {
      try {
        const res = await axios.get('/api/profile');
        if (res) {
          dispatch(profileDetail(res.data));
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
          <ProfileImage
            alt="Remy Sharp"
            src="https://media-exp1.licdn.com/dms/image/C5103AQGK3tKgTL_MOw/profile-displayphoto-shrink_200_200/0/1533869608104?e=1666828800&v=beta&t=unwVfRnIfJ_2uHYPP6g8AUehs9pN5Zme9iRp9Fq4ZK8"
          />
          {profile && (
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
              <div>
                <BtnAction title={INTRO} type="edit" onClick={handleDialog} />
              </div>
            </ProfileDesc>
          )}
        </Box>
      </CardProfile>
      <Dialog open={openDialog} onCloseDialog={handleDialog} title={`Edit ${INTRO}`}>
        <Suspense fallback={<Loading text="Loading Form" />}>
          <ProfileForm onCloseDialog={handleDialog} />
        </Suspense>
      </Dialog>
      <About />
      <Experience />
      <Education />
      <Skill />
      <Language />
      <Organization />
    </>
  );
};

export default Profile;
