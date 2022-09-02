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

// Config
import { ABOUT } from '@/constants';

const About: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const profile = useAppSelector((state) => state.module.profile.detail);

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <CardSection showMore={false}>
        <CardHeader title={ABOUT}>
          <BtnAction title={ABOUT} type={profile?.about !== '' ? 'edit' : 'add'} onClick={handleDialog} />
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
        test
      </Dialog>
    </>
  );
};

export default About;
