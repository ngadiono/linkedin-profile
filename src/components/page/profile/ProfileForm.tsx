// Vendors
import React, { useState } from 'react';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';

// Hooks
import { useAppSelector, useAppDispatch } from '@/hooks/useReactRedux';

// Stores
import { profileDetailUpdate } from '@/store/module/profile/profileSlice';

// Configs
import { ERROR_TEXT } from '@/constants';

export interface Props {
  onCloseDialog: () => void;
}

interface FormValues {
  firstName: string;
  lastName: string;
  age: number | string;
  headline: string;
}

const ProfileForm: React.FC<Props> = ({ onCloseDialog }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.module.profile.detail);

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      firstName: profile?.firstName,
      lastName: profile?.lastName,
      age: profile?.age,
      headline: profile?.headline,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(`First name ${ERROR_TEXT}`),
      lastName: Yup.string().required(`Last name ${ERROR_TEXT}`),
      age: Yup.number().positive().required(`Age ${ERROR_TEXT}`).min(1).max(200),
    }),
    onSubmit: (values) => {
      setLoading(true);
      const fetchProfile = async () => {
        try {
          const res = await axios.put('/api/profile', values);
          if (res) {
            setLoading(false);

            // Purpose demo only
            dispatch(profileDetailUpdate(values));

            onCloseDialog();
          }
        } catch (err) {
          setLoading(false);
        }
      };
      fetchProfile();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <DialogContent dividers>
        <TextField
          label="First name*"
          variant="outlined"
          fullWidth
          autoComplete="off"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          label="Last name*"
          variant="outlined"
          fullWidth
          autoComplete="off"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          label="Age*"
          variant="outlined"
          fullWidth
          autoComplete="off"
          type="number"
          name="age"
          onChange={formik.handleChange}
          value={formik.values.age}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
        />
        <TextField
          label="Headline"
          variant="outlined"
          fullWidth
          autoComplete="off"
          name="headline"
          onChange={formik.handleChange}
          value={formik.values.headline}
        />
      </DialogContent>
      <DialogActions>
        <Button type="submit" variant="contained" disabled={loading}>
          {loading ? 'Saving...' : 'Save'}
        </Button>
      </DialogActions>
    </form>
  );
};

export default ProfileForm;
