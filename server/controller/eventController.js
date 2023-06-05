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
};

module.exports = eventHttp;
