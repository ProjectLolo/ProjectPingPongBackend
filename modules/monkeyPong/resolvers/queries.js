const MonkeyPong = require("../../../models/MonkeyPong");
const checkAuth = require("../../../utils/check-auth");

const monkeyPongs = async (_, { kidId }, context) => {
  try {
    
    const { userId } = checkAuth(context);
    
    const monkeyPong = await MonkeyPong.find({
      kidId: kidId,
    }).populate("userId");
    
    return monkeyPong;
  } catch (err) {
    throw err;
  }
};



const findMonkeyPongs = async (_, { kidId }, context) => {

  try {
   
    const { userId } = checkAuth(context);

    const monkeyPong = await MonkeyPong.find({
      kidId: kidId,
    }).populate("userId");

    return monkeyPong;
 
  } catch (err) {
    throw err;
  }
};



const monkeyPongById = async (_, { _id, kidId }, context) => {
  
  try {
    const { userId } = checkAuth(context);

    const monkeyPong = await MonkeyPong.findById(_id);
    
    if (monkeyPong.kidId != kidId) {
    
      throw new Error("User doesn't access to monkey-pong");
    }

    console.log(monkeyPong);
    
    return monkeyPong;
  } catch (err) {
    throw err;
  }
};


module.exports = { monkeyPongs, findMonkeyPongs, monkeyPongById };


