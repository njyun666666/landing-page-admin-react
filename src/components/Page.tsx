import { Helmet } from 'react-helmet-async';
import React, { forwardRef } from 'react';
// @mui
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Page = forwardRef(
  (
    { children, title = '', meta, ...other }: { children: React.ReactNode; title: string; meta?: React.ReactNode },
    ref
  ) => (
    <>
      <Helmet>
        <title>{`${title} | Minimal-UI`}</title>
        {meta}
      </Helmet>

      <Box ref={ref} {...other}>
        {children}
      </Box>
    </>
  )
);

export default Page;
