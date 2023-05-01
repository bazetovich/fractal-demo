import React from 'react';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Page } from '../../components/Page/Page';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import PaymentsIcon from '@mui/icons-material/Payments';
import { useNewPayment } from './useNewPayment';

export const NewPayment = () => {
  const { errors, isSubmitting, formState, isSuccess, createPayment, onFormValueChange } = useNewPayment();

  const handleNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onFormValueChange('name', evt.target.value);
  };
  const handleEmailChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onFormValueChange('email', evt.target.value);
  };
  const handleAmountChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    onFormValueChange('amount', evt.target.value);
  };

  const _renderFormError = () => {
    return errors.length ? (
      <Box marginTop={2}>
        <Alert severity="error">
          {errors.map((err) => (
            <>
              {err}
              <br />
            </>
          ))}
        </Alert>
      </Box>
    ) : null;
  };

  const _renderFormSuccess = () => {
    return isSuccess ? (
      <Box marginTop={2}>
        <Alert severity="success">Payment was created successfully</Alert>
      </Box>
    ) : null;
  };

  return (
    <Page>
      <Typography variant="h5" component="h1">
        New payment form
      </Typography>

      <Typography variant="body1" component="p">
        Submit the form below in order to create new payment
      </Typography>

      {_renderFormError()}

      {_renderFormSuccess()}

      <Box marginTop={4} component="form" noValidate autoComplete="off">
        <Box marginBottom={2}>
          <TextFieldStyled
            value={formState.name || ''}
            onChange={handleNameChange}
            disabled={isSubmitting}
            required
            label="Payee's name"
            variant="outlined"
          />
        </Box>
        <Box marginBottom={2}>
          <TextFieldStyled
            value={formState.email || ''}
            onChange={handleEmailChange}
            disabled={isSubmitting}
            required
            label="Email address"
            variant="outlined"
          />
        </Box>
        <Box marginBottom={2}>
          <TextFieldStyled
            value={formState.amount || ''}
            onChange={handleAmountChange}
            disabled={isSubmitting}
            type="number"
            required
            label="Payment amount"
            variant="outlined"
          />
        </Box>
        <Box>
          <Button
            onClick={createPayment}
            disabled={isSubmitting}
            endIcon={<PaymentsIcon />}
            color="success"
            variant="contained"
          >
            Create new payment
          </Button>
        </Box>
      </Box>
    </Page>
  );
};

const TextFieldStyled = styled(TextField)`
  width: 420px;
`;
