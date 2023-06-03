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
    getSingleBusiness: async (req, res) => {
        try {
            const { businessId } = req.params;
            const business = await prisma.businesses.findUnique({
                where: {
                    id: businessId,
                },
                include: {
                    deals: true,
                },
            });
            res.json(business);
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Couldn't find business." });
        }
    },
    deleteBusiness: async (req, res) => {
        try {
            const { businessId } = req.params;
            await prisma.businesses.delete({
                where: {
                    id: businessId,
                },
            });
            res.json({ message: "Successfully deleted business!" });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Could not delete Business, please try again.",
            });
        }
    },
};

module.exports = businessHttp;
