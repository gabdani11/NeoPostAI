import { Router } from 'express';
import { authenticate } from './auth.middleware.js';
import { registerUser, loginUser, getMe } from './auth.controller.js';
import { registerValidation, loginValidation } from './auth.validation.js';


const authRouter = Router();
/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post('/register',registerValidation, registerUser);

/**
 * @route POST /api/auth/login
 * @desc Login a user
 * @access Public
 */
authRouter.post('/login', loginValidation, loginUser);

/**
 * @route GET /api/auth/me
 * @desc Get current user
 * @access Private
 */
authRouter.get('/me', authenticate, getMe);

export default authRouter;