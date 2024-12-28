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
export default router;
