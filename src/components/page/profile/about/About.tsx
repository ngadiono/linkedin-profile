// Vendors
import React from 'react';
import Typography from '@mui/material/Typography';

// Components
import CardHeader from '@/common/cardheader/CardHeader';
import CardSection from '@/common/cardsection/CardSection';

// Hooks
import { useAppSelector } from '@/hooks/useReactRedux';

const About: React.FC = () => {
  const profile = useAppSelector((state) => state.module.profile.detail);

  return (
    <CardSection showMore={false}>
      <CardHeader title="About" add={false} />
      <Typography variant="body1" sx={{ color: '#ffffffe6' }}>
        {profile?.about}
      </Typography>
    </CardSection>
  );
};

export default About;
