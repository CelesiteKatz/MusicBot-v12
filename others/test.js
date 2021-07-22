const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const pagination = require('discord.js-pagination');
module.exports = {
  name: `test`,
  description: `Testing`,
  aliases: ["tests"],
  cooldown: 3,
  edesc: "Type this command to test",
  execute(message, args, client) {
    let commands = message.client.commands.array();
    let page1 = new MessageEmbed()
    .setColor('8bc3e4')
    .setTitle('__MUSIC COMMANDS__')
    .setDescription(`**PREFIX:** \`${PREFIX}\`\n\u200b`)
    .setTimestamp()
    const ifargstruedothis = -1;

    switch(args[0]){
        case "filter":
         ifargstruedothis=0;
        break;
        case "loop":
          ifargstruedothis=1;
        break;
        case "lyrics":
          ifargstruedothis=2
        break;
        case "nowplaying":
          ifargstruedothis=3
        break;
        case "pause":
          ifargstruedothis=4
        break;
        case "play":
          ifargstruedothis=5
        break;
        case "playlist":
          ifargstruedothis=6
        break;
        case "queue":
          ifargstruedothis=7
        break;
        case "radio":
          ifargstruedothis=8
        break;
        case "remove":
          ifargstruedothis=9
        break;
        case "resume":
          ifargstruedothis=10
        break;
        case "search":
          ifargstruedothis=11
        break;
        case "shuffle":
          ifargstruedothis=12
        break;
        case "skip":
          ifargstruedothis=13
        break;
        case "skipto":
          ifargstruedothis=14
        break;
        case "stop":
          ifargstruedothis=15
        break;
        case "volume":
          ifargstruedothis=16
        break;
        default:
          commands.forEach((cmd) => {
            page1.addField(
              `>>> \`${cmd.name}\``,
              `${cmd.description}`,
              true
            )
          })




    let page2 = new MessageEmbed()
    .setColor('8bc3e4')
    .setTitle('Page 2')
    .setDescription('this is an example for page 2')
    .setTimestamp()


    let page3 = new MessageEmbed()
    .setColor('8bc3e4')
    .setTitle('Page 3')
    .setDescription('this is an example for page 3')
    .setTimestamp()



    const pages = [
        page1,
        page2,
        page3
    ]

    const emoji = ["⏪", "⏩"]

    const timeout = '10000'

    pagination(message, pages, emoji, timeout)
  }
  if(!message.guild) {
    if(!args[0]) {message.react('✅');return message.channel.send(pages)}
    return
    }
    message.react('✅');
    //message.channel.send(new MessageEmbed().setColor("#8bc3e4")
    //.setDescription(`**✅ Sent from <#${message.channel.id}>**`))
    //message.channel.send( new MessageEmbed().setColor("#8bc3e4")
    //.setDescription(`**✅ ${message.author} Check your \`direct messages\` for a list of Commands!**`)
   // );

  if(ifargstruedothis>=0){
    let aliases = commands[ifargstruedothis].aliases;
    if(aliases === undefined || !aliases) aliases="No Aliases!";
    let cooldown = commands[ifargstruedothis].cooldown;
    if(cooldown === undefined || !cooldown) cooldown="No Cooldown!";


   page1.addField(
     `**${prefix}${commands[ifargstruedothis].name}**`,
     `\`\`\`fix\n${commands[ifargstruedothis].edesc}\n\`\`\`\n\`${commands[ifargstruedothis].description}\``
   );
   page1.addField(
     `**:notes: Aliases:**`,
     `\`${aliases}\``
   );
   page1.addField(
     `**:wrench: Cooldown:**`,
     `\`${cooldown}\``
   );
   if(!message.guild) return message.channel.send(pages);
     message.channel.send(pages)
     //message.channel.send( new MessageEmbed().setColor("#8bc3e4")
     //.setDescription(`**✅ ${message.author} Check your \`direct messages\` for a list of Commands!**`)
     //)
   }
}
}