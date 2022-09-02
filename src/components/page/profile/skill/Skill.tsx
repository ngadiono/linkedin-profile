import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import GroupIcon from '@mui/icons-material/Group';

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
import { SKILLS } from '@/constants';

const limitData: number = 4;

const Skill: React.FC = () => {
  const profile = useAppSelector((state) => state.module.profile.detail);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <CardSection
        showMore={profile?.skills.length > limitData}
        showMoreTitle={`${profile?.skills.length - limitData} ${SKILLS.toLowerCase()}`}
        empty={profile?.skills.length === 0}
        redirect="skills"
      >
        <CardHeader title="Skills">
          <BtnAction title={SKILLS} type="add" onClick={handleDialog} />
          {profile?.skills.length > 0 && (
            <Link href="/profile/details/skills">
              <BtnAction title={SKILLS} type="edit" />
            </Link>
          )}
        </CardHeader>
        {profile?.skills.length > 0 && (
          <List component="div">
            {profile?.skills.slice(0, limitData).map((item, idx) => (
              <ListItem sx={{ paddingLeft: 0 }} key={idx} component="div">
                <ListItemIcon sx={{ minWidth: '40px' }}>
                  <GroupIcon sx={{ color: '#ffffffe6' }} />
                </ListItemIcon>
                <ListItemText primary={item} sx={{ color: '#ffffffe6' }} />
              </ListItem>
            ))}
          </List>
        )}
      </CardSection>
      <Dialog open={openDialog} onCloseDialog={handleDialog} title={`Add ${SKILLS}`}>
        test
      </Dialog>
    </>
  );
};

export default Skill;
