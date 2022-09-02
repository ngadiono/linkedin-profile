// Vendors
import { styled } from '@mui/material/styles';
import Avatar, { AvatarProps } from '@mui/material/Avatar';

export const CardProfile = styled('section')({
  position: 'relative',
  backgroundColor: '#1d2226',
  borderRadius: '10px',
  padding: '20px 20px 30px 30px',
  marginBottom: '10px',
  minHeight: '425px',
  display: 'flex',
  flexFlow: 'column',
});

export const HeroImage = styled('div')({
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  height: '195px',
  width: '100%',
  backgroundImage:
    "url('https://media-exp1.licdn.com/dms/image/C5116AQG_cM4eJp8gTQ/profile-displaybackgroundimage-shrink_200_800/0/1516893459241?e=1666828800&v=beta&t=8e01Bpxy2HLA-sultZ1R7Nri0IJ1poenePxjj5AYWhw')",
  backgroundPosition: 'initial',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
});

export const ProfileImage = styled(Avatar)<AvatarProps>(() => ({
  width: 160,
  height: 160,
  borderRadius: '100%',
  border: '2px solid #293138',
}));

export const ProfileDesc = styled('div')({
  marginTop: '20px',
  textTransform: 'capitalize',
  color: '#ffffffe6',
  display: 'flex',
  justifyContent: 'space-between',
});
