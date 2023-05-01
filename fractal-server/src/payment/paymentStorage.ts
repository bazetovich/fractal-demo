import mongoose from 'mongoose';
import Big from 'big.js';
import httpErrors from 'http-errors';
import { Validator } from 'jsonschema';
import { PaymentModel, PaymentModelT, jsonSchema } from './paymentModel';

const LIST_LIMIT = 50;

export const createPayment = async (data: Record<string, string>): Promise<string> => {
  var validator = new Validator();

  const validity = validator.validate(data, jsonSchema, {
    throwError: false,
  });

  if (!validity.valid) {
    throw new httpErrors.BadRequest();
  }

  try {
    // Validate if string representation of number is a valid number
    new Big(data.amount);
  } catch {
    throw new httpErrors.BadRequest('Amount is not valid');
  }

  const payment = new PaymentModel({
    ...data,
    // @ts-ignore
    amount: mongoose.Types.Decimal128.fromString(data.amount),
  });
  const newPayment = await payment.save();
  return newPayment._id;
};

export const listPayments = async (userId: string, skip = 0): Promise<PaymentModelT[]> => {
  const items = await PaymentModel.find({ userId }, null, { skip, limit: LIST_LIMIT });
  return items.map(({ userId, name, amount, email }) => ({
    userId,
    name,
    amount: amount.toString(),
    email,
  }));
};
