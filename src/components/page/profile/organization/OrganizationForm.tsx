// Vendors
import React, { useState } from 'react';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';

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
  const [valueStartDate, setValueStartDate] = useState<Dayjs | null>(dayjs());
  const [valueEndDate, setValueEndDate] = useState<Dayjs | null>(dayjs());
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
        <FormGroup sx={{ marginBottom: '10px' }}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Membership ongoing" />
        </FormGroup>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack direction="row" spacing={2}>
            <DatePicker
              views={['year', 'month']}
              label="Start date*"
              minDate={dayjs('2012-03-01')}
              maxDate={dayjs('2023-06-01')}
              value={valueStartDate}
              onChange={(newValue) => {
                setValueStartDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} helperText={null} fullWidth />}
            />
            <DatePicker
              views={['year', 'month']}
              label="End date*"
              minDate={dayjs('2012-03-01')}
              maxDate={dayjs('2023-06-01')}
              value={valueEndDate}
              onChange={(newValue) => {
                setValueEndDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} helperText={null} fullWidth />}
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

export default OrganizationForm;
