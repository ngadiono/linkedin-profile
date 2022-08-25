// Vendors
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// Styles
import { Container, Content, CardSignin } from './Signin.style';

const Signin: React.FC = () => {
  return (
    <Container>
      <Content>
        <CardSignin>
          <Box>
            <Typography variant="h5">Sign in</Typography>
            <Typography variant="body1">Stay updated on your professional world</Typography>
          </Box>
          <Box sx={{ mt: '20px', mb: '20px' }}>
            <TextField label="Email or Phone" variant="outlined" fullWidth sx={{ mb: '20px' }} />
            <TextField label="Password" variant="outlined" fullWidth />
          </Box>
          <Button variant="contained" size="large" fullWidth>
            Sign in
          </Button>
        </CardSignin>
      </Content>
    </Container>
  );
};

export default Signin;
