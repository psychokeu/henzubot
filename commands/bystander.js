const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  return message.channel.send('hi, and welcome to the bystander support channel, where you can report bullying or try to ask advice about a friendship gone wrong or a misely mistake that you think someone you like or is your friend will be "mad" to you');

};

module.exports.help = {
  name: "self"
};