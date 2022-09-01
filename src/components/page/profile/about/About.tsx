// Vendors
import React from 'react';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';

// Components
import CardHeader from '@/common/cardheader/CardHeader';
import CardSection from '@/common/cardsection/CardSection';
import BtnAction from '@/common/btnaction/BtnAction';

// Hooks
import { useAppSelector } from '@/hooks/useReactRedux';

const title: string = 'About';

const About: React.FC = () => {
  const profile = useAppSelector((state) => state.module.profile.detail);

  return (
    <CardSection showMore={false}>
      <CardHeader title={title}>
        <BtnAction title={title} type="edit" />
      </CardHeader>
      <Typography variant="body1" sx={{ color: '#ffffffe6' }}>
        {profile?.about}
      </Typography>
    </CardSection>
  );
};

export default About;
