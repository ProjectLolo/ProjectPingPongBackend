const { makeExecutableSchemaFromModules } = require("../utils/modules");

const auth = require("./auth/typeDefs");
const users = require("./users/typeDefs");
const kids = require("./kids/typeDefs");
const familyMembers = require("./familyMembers/typeDefs");
const loveBanks = require("./loveBanks/typeDefs");
const monkeyPong = require("./monkeyPong/typeDefs");
const conversationList = require("./conversationList/typeDefs");


module.exports = makeExecutableSchemaFromModules({
  modules: [auth, kids, familyMembers, loveBanks, monkeyPong, conversationList],
});
