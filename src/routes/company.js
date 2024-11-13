const router = require("express").Router();
const { prisma } = require('../config/database');

router.get('/search', async (req, res) => {
    try {
        const { keyword } = req.query;

        if (!keyword) {
            return res.status(400).json({ message: "Keyword is required" });
        }

        const companies = await prisma.company.findMany({
            where: {
                OR: [
                    { taxCode: { contains: keyword, mode: "insensitive" } },
                    { phoneNumber: { contains: keyword, mode: "insensitive" } },
                    { name_normalized: { contains: keyword, mode: "insensitive" } }
                ]
            },
            take: 10
        });

        if (companies.length === 0) {
            return res.status(404).json({ message: "No companies found matching the keyword" });
        }

        res.status(200).json(companies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while searching for companies" });
    }
});

module.exports = router;
