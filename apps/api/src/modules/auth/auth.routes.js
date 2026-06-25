import router from 'express';
import { registerUser } from './auth.controller.js';
import { registerValidation } from './auth.validation.js';

const authRouter = router();
/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post('/register',registerValidation, registerUser);

export default authRouter;