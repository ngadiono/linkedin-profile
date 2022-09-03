// Vendors
import React, { useState } from 'react';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

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
  skill: any;
}

const options = [
  { title: 'HTML' },
  { title: 'CSS' },
  { title: 'Javascript' },
  { title: 'React' },
  { title: 'Redux' },
  { title: 'Next.js' },
  { title: 'Vue.js' },
  { title: 'Angular' },
  { title: 'Node.js' },
  { title: 'Mongodb' },
];

const SkillForm: React.FC<Props> = ({ onCloseDialog }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.module.profile.detail);

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      skill: profile?.organizationName,
    },
    validationSchema: Yup.object({
      skill: Yup.string().required(`School name ${ERROR_TEXT}`),
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
        <Autocomplete
          multiple
          limitTags={2}
          id="multiple-limit-tags"
          options={options}
          getOptionLabel={(option: any) => option.title}
          // defaultValue={profile?.skills}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Skills*"
              placeholder="Another skills"
              name="skill"
              onChange={formik.handleChange}
              value={formik.values.skill}
              error={formik.touched.skill && Boolean(formik.errors.skill)}
              helperText={<>{formik.touched.skill && formik.errors.skill}</>}
            />
          )}
          sx={{ width: '100%' }}
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

export default SkillForm;
