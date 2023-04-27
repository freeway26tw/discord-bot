require('dotenv').config()
const { Client, IntentsBitField, ActivityType } = require('discord.js')

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
})

let status = {
  name: 'ASMR・森の音',
  type: ActivityType.Streaming,
  url: 'https://www.youtube.com/watch?v=HcMeAvf5-xo&ab_channel=%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3%E5%85%AC%E5%BC%8FYouTube%E3%83%81%E3%83%A3%E3%83%B3%E3%83%8D%E3%83%AB'
}


client.on('ready', (c) => {
  console.log(`${c.user.tag} is online`)

  client.user.setActivity(status)
})

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return
})

client.on(`messageCreate`, (message) => {
  if (message.author.bot) {
    return
  }

  if (message.content === '我想成為武林大師') {
    message.reply(`既然你都誠心誠意地發問了，我就告訴你秘訣吧！https://www.youtube.com/watch?v=m_T25R1YBHI&ab_channel=WB%E7%99%BD%E9%B3%A5`)
  }
})

client.login(process.env.TOKEN)