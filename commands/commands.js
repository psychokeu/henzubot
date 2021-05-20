const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  return message.channel.send('You can do commands such as ^say, ^funfact, ^henzusucks, ^afk, and ^ping. More commands will be added soon.');

};

module.exports.help = {
  name: "commands"
};
