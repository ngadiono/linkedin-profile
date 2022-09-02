// Vendors
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Typography from '@mui/material/Typography';

// Components
import CardHeader from '@/common/cardheader/CardHeader';
import CardSection from '@/common/cardsection/CardSection';
import BtnAction from '@/common/btnaction/BtnAction';
const Dialog = dynamic(() => import('@/common/dialog/Dialog'), {
  ssr: false,
});

// Hooks
import { useAppSelector } from '@/hooks/useReactRedux';

const title: string = 'About';

const About: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const profile = useAppSelector((state) => state.module.profile.detail);

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <CardSection showMore={false}>
        <CardHeader title={title}>
          {profile?.about !== '' && <BtnAction title={title} type="edit" onClick={handleDialog} />}
        </CardHeader>
        <Typography variant="body1" sx={{ color: '#ffffffe6' }}>
          {profile?.about}
        </Typography>
      </CardSection>
      <Dialog open={openDialog} onCloseDialog={handleDialog}>
        test
      </Dialog>
    </>
  );
};

export default About;
