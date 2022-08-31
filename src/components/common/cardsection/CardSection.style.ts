// Vendors
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

type CardProps = {
  showMore: boolean;
};

export const Card = styled('section')<CardProps>(({ showMore }) => ({
  backgroundColor: '#1d2226',
  borderRadius: showMore ? '10px 10px 0 0' : '10px',
  padding: '20px 20px 30px 30px',
  marginBottom: showMore ? '0' : '10px',
}));

export const ShowMore = styled(Button)<ButtonProps>(() => ({
  marginBottom: 10,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  textTransform: 'inherit',
  backgroundColor: '#1d2226',
}));
