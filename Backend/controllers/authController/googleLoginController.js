const { googleLogin } = require("../../services/authService/googleLoginService");

const login = async (req, res) => {
  try {
    const { tokenId } = req.body; // Token sent from the client
    console.log(tokenId);
    const { accessToken, refreshToken, user } = await googleLogin(tokenId);

    // Send the tokens and user data in the response
    return res.json({
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        profilePicture: user.profilePicture,
      },
    });
  } catch (error) {
    console.error("Error in googleLoginController:", error);
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { login };