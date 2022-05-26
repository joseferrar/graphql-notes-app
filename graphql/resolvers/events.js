const Event = require("../../models/event");
const User = require("../../models/user");

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map((event) => {
        return transformEvent(event);
      });
    } catch (err) {
      throw err;
    }
  },
  createEvent: async (args, req) => {
    if (!req.isAuth) {
      throw new Error("Unauthenticated!");
    }
    const event = new Event({
      title: args.eventInput.title,
      description: args.eventInput.description,
      price: +args.eventInput.price,
      date: new Date(args.eventInput.date),
      creator: req.userId,
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
    if(!req.isAuth) {
      throw new Error('You are not authenticated')
    } 
    const delEvent = await Event.findByIdAndDelete({ _id: args.eventId }).exec();
    console.log(delEvent)
    return "event deleted";
  },
};
