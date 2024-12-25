import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

require('dotenv').config();
const SECRET_KEY = process.env.JWT_SECRET || 'default_secret_key'; // Store it in an environment variable
  
// Middleware to verify JWT token
export const authenticate = (req: Request & { user?: any }, res: Response, next: NextFunction) => {
    
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


// Middleware to verify roles
export const authorizeRoles = (allowedRoles: string[]) => {
  return (req: Request & { user?: any }, res: Response, next: NextFunction) => {
    const user = req.user;

    if (!user || !allowedRoles.includes(user.role)){
      res.status(403).json({error: "Access denied. Insufficient permissions."});
      return;
    }

    next();
  }
}

export default authenticate;