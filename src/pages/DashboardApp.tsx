// @mui
import { useTheme } from '@mui/material/styles';
import { Button, Container } from '@mui/material';
// components
import Page from '../components/Page';
import { loginAPI } from 'src/services/login';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  const btnClick = async () => {
    let r = await loginAPI.test();
    console.log(r.data);
  };

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Button onClick={btnClick}>test</Button>
      </Container>
    </Page>
  );
}
