// Vendors
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Components
import CardSection from '@/common/cardsection/CardSection';
import Empty from '@/common/empty/Empty';
import About from './about/About';
import Education from './education/Education';
import Experience from './experience/Experience';
import Language from './language/Language';
import Organization from './organization/Organization';
import Skill from './skill/Skill';

// Styles
import { CardProfile, HeroImage, ProfileImage, ProfileDesc } from './Profile.style';

const Profile: React.FC = () => {
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
      <CardSection title="About" add={false} showMore={false} view={false}>
        <About />
        <Empty />
      </CardSection>
      <CardSection title="Experience" showMoreTitle="6 experiences">
        <Experience />
        <Empty />
      </CardSection>
      <CardSection title="Education" showMoreTitle="6 education">
        <Education />
        <Empty />
      </CardSection>
      <CardSection title="Skills" showMoreTitle="6 skills">
        <Skill />
        <Empty />
      </CardSection>
      <CardSection title="Languages" showMoreTitle="6 languages">
        <Language />
        <Empty />
      </CardSection>
      <CardSection title="Organizations" showMoreTitle="6 organizations">
        <Organization />
        <Empty />
      </CardSection>
    </>
  );
};

export default Profile;
