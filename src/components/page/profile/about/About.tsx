// Vendors
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Components
import CardHeader from '@/common/cardheader/CardHeader';

const title: string = 'About';

const About: React.FC = () => {
  return (
    <>
      <CardHeader title="About" add={false} />
      <Typography variant="body1" sx={{ color: '#ffffffe6' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam
        beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat
        deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </>
  );
};

export default About;
