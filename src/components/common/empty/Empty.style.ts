// Vendors
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '120px',
  '> div': { maxWidth: '100px', textAlign: 'center' },
});
