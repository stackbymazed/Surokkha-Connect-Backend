import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const router = Router();

// Firebase login-এর পর user DB-তে save করা
router.post('/register', userController.register);

// User profile দেখা
router.get('/profile/:email', userController.getUserProfile);

export default router;
