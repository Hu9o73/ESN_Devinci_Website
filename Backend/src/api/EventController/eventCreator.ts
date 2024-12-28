import { Request, Response } from "express";
import { Event } from "../../ConfigFiles/dbAssociations";

export const addEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { author, title, category, description, imageLink } = req.body;

    // No need to check for duplicate as we may have 2 events with the same name.

    // Create new event
    const event = await Event.create({
      title,
      category,
      description,
      author,
      imageLink,
    });

    res
      .status(201)
      .json({ message: "Event created successfully", event: event.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating event" });
  }
};
