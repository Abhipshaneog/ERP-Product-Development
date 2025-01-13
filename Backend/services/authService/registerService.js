const bcrypt = require("bcryptjs");
const prisma = require("../../models/prisma/prismaClient"); // Prisma client initialization
const { generateTokens } = require("../../utils/tokenUtils");

// Service function for user registration
const registerUser = async ({ name, email, password }) => {
  try {
    // Check if the email is already registered
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("Email is already registered");
    }

    // Hash the password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create the user in the database
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        role: "user", // Default role
        lastLogin: new Date(), // Set the current date and time
      },
    });

    // Generate access and refresh tokens
    const { accessToken, refreshToken } = generateTokens(newUser.id);

    // Store the refresh token in the `RefreshToken` table
    await prisma.refreshToken.create({
      data: {
        token: refreshToken, // Optionally hash this for added security
        userId: newUser.id,
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days expiration
      },
    });

    return { accessToken, refreshToken };
  } catch (err) {
    throw new Error(err.message || "Error during registration");
  }
};

module.exports = { registerUser };
