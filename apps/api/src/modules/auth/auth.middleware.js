import jwt from 'jsonwebtoken'; 
import redisClient from '../../db/redis.js';
export const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Authentication required",
            });
        }
        // Check if the token is blacklisted
        const blackListedToken = await redisClient.get(token);
        if (blackListedToken) {
            return res.status(401).json({ message: "Token has been invalidated" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch(error) {
       if(error.name === 'TokenExpiredError') {
         return res.status(401).json({ message: 'Token expired, please login again' });
       }
       if(error.name === 'JsonWebTokenError') {
         return res.status(401).json({ message: 'Invalid token' });
       }
       console.error('Error in authentication middleware:', error.message);
       res.status(500).json({ message: 'Internal server error' });
     }
};