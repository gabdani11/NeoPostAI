import jwt from 'jsonwebtoken'; 
export const authenticate = (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                message: "Authentication required",
            });
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
       res.status(500).json({ message: 'Internal server error' });
     }
};