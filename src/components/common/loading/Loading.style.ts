// Vendors
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 300,
  '> div': {
    textAlign: 'center',
  },
  h4: {
    display: 'block',
    marginTop: 20,
  },
});
