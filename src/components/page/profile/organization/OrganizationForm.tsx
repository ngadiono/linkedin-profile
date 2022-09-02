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
  organizationName: string;
  position: string;
  startDate: string;
  endDate: string;
}

const OrganizationForm: React.FC<Props> = ({ onCloseDialog }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.module.profile.detail);

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      organizationName: profile?.organizationName,
      position: profile?.position,
      startDate: profile?.startDate,
      endDate: profile?.endDate,
    },
    validationSchema: Yup.object({
      organizationName: Yup.string().required(`School name ${ERROR_TEXT}`),
      position: Yup.string(),
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
          label="Organization name*"
          variant="outlined"
          fullWidth
          autoComplete="off"
          name="organizationName"
          onChange={formik.handleChange}
          value={formik.values.organizationName}
          error={formik.touched.organizationName && Boolean(formik.errors.organizationName)}
          helperText={formik.touched.organizationName && formik.errors.organizationName}
        />
        <TextField
          label="Position"
          variant="outlined"
          fullWidth
          autoComplete="off"
          name="position"
          onChange={formik.handleChange}
          value={formik.values.position}
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

export default OrganizationForm;
