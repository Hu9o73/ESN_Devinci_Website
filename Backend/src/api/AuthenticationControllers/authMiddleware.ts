import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key'; // Store it in an environment variable

interface CustomRequest extends Request {
    user?: any;
  }
  
  // Middleware to verify JWT token
  const authenticate = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from Authorization header
  
    if (!token) {
        res.status(401).send({ message: 'No token provided.' });
        return
    }
  
    try {
      // Verify the token
      const decoded = jwt.verify(token, SECRET_KEY) as { userId: number }; // The payload can contain user info, e.g., userId
      req.user = decoded; // Attach the user info to the request object (userId)
      next(); // Continue to the next middleware or route handler
    } catch (error) {
        res.status(401).send({ message: 'Invalid token.' });
        return
    }
  };
  
  export default authenticate;
