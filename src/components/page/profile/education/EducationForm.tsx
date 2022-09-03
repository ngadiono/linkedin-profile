// Vendors
import React, { useState } from 'react';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

// Hooks
import { useAppSelector, useAppDispatch } from '@/hooks/useReactRedux';

// Stores
import { profileEducationAdd, profileEducationUpdate } from '@/store/module/profile/profileSlice';

// Configs
import { ERROR_TEXT } from '@/constants';

export interface Props {
  onCloseDialog: () => void;
}

interface FormValues {
  schoolName: string;
  degree: string;
  fieldOfStudy: string;
  startDate: any;
  endDate: any;
}

const EducationForm: React.FC<Props> = ({ onCloseDialog }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const profileEdit = useAppSelector((state) => state.module.profile.edit);

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      schoolName: profileEdit ? profileEdit.schoolName : '',
      degree: profileEdit ? profileEdit.degree : '',
      fieldOfStudy: profileEdit ? profileEdit.fieldOfStudy : '',
      startDate: profileEdit ? profileEdit.startDate : '',
      endDate: profileEdit ? profileEdit.endDate : '',
    },
    validationSchema: Yup.object({
      schoolName: Yup.string().required(`School name ${ERROR_TEXT}`),
      degree: Yup.string(),
      fieldOfStudy: Yup.string(),
      startDate: Yup.date().required(`Start date education ${ERROR_TEXT}`),
      endDate: Yup.date().required(`End date education ${ERROR_TEXT}`),
    }),
    onSubmit: (values) => {
      const formData = {
        ...values,
        id: uuidv4(),
        startDate: values.startDate.format(),
        endDate: values.endDate.format(),
      };
      setLoading(true);
      const fetchProfile = async () => {
        try {
          const res = await axios.post('/api/profile', values);
          if (res) {
            setLoading(false);

            // Purpose demo only
            if (profileEdit === null) {
              dispatch(profileEducationAdd(formData));
            } else {
              dispatch(profileEducationUpdate({ ...values, id: profileEdit.id }));
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
        if (profileEdit !== null) {
          dispatch(profileEducationUpdate({ ...values, id: profileEdit.id, temp: true }));
        } else {
          dispatch(profileEducationAdd({ ...values, id: uuidv4(), temp: true }));
        }
        onCloseDialog();
      }
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack direction="row" spacing={2}>
            <MobileDatePicker
              views={['year']}
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
                  helperText={<>{formik.touched.startDate && formik.errors.startDate}</>}
                />
              )}
            />
            <MobileDatePicker
              views={['year']}
              label="End date*"
              showToolbar={false}
              minDate={formik.values.startDate}
              value={formik.values.endDate}
              onChange={(newValue) => {
                if (newValue) {
                  formik.setFieldValue('endDate', newValue);
                }
              }}
              disabled={formik.values.startDate === ''}
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  error={formik.touched.endDate && Boolean(formik.errors.endDate)}
                  helperText={<>{formik.touched.endDate && formik.errors.endDate}</>}
                />
              )}
            />
          </Stack>
        </LocalizationProvider>
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
