// Vendors
import { styled } from '@mui/material/styles';

export const Container = styled('section')({
  display: ['-webkit-box', '-ms-flexbox', 'flex'],
  minHeight: '100vh',
  backgroundColor: '#fff',
  WebkitBoxOrient: 'vertical',
  WebkitBoxDirection: 'normal',
  msFlexDirection: 'column',
  flexDirection: 'column',
});

export const Content = styled('main')({
  display: ['-webkit-box', '-ms-flexbox', 'flex'],
  WebkitBoxFlex: '1',
  msFlex: '1',
  flex: 1,
  cssFloat: 'none',
  WebkitBoxOrient: 'vertical',
  WebkitBoxDirection: 'normal',
  msFlexDirection: 'column',
  flexDirection: 'column',
  WebkitBoxPack: 'center',
  msFlexPack: 'center',
  justifyContent: 'center',
  margin: '0 auto',
});

export const CardSignin = styled('form')({
  width: '352px',
  WebkitBoxShadow: '0 4px 12px rgb(0 0 0 / 15%)',
  boxShadow: '0 4px 12px rgb(0 0 0 / 15%)',
  padding: '24px',
  borderRadius: '8px',
  margin: '0 auto',
  background: '#fff',
});
