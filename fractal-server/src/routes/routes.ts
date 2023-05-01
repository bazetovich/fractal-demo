import { Router } from 'express';
import paymentRouter from '../payment/router';
import { verifyToken } from '../authentication/verifyToken';

const router = Router();

router.use(verifyToken);
router.use('/payment', paymentRouter);

export default router;
