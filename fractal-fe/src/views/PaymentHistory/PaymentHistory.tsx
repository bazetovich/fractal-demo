import { useQuery } from 'react-query';
import { Page } from '../../components/Page/Page';
import { getPayments } from '../../utils/api';
import { AxiosResponse } from 'axios';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

export const PaymentHistory = () => {
  const payments = useQuery<any, any, AxiosResponse<{ amount: string; email: string; name: string }[]>>(
    'payments',
    getPayments
  );

  return (
    <Page>
      <Typography marginBottom={2} variant="h5" component="h1">
        Payment history
      </Typography>

      {payments.isLoading ? (
        <CircularProgress color="inherit" />
      ) : (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments.data?.data.length ? (
                payments.data?.data.map(({ name, email, amount }) => {
                  return (
                    <TableRow key={email}>
                      <TableCell component="th" scope="row">
                        {name}
                      </TableCell>
                      <TableCell align="right">{email}</TableCell>
                      <TableCell align="right">{amount}</TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <Box padding={2}>No payments</Box>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Page>
  );
};
