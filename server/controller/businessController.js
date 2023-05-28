const prisma = require("./client");

const businessHttp = {
    getAllBusiness: async (req, res) => {
        try {
            const businesses = await prisma.businesses.findMany();
            res.json(businesses);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Server Error" });
        }
    },
    createBusiness: async (req, res) => {
        try {
            const { name, location } = req.body;
            const newBusiness = await prisma.businesses.create({
                data: {
                    name,
                    location,
                },
            });
            res.json(newBusiness);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Server Error" });
        }
    },
};

module.exports = businessHttp;
