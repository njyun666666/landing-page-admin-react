import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
// material
import { CssBaseline, ThemeOptions } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import palette from './palette';
import typography from './typography';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeOptions: ThemeOptions = useMemo(
    () =>
      ({
        palette,
        shape: { borderRadius: 8 },
        typography,
        shadows,
        customShadows,
      } as unknown as ThemeOptions),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
