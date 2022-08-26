// Vendors
import styled from '@emotion/styled';
import Button, { ButtonProps } from '@mui/material/Button';

type CardProps = {
  showMore: boolean;
};

export const Card = styled.section<CardProps>`
  background-color: #1d2226;
  border-radius: ${(props) => (props.showMore ? '10px 10px 0 0' : '10px')};
  padding: 20px 20px 30px 30px;
  margin-bottom: ${(props) => (props.showMore ? '0' : '10px')};
`;

export const ShowMore = styled(Button)<ButtonProps>(() => ({
  marginBottom: 10,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  textTransform: 'inherit',
  backgroundColor: '#1d2226',
}));
