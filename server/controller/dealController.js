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
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Could not get deal." });
        }
    },
};

module.exports = dealHttp;
