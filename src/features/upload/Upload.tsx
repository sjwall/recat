import React, { useRef } from 'react';
import { useTranslation } from "react-i18next";
import { Link, Navigate } from "react-router-dom";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import styles from './Upload.module.css';
import { AppPage } from '../../components/apppage/AppPage';
import { useAppSelector, useAuth } from '../../app/hooks';
import { User } from '../auth/user.model';
import { useAddCatMutation } from '../thecatapi/thecatapiAPI';

/**
 * Page that displays input fields for uploading a Cat image.
 *
 * @returns React component.
 */
export function Upload() {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Component state
  const user = useAppSelector(useAuth).user as User;
  const [uploadCat, { error, isLoading, isSuccess }] = useAddCatMutation()

  const handleUploadClick = () => {
    if (inputRef.current !== null && inputRef.current.files !== null) {
      const formData = new FormData();
      formData.append('file', inputRef.current.files[0]);
      uploadCat(formData);
    }
  }

  return (
    <AppPage title={ t('upload') } user={user}>
      { isSuccess ? <Navigate to="/" /> : <></>}
      <Box sx={{ width: '100%' }}
        className={styles.contents}
        component="form"
        autoComplete="off"
      >
        <Typography variant="subtitle1" gutterBottom component="div" className={styles.uploadItem}>
          {t('upload_heading')}
        </Typography>
        <FormControl className={styles.uploadItem}>
          <OutlinedInput
            inputRef={inputRef}
            disabled={isLoading}
            type="file"
          />
        </FormControl>
        { error ? <Typography>{error}</Typography> : <></> }
        <Stack spacing={2} direction="row" className={styles.actions}>
          <Link to="/">
            <Button variant="text" disabled={isLoading}>{t('cancel')}</Button>
          </Link>
          <Button variant="contained" disabled={isLoading} onClick={handleUploadClick}>
            {
              isLoading
              ? <CircularProgress />
              : t('upload_button')
            }
          </Button>
        </Stack>
      </Box>
    </AppPage>
  );
}
