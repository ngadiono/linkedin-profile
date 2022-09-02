// Vendors
import React, { useState } from 'react';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Avatar from 'react-avatar-upload';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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
  const [valueStartDate, setValueStartDate] = useState<Dayjs | null>(dayjs());
  const [valueEndDate, setValueEndDate] = useState<Dayjs | null>(dayjs());
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
        <FormGroup sx={{ marginBottom: '10px' }}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="I am currently working in this role"
          />
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
