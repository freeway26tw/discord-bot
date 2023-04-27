require('dotenv').config()
const { Client, IntentsBitField } = require('discord.js')

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent
  ]
})

client.on('ready', (c) => {
  console.log(`${c.user.tag} is online`)
})

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return

  if (interaction.commandName === 'add') {
    const num1 = interaction.options.get('first-number').value
    const num2 = interaction.options.get('second-number').value
    interaction.reply(`The sum is ${num1 + num2}`)
  }
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