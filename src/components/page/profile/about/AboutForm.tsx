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
  about: string;
}

const AboutForm: React.FC<Props> = ({ onCloseDialog }) => {
  const CHARACTER_LIMIT = 200;
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.module.profile.detail);

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      about: profile?.about,
    },
    validationSchema: Yup.object({
      about: Yup.string().required(`About ${ERROR_TEXT}`),
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
          variant="outlined"
          multiline
          maxRows={6}
          fullWidth
          autoComplete="off"
          name="about"
          inputProps={{
            maxlength: CHARACTER_LIMIT,
          }}
          onChange={formik.handleChange}
          value={formik.values.about}
          error={formik.touched.about && Boolean(formik.errors.about)}
          helperText={
            formik.touched.about && formik.errors.about
              ? formik.touched.about && formik.errors.about
              : `${formik.values.about.length}/${CHARACTER_LIMIT}`
          }
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

export default AboutForm;
