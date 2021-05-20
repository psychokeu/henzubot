const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  return message.channel.send('You can do commands such as: funfact, henzusucks, afk, and ping, using the ^ prefix. More commands will be added soon.');

};

module.exports.help = {
  name: "commands"
};
