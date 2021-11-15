import React, { MutableRefObject, SyntheticEvent } from 'react';
import { useTranslation } from "react-i18next";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { LoginRequest, useLoginMutation } from './authAPI';

import styles from './Login.module.css';

const Alert = React.forwardRef(function Alert(props: AlertProps, ref: MutableRefObject<any> | ((instance: any) => void) | null) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function Login() {
  const { t } = useTranslation();

  const [formState, setFormState] = React.useState<LoginRequest>({
    username: '',
    password: '',
  })
  const [errorOpen, setErrorOpen] = React.useState(false);
  const [login, { isLoading }] = useLoginMutation()

  const handleFormChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }))

  const handleLogin = async () => {
    // TODO add more validation
    if (formState.username.trim() && formState.password.trim()) {
      try {
        await login(formState).unwrap()
      } catch (err) {
        setErrorOpen(true)
      }
    }
  }

  const handleErrorClose = (event: SyntheticEvent<Element, Event>, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setErrorOpen(false);
  };

  return <Box className={styles.container}>
    <Paper elevation={3} className={styles.contents}>
      <Box
        component="form"
        className={styles.loginForm}
      >
        <Typography
          variant="h6"
          component="div"
          className={styles.item}
        >
          {t('app_name')}
        </Typography>
        <TextField
          label={ t('username') }
          onChange={ handleFormChange }
          variant="outlined"
          name="username"
          className={styles.item}
          required
        />
        <TextField
          label={ t('password') }
          onChange={ handleFormChange }
          variant="outlined"
          name="password"
          className={styles.item}
          type="password"
          required
        />
        <Button
          variant="contained"
          onClick={handleLogin}
          disabled={isLoading}
          className={styles.item}
        >
          { !isLoading ? t('login') : <CircularProgress /> }
        </Button>
      </Box>
      <Snackbar open={errorOpen} autoHideDuration={6000} onClose={handleErrorClose}>
        <Alert onClose={handleErrorClose} severity="error" sx={{ width: '100%' }}>
          An unknown error occurred logging in.
        </Alert>
      </Snackbar>
    </Paper>
  </Box>
}
