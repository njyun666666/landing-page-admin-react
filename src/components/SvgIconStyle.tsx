import { Box, BoxProps, SxProps, Theme } from '@mui/material';

// ----------------------------------------------------------------------

export interface BoxSpanProps extends BoxProps {
  src: string;
  sx?: SxProps<Theme>;
}

export default function SvgIconStyle({ src, sx }: BoxSpanProps) {
  return (
    <Box
      component="span"
      sx={{
        width: 24,
        height: 24,
        display: 'inline-block',
        bgcolor: 'currentColor',
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}
    />
  );
}
