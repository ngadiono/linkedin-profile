import React, { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';

// Components
import CardHeader from '@/common/cardheader/CardHeader';
import CardSection from '@/common/cardsection/CardSection';
import BtnAction from '@/common/btnaction/BtnAction';
import Loading from '@/common/loading/Loading';
const Dialog = dynamic(() => import('@/common/dialog/Dialog'), {
  ssr: false,
});
const EducationForm = dynamic(() => import('./EducationForm'), {
  suspense: true,
});

// Hooks
import { useAppSelector } from '@/hooks/useReactRedux';

// Config
import { EDUCATIONS } from '@/constants';

const limitData: number = 4;

const Education: React.FC = () => {
  const profile = useAppSelector((state) => state.module.profile.detail);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <CardSection
        showMore={profile?.educations.length > limitData}
        showMoreTitle={`${profile?.educations.length - limitData} ${EDUCATIONS.toLowerCase()}`}
        empty={profile?.educations.length === 0}
        redirect="educations"
      >
        <CardHeader title={EDUCATIONS}>
          <BtnAction title={EDUCATIONS} type="add" onClick={handleDialog} />
          {profile?.educations.length > 0 && (
            <Link href="/profile/details/educations">
              <BtnAction title={EDUCATIONS} type="edit" />
            </Link>
          )}
        </CardHeader>
        {profile?.educations.length > 0 && (
          <List component="div">
            {profile?.educations
              .slice(0, limitData)
              .map(({ id, schoolName, degree, startDate, endDate }, idx) => (
                <div key={id}>
                  <ListItem alignItems="flex-start" sx={{ paddingLeft: 0 }} component="div">
                    <ListItemIcon sx={{ minWidth: '40px' }}>
                      <SchoolIcon sx={{ color: '#ffffffe6' }} />
                    </ListItemIcon>

                    <ListItemText
                      primary={schoolName}
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: '#ffffff99', display: 'block', marginBottom: '10px' }}
                          >
                            {degree}
                          </Typography>
                        </>
                      }
                      sx={{ color: '#ffffffe6', textTransform: 'capitalize' }}
                    />
                  </ListItem>
                  {profile?.educations.length !== idx + 1 && (
                    <Divider
                      variant="inset"
                      sx={{ backgroundColor: '#ffffff25', marginTop: '15px', marginLeft: 0 }}
                    />
                  )}
                </div>
              ))}
          </List>
        )}
      </CardSection>
      <Dialog open={openDialog} onCloseDialog={handleDialog} title={`Add ${EDUCATIONS}`}>
        <Suspense fallback={<Loading text="Loading Form" />}>
          <EducationForm onCloseDialog={handleDialog} />
        </Suspense>
      </Dialog>
    </>
  );
};

export default Education;
