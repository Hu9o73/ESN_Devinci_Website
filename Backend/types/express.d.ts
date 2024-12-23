// types/express.d.ts
import User from '../src/models/users';  // Import your User model type if applicable

declare global {
    namespace Express {
        interface Request {
            user?: User;  // This is where you'll store the JWT user data
        }
    }
}
