import React, { ChangeEvent } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import styles from './Upload.module.css';

/**
 * Page that displays input fields for uploading a Cat image.
 *
 * @returns React component.
 */
export function Upload() {
  const { t } = useTranslation();

  // Component state
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [subId, setSubId] = React.useState('');

  // Component state changers
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleSubIDChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSubId(event.target.value);
  };

  return (
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
          id="component-outlined"
          value={selectedFile}
          onChange={handleFileChange}
          type="file"
        />
      </FormControl>
      <FormControl className={styles.uploadItem}>
        <InputLabel htmlFor="component-outlined">{t('upload_input_subid')}</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={subId}
          onChange={handleSubIDChange}
          label={t('upload_input_subid')}
        />
      </FormControl>
      <Stack spacing={2} direction="row" className={styles.actions}>
        <Link to="/">
          <Button variant="text">{t('cancel')}</Button>
        </Link>
        <Button variant="contained">{t('upload_button')}</Button>
      </Stack>
    </Box>
  );
}
