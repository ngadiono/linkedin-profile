// Vendors
import styled from '@emotion/styled';
import Avatar, { AvatarProps } from '@mui/material/Avatar';

export const CardProfile = styled.section`
  position: relative;
  background-color: #1d2226;
  border-radius: 10px;
  padding: 20px 20px 30px 30px;
  margin-bottom: 10px;
  margin-top: 20px;
  min-height: 425px;
  display: flex;
  flex-flow: column;
`;

export const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 195px;
  width: 100%;
  background-image: url('https://media-exp1.licdn.com/dms/image/C5116AQG_cM4eJp8gTQ/profile-displaybackgroundimage-shrink_200_800/0/1516893459241?e=1666828800&v=beta&t=8e01Bpxy2HLA-sultZ1R7Nri0IJ1poenePxjj5AYWhw');
  background-position: initial;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ProfileImage = styled(Avatar)<AvatarProps>(() => ({
  width: 160,
  height: 160,
  borderRadius: '100%',
  border: '2px solid #293138',
}));

export const ProfileDesc = styled.div`
  margin-top: 20px;
  text-transform: capitalize;
  color: #ffffffe6;
`;
