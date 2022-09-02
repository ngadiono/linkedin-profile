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
  language: string;
  proficiency: string;
}

const LanguageForm: React.FC<Props> = ({ onCloseDialog }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.module.profile.detail);

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      language: profile?.language,
      proficiency: profile?.proficiency,
    },
    validationSchema: Yup.object({
      language: Yup.string().required(`Language ${ERROR_TEXT}`),
      proficiency: Yup.string(),
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
          label="Language*"
          variant="outlined"
          fullWidth
          autoComplete="off"
          name="language"
          onChange={formik.handleChange}
          value={formik.values.language}
          error={formik.touched.language && Boolean(formik.errors.language)}
          helperText={formik.touched.language && formik.errors.language}
        />
        <TextField
          label="Proficiency"
          variant="outlined"
          fullWidth
          autoComplete="off"
          name="proficiency"
          onChange={formik.handleChange}
          value={formik.values.proficiency}
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

export default LanguageForm;
