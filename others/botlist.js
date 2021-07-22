const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `botlist`,
  description: `Gives you the botlists of the Bot`,
  aliases: [],
  cooldown: 3,
  edesc: "Type this command to view all Bot list Server where the bot is on. Please vote there UwU",
  execute(message, args, client) {
    //react with approve emoji
    message.react(":white_check_mark:");
    //send the botlist embed
    message.reply(new MessageEmbed().setColor("#8bc3e4")
    .setTitle("Here is a list for all Bot-Lists this Bot is on!")
    .addField("Working On It Sorry")
    .addField("Invite Link", "[link](https://discord.com/api/oauth2/authorize?client_id=849992164279582730&permissions=37044800&scope=bot)")
    );

  }
}
