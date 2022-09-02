// Vendors
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

export const Wrapper = styled('div')({});

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': { minWidth: 600, backgroundColor: '#1d2226' },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: 20,
  },
  '& .MuiTypography-root': {
    color: '#ffffffe6',
  },
}));
