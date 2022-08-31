// Vendors
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

export const Wrapper = styled('div')({
  display: 'flex',
  marginBottom: '10px',
  h5: { color: '#ffffffe6', flexGrow: 1 },
});

export const BootstrapDialog = styled(Dialog)(() => ({
  '& .MuiDialogContent-root': {
    padding: '16px',
  },
  '& .MuiDialogActions-root': {
    padding: '8px',
  },
}));
