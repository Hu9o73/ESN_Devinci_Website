import { Router, Request, Response } from 'express'
import authenticate from './AuthenticationControllers/authMiddleware';

const router = Router()


router.get("/", (req: Request, res: Response) => {
    res.send("ESN Website Server");
});

router.get('/api/liveness', (req: Request, res: Response) => {
    const answer = "API is alive."
    res.json(answer);
})

router.get('/protected', authenticate, (req: Request & { user?: any }, res: Response) => {
    res.json({
        message: 'This is a protected route',
        user: req.user
    });
});

export default router;