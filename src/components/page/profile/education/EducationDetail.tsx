// Vendors
import React, { useState } from 'react';
import dayjs from 'dayjs';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';

// Components
import { useAuth } from '@/common/auth/AuthProvider';
import CardHeader from '@/common/cardheader/CardHeader';
import CardSection from '@/common/cardsection/CardSection';
import BtnAction from '@/common/btnaction/BtnAction';
import Dialog from '@/common/dialog/Dialog';
import EducationForm from './EducationForm';

// Hooks
import { useAppSelector } from '@/hooks/useReactRedux';

// Config
import { EDUCATIONS } from '@/constants';

const EducationDetail: React.FC = () => {
  const { user } = useAuth();
  const profile = useAppSelector((state) => state.module.profile.detail);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <CardSection empty={profile?.educations.length === 0}>
        <CardHeader title={EDUCATIONS} back>
          {user && <BtnAction title={EDUCATIONS} type="add" onClick={handleDialog} />}
        </CardHeader>
        {profile?.educations.length > 0 && (
          <List component="div">
            {profile?.educations.map(({ id, schoolName, degree, fieldOfStudy, startDate, endDate }, idx) => (
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
                          {dayjs(startDate).format('YY MMM YYYY')} - {dayjs(endDate).format('YY MMM YYYY')}
                        </Typography>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: '#ffffff99', display: 'block', marginBottom: '10px' }}
                        >
                          {degree} - {fieldOfStudy}
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
        <EducationForm onCloseDialog={handleDialog} />
      </Dialog>
    </>
  );
};

export default EducationDetail;
