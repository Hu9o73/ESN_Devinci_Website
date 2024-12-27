import { Router, Request, Response } from 'express'
import { authenticate, authorizeRoles } from './AuthenticationControllers/authMiddleware';
import User from '../models/users';

const router = Router();

router.put('/modifyRole',
    authenticate,
    authorizeRoles(["President", "Admin"]),
    async (req: Request & { user?: any }, res: Response) => {
        try {
            const { idToUpdate, roleToUpdate } = req.body;

            if (!idToUpdate || !roleToUpdate) {
                res.status(400).json({ error: "Id and Role are required !" });
                return;
            }

            const userToUpdate = await User.findOne({ where: { id: idToUpdate } });

            if (!userToUpdate) {
                res.status(404).json({ error: "User to update not found !" });
                return;
            } else {
                userToUpdate.role = roleToUpdate;
                await userToUpdate.save();
                res.status(200).json({ message: "User " + userToUpdate.email + " with id " + userToUpdate.id + " successfuly update to have role: " + userToUpdate.role });
                return;
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "An error occured while updating the role." });
            return;
        }
    });

export default router;