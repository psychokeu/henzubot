const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  return message.channel.send('TRIGGERED');

};

module.exports.help = {
  name: "henzusucks"
};