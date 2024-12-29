import { Router, Request, Response } from "express";
import { addEvent } from "../EventController/eventCreator";
import {
  authenticate,
  authorizeRoles,
} from "../AuthenticationControllers/authMiddleware";
import { Event } from "../../ConfigFiles/dbAssociations";

const router = Router();

router.post(
  "/addEvent",
  authenticate,
  authorizeRoles([
    "Admin",
    "President",
    "Vice-President",
    "Tresorier",
    "Responsable",
  ]),
  addEvent
);

router.get("/getEvents", async (req, res) => {
  try {
    const events = await Event.findAll({ where: { active: true } });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch events." });
  }
});


// Route to set the event as inactive
router.put("/events/:id/inactivate",
  authenticate,
  authorizeRoles([
    "Admin",
    "President",
    "Vice-President",
    "Tresorier",
    "Responsable",
  ]), 
  async (req: Request & { user?: any }, res: Response) => {
  const eventId = req.params.id;

  try {
    const event = await Event.findByPk(eventId);

    if (!event) {
      res.status(404).json({ message: 'Event not found' });
      return;
    }

    event.active = false;
    await event.save();  // Save the changes to the database

    res.status(200).json({ message: 'Event set to inactive', event });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
    return;
  }
});


export default router;
