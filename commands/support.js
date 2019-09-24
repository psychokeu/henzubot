const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  return message.channel.send('TO CONTINE, DO ^self FOR SELF SUPPORT OR ^bystander FOR OTHER PEOPLE SUPPORT');

};

module.exports.help = {
  name: "support"
};