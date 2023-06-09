const prisma = require("./client");

const eventHttp = {
    getAllEvents: async (req, res) => {
        try {
            const events = await prisma.event.findMany();
            res.json(events);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Could not retrieve events, please try again.",
            });
        }
    },
    getEvent: async (req, res) => {
        try {
            const { eventId } = req.params;
            const event = await prisma.event.findUnique({
                where: {
                    id: eventId,
                },
            });
            res.json(event);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Could not get event, please try again.",
            });
        }
    },
    addEvent: async (req, res) => {
        try {
            const {
                title,
                date,
                description,
                price,
                startTime,
                endTime,
                location,
                capacity,
                businessId,
            } = req.body;
            const addedEvent = await prisma.event.create({
                data: {
                    title,
                    date,
                    description,
                    price,
                    startTime,
                    endTime,
                    location,
                    capacity,
                    businessId,
                },
            });
            res.json(addedEvent);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Could not create event, please try again.",
            });
        }
    },
    deleteEvent: async (req, res) => {
        try {
            const { eventId } = req.params;
            await prisma.event.delete({
                where: {
                    id: eventId,
                },
            });
            res.json({ message: "Event deleted successfully!" });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Could not delete event, please try again.",
            });
        }
    },
    updateEvent: async (req, res) => {
        try {
            const { eventId } = req.params;
            const {
                title,
                date,
                description,
                price,
                startTime,
                endTime,
                location,
                capacity,
            } = req.body;
            const updatedEvent = await prisma.event.update({
                where: {
                    id: eventId,
                },
                data: {
                    title,
                    date,
                    description,
                    price,
                    startTime,
                    endTime,
                    location,
                    capacity,
                },
            });
            res.json(updatedEvent);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Could not update event, please try again.",
            });
        }
    },
};

module.exports = eventHttp;
