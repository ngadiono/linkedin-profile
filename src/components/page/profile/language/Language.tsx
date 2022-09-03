import React, { useState } from 'react';
import Link from 'next/link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// Components
import CardHeader from '@/common/cardheader/CardHeader';
import CardSection from '@/common/cardsection/CardSection';
import BtnAction from '@/common/btnaction/BtnAction';
import Dialog from '@/common/dialog/Dialog';
import LanguageForm from './LanguageForm';

// Hooks
import { useAppSelector } from '@/hooks/useReactRedux';

// Config
import { LANGUAGES } from '@/constants';

const limitData: number = 4;

const Language: React.FC = () => {
  const profile = useAppSelector((state) => state.module.profile.detail);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleDialog = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <CardSection
        showMore={profile?.languages.length > limitData}
        showMoreTitle={`${profile?.languages.length - limitData} ${LANGUAGES.toLowerCase()}`}
        empty={profile?.languages.length === 0}
        redirect="languages"
      >
        <CardHeader title="Languages">
          <BtnAction title={LANGUAGES} type="add" onClick={handleDialog} />
          {profile?.languages.length > 0 && (
            <Link href="/profile/details/languages">
              <BtnAction title={LANGUAGES} type="edit" />
            </Link>
          )}
        </CardHeader>
        {profile?.languages.length > 0 && (
          <List component="div">
            {profile?.languages.slice(0, limitData).map(({ id, language, proficiency }) => (
              <ListItem sx={{ paddingLeft: 0 }} key={id} component="div">
                <ListItemText
                  primary={language}
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: '#ffffff99', display: 'block' }}
                    >
                      {proficiency}
                    </Typography>
                  }
                  sx={{ color: '#ffffffe6', textTransform: 'capitalize' }}
                />
              </ListItem>
            ))}
          </List>
        )}
      </CardSection>
      <Dialog open={openDialog} onCloseDialog={handleDialog} title={`Add ${LANGUAGES}`}>
        <LanguageForm onCloseDialog={handleDialog} />
      </Dialog>
    </>
  );
};

export default Language;
