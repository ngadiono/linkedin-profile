// Vendors
import React from 'react';
import Typography from '@mui/material/Typography';

// Components
import CardHeader from '@/common/cardheader/CardHeader';
import CardSection from '@/common/cardsection/CardSection';
import BtnAction from '@/common/btnaction/BtnAction';

// Hooks
import { useAppSelector } from '@/hooks/useReactRedux';

// Config
import { ABOUT } from '@/constants';

const AboutDetail: React.FC = () => {
  const profile = useAppSelector((state) => state.module.profile.detail);

  return <>doooo</>;
};

export default AboutDetail;