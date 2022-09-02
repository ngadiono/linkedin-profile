// Vendors
import React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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
      {children}
    </BootstrapDialog>
  );
};

export default Dialog;
