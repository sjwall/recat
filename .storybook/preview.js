import React, { useMemo } from "react";
import { addDecorator } from '@storybook/react';
import { ThemeProvider, createTheme  } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((Story, context) => {
  const mode = context.globals?.muiMode;
  const theme = useMemo(() => createTheme({
    palette: {
      mode, // for v5
    }
  }), [mode])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider >
  )
})
