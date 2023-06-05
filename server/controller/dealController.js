const prisma = require("./client");

const dealHttp = {
    getAllDeals: async (req, res) => {
        try {
            const deals = await prisma.deal.findMany();
            res.json(deals);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Problem with server" });
        }
    },
    getDeal: async (req, res) => {
        try {
            const { dealId } = req.params;
            const deal = await prisma.deal.findUnique({
                where: {
                    id: dealId,
                },
            });
            res.json(deal);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Could not get deal." });
        }
    },
    addDeal: async (req, res) => {
        try {
            const {
                title,
                date,
                description,
                price,
                startTime,
                endTime,
                businessId,
            } = req.body;
            const newDeal = await prisma.deal.create({
                data: {
                    title,
                    date,
                    description,
                    price,
                    startTime,
                    endTime,
                    businessId,
                },
            });
            res.json(newDeal);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Could not create new deal, please try again.",
            });
        }
    },
    deleteDeal: async (req, res) => {
        try {
            const { dealId } = req.params;
            await prisma.deal.delete({
                where: {
                    id: dealId,
                },
            });
            res.json({ message: "Deleted deal successfully!" });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Could not delete deal, please try again.",
            });
        }
    },
    updateDeal: async (req, res) => {
        try {
            const { dealId } = req.params;
            const { title, date, description, price, startTime, endTime } =
                req.body;
            const updatedDeal = await prisma.deal.update({
                where: {
                    id: dealId,
                },
                data: {
                    title,
                    date,
                    description,
                    price,
                    startTime,
                    endTime,
                },
            });
            res.json(updatedDeal);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Cannot update deal, please try again!",
            });
        }
    },
};

module.exports = dealHttp;
