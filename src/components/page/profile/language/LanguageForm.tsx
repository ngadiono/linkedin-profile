// Vendors
import React, { useState } from 'react';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

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
  const [proficiency, setProficiency] = useState<string>('');
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.module.profile.detail);

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setProficiency(event.target.value as string);
  };

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
        <FormControl fullWidth>
          <InputLabel id="proficiency">Proficiency</InputLabel>
          <Select
            labelId="proficiency"
            id="proficiency"
            onChange={formik.handleChange}
            value={formik.values.proficiency}
            label="Proficiency"
          >
            <MenuItem value="Elementary proficiency">Elementary proficiency</MenuItem>
            <MenuItem value="Limited working proficiency">Limited working proficiency</MenuItem>
            <MenuItem value="Professional working proficiency">Professional working proficiency</MenuItem>
            <MenuItem value="Full professional proficiency">Full professional proficiency</MenuItem>
            <MenuItem value="Native or bilingual proficiency">Native or bilingual proficiency</MenuItem>
          </Select>
        </FormControl>
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
