// Vendors
import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

// Styles
import { BootstrapDialog } from './Dialog.style';

export interface DialogProps {
  children?: React.ReactNode;
  onCloseDialog: () => void;
  open: boolean;
  title: string;
}

const Dialog: React.FC<DialogProps> = ({ children, onCloseDialog, open, title }) => {
  return (
    <BootstrapDialog onClose={onCloseDialog} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        {title}
        {onCloseDialog ? (
          <IconButton
            aria-label="close"
            onClick={onCloseDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onCloseDialog} variant="contained">
          Save
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
};

export default Dialog;
