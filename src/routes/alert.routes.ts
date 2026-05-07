import { Router } from 'express';
import * as alertController from '../controllers/alert.controller';

const router = Router();

router.post('/sos', alertController.triggerAlert);
router.get('/all', alertController.fetchAlerts);

export default router;
