// Vendors
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

export const Wrapper = styled('div')({});

const color: string = '#ffffffe6';

export const BootstrapDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': { minWidth: 600, backgroundColor: '#1d2226' },
  '& .MuiDialogContent-root': {
    padding: '30px 20px',
  },
  '& .MuiDialogActions-root': {
    padding: 20,
  },
  '& .MuiTypography-root': {
    color: color,
  },
  '& .MuiFormControl-root': {
    marginBottom: 20,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  '& input, & textarea': {
    color: color,
  },
  '& label': {
    color: color,
    '&.Mui-focused': {
      color: color,
    },
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: color,
  },
  '& .MuiFormHelperText-root': {
    color: color,
    '&.Mui-error': {
      color: '#ff1744',
    },
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: color,
    },
    '&:hover fieldset': {
      borderColor: color,
    },
    '&.Mui-focused fieldset': {
      borderColor: color,
    },
  },
}));
