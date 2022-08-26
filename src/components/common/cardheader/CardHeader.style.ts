// Vendors
import styled from '@emotion/styled';
import Dialog from '@mui/material/Dialog';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  h5 {
    color: #ffffffe6;
    flex-grow: 1;
  }
`;

export const BootstrapDialog = styled(Dialog)(() => ({
  '& .MuiDialogContent-root': {
    padding: '16px',
  },
  '& .MuiDialogActions-root': {
    padding: '8px',
  },
}));
