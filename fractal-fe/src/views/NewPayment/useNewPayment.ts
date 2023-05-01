import { useState } from 'react';
import { useMutation } from 'react-query';
import { createNewPayment } from '../../utils/api';

type FormState = {
  name?: string;
  email?: string;
  amount?: string;
};

export const useNewPayment = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [formState, setFormState] = useState<FormState>({});

  const newPaymentMutation = useMutation('new-payment', createNewPayment);

  const _getFormErrors = (): string[] => {
    const res = [];
    if (formState.amount === undefined || formState.email === undefined || formState.name === undefined) {
      res.push('Please fill required values');
    }
    return res;
  };

  const _onFormValueChange = (type: 'name' | 'email' | 'amount', value: string) => {
    if (errors.length) {
      setErrors([]);
    }

    if (newPaymentMutation.isSuccess) {
      newPaymentMutation.reset();
    }

    setFormState({
      ...formState,
      [type]: value,
    });
  };

  const _handleFormReset = () => {
    setErrors([]);
    setFormState({});
  };

  const _handleSubmit = () => {
    const errors = _getFormErrors();
    if (errors.length) {
      setErrors(errors);
      return;
    }

    newPaymentMutation.mutateAsync(formState).then(() => _handleFormReset());
  };

  return {
    formState,
    createPayment: _handleSubmit,
    onFormValueChange: _onFormValueChange,
    isSubmitting: newPaymentMutation.isLoading,
    isSuccess: newPaymentMutation.isSuccess,
    errors,
  };
};
