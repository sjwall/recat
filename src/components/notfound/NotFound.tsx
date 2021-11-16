import React from 'react';
import { Translation } from 'react-i18next';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import styles from './NotFound.module.css';

/**
 * 404 Not Found page
 *
 * @returns React component.
 */
export function NotFound() {
  return <Box className={styles.container}>
    <Paper elevation={3} className={styles.contents}>
        <Typography
          variant="h6"
          component="div"
          className={styles.item}
        >
          <Translation>
            {(t) => t('not_found')}
          </Translation>
        </Typography>
    </Paper>
  </Box>
}
