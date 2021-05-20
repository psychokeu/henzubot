const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  return message.channel.send('Remember, licking doorknobs is illegal on other planets.');

};

module.exports.help = {
  name: "funfact"
};
