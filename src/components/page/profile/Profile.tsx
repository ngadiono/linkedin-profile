// Vendors
import React, { useEffect } from 'react';
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

// Hooks
import { useAppSelector, useAppDispatch } from '@/hooks/useReactRedux';

// Stores
import { profileLoading, profileDetail, profileFailure } from '@/store/module/profile/profileSlice';

// Styles
import { CardProfile, HeroImage, ProfileImage, ProfileDesc } from './Profile.style';

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.module.profile.detail);
  useEffect(() => {
    dispatch(profileLoading());
    const fetchProfile = async () => {
      try {
        const res = await axios.post('/api/profile');
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
          <ProfileDesc>
            <Typography variant="h5" gutterBottom>
              john doe
            </Typography>
            <Typography variant="h6" gutterBottom>
              Sr. Frontend Developer at Google
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              25 Years old
            </Typography>
          </ProfileDesc>
        </Box>
      </CardProfile>
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
