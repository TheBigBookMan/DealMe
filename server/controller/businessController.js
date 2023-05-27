import prisma from "./client";

export default {
    getAllBusiness: async (req, res) => {
        try {
            const businesses = await prisma.businesses.findMany();
            res.json(businesses);
        } catch (err) {
            console.log(err);
        }
    },
    createBusiness: async (req, res) => {
        try {
            const { title, location } = req.body;
            const newBusiness = await prisma.businesses.create({
                data: {
                    title,
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
