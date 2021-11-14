import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FileUpload from '@mui/icons-material/FileUpload';
import { Home } from './features/home/Home';
import { Upload } from './features/upload/Upload';
import './App.css';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
       <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/upload">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label={t('aria_nav_upload')}
                sx={{ mr: 2 }}

              >
                <FileUpload />
              </IconButton>
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {t('app_name')}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
}

export default App;
