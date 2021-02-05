const { AuthenticationError, UserInputError } = require("apollo-server");
const MonkeyPong = require("../../../models/MonkeyPong");
const checkAuth = require("../../../utils/check-auth");



const createMonkeyPong = async (
  _,
  { animal, kidId, url },
  context
) => {
  const user = checkAuth(context);

  try {
    
    const monkeyPong = new MonkeyPong({
      animal,
      kidId,
      url,
      userId: user.userId,
    });
      console.log(monkeyPong)

    const result = await monkeyPong.save();
    
    return { ...result._doc };

  } catch (err) {
    throw err;
  }
};



module.exports = {
  createMonkeyPong,
};