// Vendors
import React from 'react';
import { useRouter } from 'next/router';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

// Styles
import { Container, Content, CardSignin } from './Signin.style';

interface FormValues {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const router = useRouter();
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Try "admin@gmail.com"'),
      password: Yup.string().required('Try "admin"'),
    }),
    onSubmit: (values: FormValues) => {
      setLoading(true);
      const fetchSignin = async () => {
        try {
          const res = await axios.post('/api/signin', values);
          if (res) {
            setLoading(false);
            return router.push('/profile');
          }
        } catch (err) {
          setLoading(false);
          setOpen(true);
          setTimeout(function () {
            setOpen(false);
          }, 2000);
        }
      };
      fetchSignin();
    },
  });

  return (
    <>
      <Container>
        <Content>
          <CardSignin onSubmit={formik.handleSubmit}>
            <Box>
              <Typography variant="h5">Sign in</Typography>
              <Typography variant="body1">Stay updated on your professional world</Typography>
            </Box>
            <Box sx={{ mt: '20px', mb: '20px' }}>
              <TextField
                id="email"
                name="email"
                type="email"
                label="Email"
                variant="outlined"
                fullWidth
                sx={{ mb: '20px' }}
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                id="password"
                name="password"
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Box>
            <Button type="submit" variant="contained" size="large" fullWidth disabled={loading}>
              {loading ? 'Loading...' : 'Sign In'}
            </Button>
          </CardSignin>
        </Content>
      </Container>
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        message="User not found."
      />
    </>
  );
};

export default Signin;
