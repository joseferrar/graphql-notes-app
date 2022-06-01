const Event = require("../../models/event");
const User = require("../../models/user");

module.exports = {
  events: async (_, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    return await Event.find({});
  },

  createEvent: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    const event = new Event({
      title: args.eventInput.title,
      description: args.eventInput.description,
    });
    try {
      await event.save();
      return event;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  deleteEvent: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("You are not authenticated");
    }
    const delEvent = await Event.findByIdAndDelete({
      _id: args.eventId,
    }).exec();
    console.log(delEvent);
    return "event deleted";
  },

  updateEvent: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("You are not authenticated");
    }
    console.log(args);
    return await Event.findByIdAndUpdate(args.eventId, {
      title: args.eventId,
      description: args.eventId,
    });
  },
};
