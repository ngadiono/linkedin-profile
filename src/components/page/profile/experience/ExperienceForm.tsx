// Vendors
import React, { useState } from 'react';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from 'react-avatar-upload';

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
  title: string;
  companyName: string;
  logo: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
}

const ExperienceForm: React.FC<Props> = ({ onCloseDialog }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.module.profile.detail);

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      title: profile?.title,
      companyName: profile?.companyName,
      logo: profile?.logo,
      location: profile?.location,
      description: profile?.description,
      startDate: profile?.startDate,
      endDate: profile?.endDate,
    },
    validationSchema: Yup.object({
      title: Yup.string().required(`Title name ${ERROR_TEXT}`),
      companyName: Yup.string().required(`Company name ${ERROR_TEXT}`),
      logo: Yup.string(),
      location: Yup.string(),
      description: Yup.string().required(`Description ${ERROR_TEXT}`),
      startDate: Yup.string().required(`Start date working ${ERROR_TEXT}`),
      endDate: Yup.string().required(`End date working ${ERROR_TEXT}`),
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

  const handloLogo = (img: string) => {
    console.log(img);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <DialogContent dividers>
        <TextField
          label="Title*"
          variant="outlined"
          fullWidth
          autoComplete="off"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <Avatar getImg={handloLogo} />
          <Typography component="span" variant="body2" sx={{ color: '#ffffffe6', marginLeft: '10px' }}>
            Logo
          </Typography>
        </Box>
        <TextField
          label="Company name*"
          variant="outlined"
          fullWidth
          autoComplete="off"
          name="companyName"
          onChange={formik.handleChange}
          value={formik.values.companyName}
          error={formik.touched.companyName && Boolean(formik.errors.companyName)}
          helperText={formik.touched.companyName && formik.errors.companyName}
        />
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          autoComplete="off"
          name="location"
          onChange={formik.handleChange}
          value={formik.values.location}
        />
        <TextField
          label="Description*"
          variant="outlined"
          fullWidth
          autoComplete="off"
          name="description"
          multiline
          maxRows={6}
          onChange={formik.handleChange}
          value={formik.values.description}
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description && formik.errors.description}
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

export default ExperienceForm;
