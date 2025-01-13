// prismaClient.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
module.exports = prisma;


// npx prisma db push --schema=models/prisma/schema.prisma
// npx prisma generate --schema=models/prisma/schema.prisma