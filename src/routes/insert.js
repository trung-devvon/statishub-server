const router = require("express").Router();
const fs = require('fs');
const path = require('path');
const { prisma } = require('../config/database'); // Khởi tạo Prisma client
const { removeVietnameseAccents } = require('../utils/fn');

router.post('/', async (req, res) => {
  try {
    // read json
    const filePath = path.join(__dirname, '../data.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileData);

    const companies = data.angiang_93.map(item => ({
      companyName: item.companyName,
      taxCode: item.taxCode,
      address: item.address,
      phoneNumber: item.phoneNumber,
      managementUnit: item.managementUnit,
      companyType: item.companyType,
      status: item.status,
      name_normalized: removeVietnameseAccents(item.companyName),
      address_normalized: removeVietnameseAccents(item.address)
    }));

    await prisma.company.createMany({
      data: companies,
      skipDuplicates: true
    });

    res.status(200).json({ message: 'Companies added successfully!' });
  } catch (error) {
    console.error('Error while inserting data:', error);
    res.status(500).json({ message: 'Error inserting data', error: error.message });
  }
});

module.exports = router;
