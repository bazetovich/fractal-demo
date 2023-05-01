import mongoose from 'mongoose';

enum Fields {
  UserId = 'userId',
  Name = 'name',
  Email = 'email',
  Amount = 'amount',
}

export type PaymentModelT = {
  [Fields.UserId]: string;
  [Fields.Name]: string;
  [Fields.Email]: string;
  [Fields.Amount]: string;
};

export const jsonSchema = {
  type: 'object',
  required: [Fields.UserId, Fields.Name, Fields.Amount, Fields.Email],
  properties: {
    [Fields.UserId]: { type: 'string' },
    [Fields.Name]: { type: 'string' },
    [Fields.Email]: { type: 'string' },
    [Fields.Amount]: { type: 'string' },
  },
};

const paymentSchema = new mongoose.Schema({
  [Fields.UserId]: {
    type: String,
    required: true,
  },
  [Fields.Name]: {
    type: String,
    required: true,
  },
  [Fields.Email]: {
    type: String,
    required: true,
  },
  [Fields.Amount]: {
    // @ts-ignore
    type: mongoose.Decimal128,
    required: true,
  },
});

export const PaymentModel = mongoose.model<PaymentModelT>('payments', paymentSchema);
