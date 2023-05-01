import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import { Page } from '../components/Page/Page';

export const Home = () => {
  return (
    <Page>
      <Typography variant="h5" component="h1">
        Dear user, welcome to Fractal payments demo!
      </Typography>

      <Typography variant="body1" component="p">
        Use navigation bar for <Link to="/new-payment">creating</Link> new payment or{' '}
        <Link to="/payment-history">viewing</Link> payments history
      </Typography>
    </Page>
  );
};
