// @mui
import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl"></Container>
    </Page>
  );
}
