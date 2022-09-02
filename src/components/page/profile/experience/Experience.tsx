// Vendors
import React, { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import dayjs from 'dayjs';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// Components
import CardHeader from '@/common/cardheader/CardHeader';
import CardSection from '@/common/cardsection/CardSection';
import BtnAction from '@/common/btnaction/BtnAction';
import Loading from '@/common/loading/Loading';
const Dialog = dynamic(() => import('@/common/dialog/Dialog'), {
  ssr: false,
});
const ExperienceForm = dynamic(() => import('./ExperienceForm'), {
  suspense: true,
});

// Hooks
import { useAppSelector } from '@/hooks/useReactRedux';

// Config
import { EXPERIENCES } from '@/constants';

const limitData: number = 4;

const Experience: React.FC = () => {
  const profile = useAppSelector((state) => state.module.profile.detail);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const calcDate = (date1, date2) => {
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff / day);
    var months = Math.floor(days / 31);
    var years = Math.floor(months / 12);

    var message = date2.toDateString();
    message += ' was ';
    message += days + ' days ';
    message += months + ' months ';
    message += years + ' years ago \n';

    return message;
  };

  return (
    <>
      <CardSection
        showMore={profile?.experiences.length > limitData}
        showMoreTitle={`${profile?.experiences.length - limitData} ${EXPERIENCES.toLowerCase()}`}
        empty={profile?.experiences.length === 0}
        redirect="experiences"
      >
        <CardHeader title="Experience">
          <BtnAction title={EXPERIENCES} type="add" onClick={handleDialog} />
          {profile?.experiences.length > 0 && (
            <Link href="/profile/details/experiences">
              <BtnAction title={EXPERIENCES} type="edit" />
            </Link>
          )}
        </CardHeader>
        {profile?.experiences.length > 0 && (
          <List component="div">
            {profile?.experiences
              .slice(0, limitData)
              .map(({ id, title, companyName, logo, location, description, startDate, endDate }, idx) => (
                <div key={id}>
                  <ListItem alignItems="flex-start" sx={{ paddingLeft: 0 }} component="div">
                    <ListItemAvatar sx={{ marginRight: '10px' }}>
                      <Avatar alt={title} src={logo} sx={{ width: 48, height: 48, borderRadius: 0 }} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={title}
                      secondary={
                        <>
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: '#ffffffe6', display: 'block', marginBottom: '10px' }}
                          >
                            {companyName}
                          </Typography>
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: '#ffffff99', display: 'block' }}
                          >
                            {dayjs(startDate).format('YY MMM YYYY')} -{' '}
                            {endDate === 'present' ? 'Present' : dayjs(endDate).format('YY MMM YYYY')} · 3 yrs
                            7
                          </Typography>
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: '#ffffff99', display: 'block', marginBottom: '10px' }}
                          >
                            {location}
                          </Typography>
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: '#ffffffe6', display: 'block' }}
                          >
                            {description}
                          </Typography>
                        </>
                      }
                      sx={{ color: '#ffffffe6', textTransform: 'capitalize' }}
                    />
                  </ListItem>
                  {profile?.experiences.length !== idx + 1 && (
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
      <Dialog open={openDialog} onCloseDialog={handleDialog} title={`Add ${EXPERIENCES}`}>
        <Suspense fallback={<Loading text="Loading Form" />}>
          <ExperienceForm onCloseDialog={handleDialog} />
        </Suspense>
      </Dialog>
    </>
  );
};

export default Experience;
