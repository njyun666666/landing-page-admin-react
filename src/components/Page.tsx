import { Helmet } from 'react-helmet-async';
import React, { forwardRef } from 'react';
// @mui
import { Box } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { useTranslation } from 'react-i18next';

// ----------------------------------------------------------------------

const Page = forwardRef(
  (
    { children, title = '', meta, ...other }: { children: React.ReactNode; title: string; meta?: React.ReactNode },
    ref
  ) => {
    const { t } = useTranslation();

    return (
      <>
        <Helmet>
          <title>{`${title} | ${t('web_site_title')}`}</title>
          {meta}
        </Helmet>

        <SnackbarProvider autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
          <Box ref={ref} {...other}>
            {children}
          </Box>
        </SnackbarProvider>
      </>
    );
  }
);

export default Page;
