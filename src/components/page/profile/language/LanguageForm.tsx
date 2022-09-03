// Vendors
import React, { useState } from 'react';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
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
import { profileLanguageAdd, profileLanguageUpdate } from '@/store/module/profile/profileSlice';

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
  const profileEdit = useAppSelector((state) => state.module.profile.edit);

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setProficiency(event.target.value as string);
  };

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: {
      language: profileEdit ? profileEdit.language : '',
      proficiency: profileEdit ? profileEdit.proficiency : '',
    },
    validationSchema: Yup.object({
      language: Yup.string().required(`Language ${ERROR_TEXT}`),
      proficiency: Yup.string(),
    }),
    onSubmit: (values) => {
      const formData = {
        ...values,
        id: uuidv4(),
      };
      setLoading(true);
      const fetchProfile = async () => {
        try {
          const res = await axios.put('/api/profile', values);
          if (res) {
            setLoading(false);

            // Purpose demo only
            if (profileEdit === null) {
              dispatch(profileLanguageAdd(formData));
            } else {
              dispatch(profileLanguageUpdate({ ...values, id: profileEdit.id }));
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
          dispatch(profileLanguageUpdate({ ...values, id: profileEdit.id, temp: true }));
        } else {
          dispatch(profileLanguageAdd({ ...values, id: uuidv4(), temp: true }));
        }
        onCloseDialog();
      }
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
            name="proficiency"
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
