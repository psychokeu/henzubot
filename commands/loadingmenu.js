const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  return message.channel.send('remember, licking doorknobs is illegal on other planets.');

};

module.exports.help = {
  name: "loadingmenu"
};