// Vendors
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

// Components
import { useAuth } from '@/common/auth/AuthProvider';

// Styles
import { Container, Content, CardSignin } from './Signin.style';

interface FormValues {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const { auth, initializing, getRedirect, clearRedirect, user } = useAuth();
  const router = useRouter();
  const mounted = useRef<boolean>();
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [signInInProgress, setInProgress] = useState(false);

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
      const { email, password } = values;
      setLoading(true);
      const fetchSignin = async () => {
        try {
          const res = await axios.post('/api/signin', values);
          if (res) {
            setLoading(false);
            await auth.signIn(email, password, 500);
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

  /* Guard if page is navigated away while sign in process is still active */
  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!initializing) {
      if (user) {
        const redirect = getRedirect();
        if (redirect) {
          router.push(redirect); // go to page which redirected to login
          clearRedirect();
        } else {
          router.push('/profile'); // go to default protected page
        }
      }
    }
  }, [router, getRedirect, clearRedirect, initializing, user]);

  if (initializing) {
    return <h1>Application Loading...</h1>;
  }
  if (signInInProgress) {
    return <></>;
  }

  return (
    <>
      {!user ? ( // there is no user, show sign in form
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
                    inputProps={{ 'data-testid': 'email' }}
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
                    inputProps={{ 'data-testid': 'password' }}
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
      ) : null}
    </>
  );
};

export default Signin;
