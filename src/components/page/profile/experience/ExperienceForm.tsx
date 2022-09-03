// Vendors
import React, { useState } from 'react';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Avatar from 'react-avatar-upload';
import { v4 as uuidv4 } from 'uuid';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import FormHelperText from '@mui/material/FormHelperText';

// Hooks
import { useAppSelector, useAppDispatch } from '@/hooks/useReactRedux';

// Stores
import { profileExperienceAdd, profileExperienceUpdate } from '@/store/module/profile/profileSlice';

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
  startDate: any;
  endDate: any;
  currentWorking: boolean;
}

const ExperienceForm: React.FC<Props> = ({ onCloseDialog }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.module.profile.detail);
  const profileEdit = useAppSelector((state) => state.module.profile.edit);

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      title: profileEdit ? profileEdit.title : '',
      companyName: profileEdit ? profileEdit.companyName : '',
      logo: profileEdit ? profileEdit.logo : '',
      location: profileEdit ? profileEdit.location : '',
      description: profileEdit ? profileEdit.description : '',
      startDate: profileEdit ? profileEdit.startDate : '',
      endDate: profileEdit ? profileEdit.endDate : '',
      currentWorking: profileEdit ? profileEdit.endDate !== 'present' : false,
    },
    validationSchema: Yup.object({
      title: Yup.string().required(`Title name ${ERROR_TEXT}`),
      companyName: Yup.string().required(`Company name ${ERROR_TEXT}`),
      logo: Yup.string(),
      location: Yup.string(),
      description: Yup.string().required(`Description ${ERROR_TEXT}`),
      startDate: Yup.date().required(`Start date working ${ERROR_TEXT}`),
      endDate: Yup.date().when('currentWorking', {
        is: false,
        then: Yup.date().required(`End date working ${ERROR_TEXT}`),
      }),
    }),
    onSubmit: (values) => {
      const formData = {
        ...values,
        id: uuidv4(),
        startDate: values.startDate.format(),
        endDate: formik.values.currentWorking ? 'present' : values.endDate.format(),
      };
      setLoading(true);
      const fetchProfile = async () => {
        try {
          const res = await axios.post('/api/profile', formData);
          if (res) {
            setLoading(false);
            // Purpose demo only
            if (profileEdit === null) {
              dispatch(profileExperienceAdd(formData));
            } else {
              dispatch(profileExperienceUpdate({ ...values, id: profileEdit.id }));
            }
            onCloseDialog();
          }
        } catch (err) {
          setLoading(false);
        }
      };
      if (navigator.onLine) {
        fetchProfile();
      } else {
        dispatch(profileExperienceUpdate({ ...values, id: profileEdit.id, temp: true }));
        onCloseDialog();
      }
    },
  });

  const handloLogo = (img: string) => {
    formik.setFieldValue('logo', img);
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
          {formik.values.logo !== '' ? (
            <img alt="logo" src={formik.values.logo} width="100px" height="100px" />
          ) : (
            <Avatar getImg={handloLogo} />
          )}
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
        <FormGroup sx={{ marginBottom: '10px' }}>
          <FormControlLabel
            control={
              <Checkbox
                name="currentWorking"
                onChange={formik.handleChange}
                checked={formik.values.currentWorking}
              />
            }
            label="I am currently working in this role"
          />
        </FormGroup>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack direction="row" spacing={2}>
            <MobileDatePicker
              views={['year', 'month']}
              label="Start date*"
              showToolbar={false}
              value={formik.values.startDate}
              onChange={(newValue) => {
                if (newValue) {
                  formik.setFieldValue('startDate', newValue);
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  error={formik.touched.startDate && Boolean(formik.errors.startDate)}
                  helperText={formik.touched.startDate && formik.errors.startDate}
                />
              )}
            />
            <MobileDatePicker
              views={['year', 'month']}
              label="End date*"
              showToolbar={false}
              minDate={formik.values.startDate}
              value={formik.values.endDate}
              onChange={(newValue) => {
                if (newValue) {
                  formik.setFieldValue('endDate', newValue);
                }
              }}
              disabled={formik.values.currentWorking || formik.values.startDate === ''}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  error={formik.touched.endDate && Boolean(formik.errors.endDate)}
                  helperText={formik.touched.endDate && formik.errors.endDate}
                />
              )}
            />
          </Stack>
        </LocalizationProvider>
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
