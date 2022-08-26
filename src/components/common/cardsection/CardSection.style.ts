// Vendors
import styled from '@emotion/styled';
import Button, { ButtonProps } from '@mui/material/Button';

const textColor = '#ffffffe6';

type CardProps = {
  showMore: boolean;
};

export const Card = styled.section<CardProps>`
  background-color: #1d2226;
  border-radius: ${(props) => (props.showMore ? '10px 10px 0 0' : '10px')};
  padding: 20px 20px 30px 30px;
  margin-bottom: ${(props) => (props.showMore ? '0' : '10px')};
`;

export const CardHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
  h5 {
    color: ${textColor};
    flex-grow: 1;
  }
`;
export const CardBody = styled.div`
  p {
    color: ${textColor};
  }
`;

export const ShowMore = styled(Button)<ButtonProps>(() => ({
  marginBottom: 10,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  textTransform: 'inherit',
  backgroundColor: '#1d2226',
}));
