const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkDatabaseConnection() {
    try {
      await prisma.$connect();
      console.log('Kết nối đến cơ sở dữ liệu thành công.');
    } catch (error) {
      console.error('Lỗi kết nối đến cơ sở dữ liệu:', error);
      console.log(process.env.DATABASE_URL || 'Not found db url')
      process.exit(1);
    }
  }

module.exports = { prisma, checkDatabaseConnection };
