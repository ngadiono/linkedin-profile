// Vendors
import { styled } from '@mui/material/styles';
import Container, { ContainerProps } from '@mui/material/Container';

export const Wrapper = styled(Container)<ContainerProps>(() => ({
  paddingTop: '20px',
  paddingBottom: '20px',
}));
