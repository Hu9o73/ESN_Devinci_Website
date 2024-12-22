import express, {Router, Request, Response} from 'express'
import sequelize from '../ConfigFiles/dbConfig';

const router = Router()


router.get("/", (req: Request, res: Response) => {
    res.send("ESN Website Server");
});
  
router.get('/api/liveness', (req: Request, res: Response) =>{
    const answer = "API is alive."
    res.json(answer);
})

export default router;