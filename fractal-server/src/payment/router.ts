import { Router } from 'express';
import { createPayment, listPayments } from './paymentStorage';

const paymentRouter = Router();

paymentRouter.post('/', async (req, res, next) => {
  try {
    const id = await createPayment({
      userId: res.locals.userId,
      ...req.body,
    });
    return res.status(200).send({ id });
  } catch (err) {
    next(err);
  }
});

paymentRouter.get('/list', async (_req, res, next) => {
  try {
    const items = await listPayments(res.locals.userId);
    return res.status(200).send(items);
  } catch (err) {
    next(err);
  }
});

export default paymentRouter;
