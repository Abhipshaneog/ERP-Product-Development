const bcrypt = require('bcryptjs');
const prisma = require('../../models/prisma/prismaClient'); // Prisma client initialization
const { generateTokens } = require('../../utils/tokenUtils');

// Service to handle user login
const loginService = async (email, password) => {
  // Fetch the user from the database
  const user = await prisma.user.findUnique({
    where: { email },
  });
  console.log(user);
  if (!user) {
    throw new Error('User not found');
  }

  // Compare the provided password with the stored hash
  let isPasswordValid;
  if(user.passwordHash)isPasswordValid = await bcrypt.compare(password, user.passwordHash);

  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  // Generate access and refresh tokens
  const { accessToken, refreshToken } = generateTokens(user.id);

  // Store the refresh token in the `RefreshToken` table
  await prisma.refreshToken.create({
    data: {
      token: refreshToken, // You may hash this before storing for added security
      userId: user.id,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days expiration
    },
  });

  return { accessToken, refreshToken };
};

module.exports = { loginService };
