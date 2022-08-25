// Vendors
import styled from '@emotion/styled';

export const Container = styled.section`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 100vh;
  background-color: #fff;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;

export const Content = styled.main`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  float: none;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
`;

export const CardSignin = styled.div`
  width: 352px;
  -webkit-box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
  padding: 24px;
  border-radius: 8px;
  margin: 0 auto;
  background: #fff;
`;
