const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  return message.channel.send('hi, and welcome to the self support channel, where me Henzu delievers your questions to the owner that you need help with, plz type in you question or thing you need help with and i will look at it and show it to the owner which will then personally dm you when he can. ');

};

module.exports.help = {
  name: "self"
};