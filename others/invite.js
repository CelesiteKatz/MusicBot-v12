const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `invite`,
  description: `Gives you an invite`,
  aliases: ["add"],
  cooldown: 3,
  edesc: "Type this command to get an invite link for the Bot, thanks for every Invite",
  execute(message, args, client) {
    //react with approve emoji
    message.react("769665713124016128");
    //send the invite embed
    message.reply(new MessageEmbed().setColor("#8bc3e4").setTitle("Invite me ").setDescription("[Invite Link](https://discord.com/api/oauth2/authorize?client_id=849992164279582730&permissions=37044800&scope=bot)")
    .setFooter("And enjoy listening to music!", "https://cdn.discordapp.com/emojis/849248780875464764.png?v=1"));

  }
}
