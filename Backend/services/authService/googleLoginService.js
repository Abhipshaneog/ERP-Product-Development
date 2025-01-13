const { OAuth2Client } = require('google-auth-library');
const prisma = require("../../models/prisma/prismaClient"); 
const { generateTokens } = require("../../utils/tokenUtils");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
// Google Login Logic
const googleLogin = async (tokenId) => {
  try {
    // Verify the Google token using Google OAuth2 client (same as before)
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, picture, sub: googleId } = payload;

    // Check if the user exists in the database
    let user = await prisma.user.findUnique({
      where: { email },
    });

    // If the user doesn't exist, create a new user
    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          name,
          googleId,
          profilePicture: picture,
        },
      });
    }

    // Use your utility function to generate tokens
    const { accessToken, refreshToken } = generateTokens(user.id);

    // Store the refresh token in the database
    await prisma.refreshToken.create({
      data: {
        token: refreshToken,
        userId: user.id,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Refresh token expires in 7 days
      },
    });

    return { accessToken, refreshToken, user };
  } catch (error) {
    console.error("Error verifying Google token:", error);
    throw new Error("Invalid Google token.");
  }
};

module.exports={googleLogin}