import User from "../models/users";
import Event from "../models/events";

User.hasMany(Event, { foreignKey: "author" });
Event.belongsTo(User, { foreignKey: "author" });

export { User, Event };
