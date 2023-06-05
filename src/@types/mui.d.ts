// https://mui.com/material-ui/customization/theming/#custom-variables
import { Color } from '@mui/material';
import { Theme, Palette } from '@mui/material/styles';

declare module '@mui/material' {
  interface Color {
    0: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    500_8: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_80: string;
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: {
      z1: string;
      z8: string;
      z12: string;
      z16: string;
      z20: string;
      z24: string;
      primary: string;
      secondary: string;
      info: string;
      success: string;
      warning: string;
      error: string;
    };
  }

  interface Palette {
    [key: string]: any;
  }
}
