// icons
import { Icon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';
// eslint-disable-next-line
import { IconifyProps } from 'src/types/iconify';

// ----------------------------------------------------------------------

export default function Iconify(props: IconifyProps) {
  return <Box component={Icon} {...props} />;
}
