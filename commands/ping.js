const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  return message.channel.send('Pong retard');

};

module.exports.help = {
  name: "ping"
};
