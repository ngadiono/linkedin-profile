// Vendors
import styled from '@emotion/styled';

const textColor = '#ffffffe6';

export const Card = styled.section`
  background-color: #1d2226;
  border-radius: 10px;
  padding: 20px 20px 30px 30px;
  margin-bottom: 10px;
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
