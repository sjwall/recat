import React, { ReactNode } from 'react'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FileUpload from '@mui/icons-material/FileUpload';
import ExitToApp from '@mui/icons-material/ExitToApp';
import { User } from '../../features/auth/user.model';

export type AppPageProps = {
  children: ReactNode
  title: string
  user: User
}

export function AppPage({ children, title, user }: AppPageProps) {
  const { t } = useTranslation();

  return <>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/upload">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label={ t('aria_nav_upload') }
              sx={{ mr: 2 }}

            >
              <FileUpload />
            </IconButton>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            { title }
            &nbsp;-&nbsp;
            { user.name }
          </Typography>
          <Link to="/logout">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label={ t('aria_nav_upload') }
              sx={{ mr: 2 }}

            >
              <ExitToApp />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
    { children }
  </>
}
