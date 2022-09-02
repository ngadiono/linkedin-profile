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
  schoolName: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
}

const EducationForm: React.FC<Props> = ({ onCloseDialog }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.module.profile.detail);

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      schoolName: profile?.schoolName,
      degree: profile?.degree,
      fieldOfStudy: profile?.fieldOfStudy,
      startDate: profile?.startDate,
      endDate: profile?.endDate,
    },
    validationSchema: Yup.object({
      schoolName: Yup.string().required(`School name ${ERROR_TEXT}`),
      degree: Yup.string(),
      fieldOfStudy: Yup.string(),
      startDate: Yup.string().required(`Start date education ${ERROR_TEXT}`),
      endDate: Yup.string().required(`End date education ${ERROR_TEXT}`),
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
          label="School name*"
          variant="outlined"
          fullWidth
          autoComplete="off"
          name="schoolName"
          onChange={formik.handleChange}
          value={formik.values.schoolName}
          error={formik.touched.schoolName && Boolean(formik.errors.schoolName)}
          helperText={formik.touched.schoolName && formik.errors.schoolName}
        />
        <TextField
          label="Degree"
          variant="outlined"
          fullWidth
          autoComplete="off"
          name="degree"
          onChange={formik.handleChange}
          value={formik.values.degree}
        />
        <TextField
          label="Field of study"
          variant="outlined"
          fullWidth
          autoComplete="off"
          name="fieldOfStudy"
          onChange={formik.handleChange}
          value={formik.values.fieldOfStudy}
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

export default EducationForm;
