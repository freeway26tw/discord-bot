require('dotenv').config()
const { question } = require('../helpers/question')
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

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return

  if (interaction.commandName === 'question') {
    const type = interaction.options.get('type').value;
    const q = await question(type)
    const author = await interaction.member
    interaction.reply(`你好啊 ${author}
真沒想到你能到這裡來啊
不過...也就到此為止了
接下來就由耿鬼我出題目了
請問「${q}」?`)
  }
})

client.on(`messageCreate`, (message) => {
  if (message.author.bot && message.content.includes('真沒想到你能到這裡來啊')) {
    setTimeout(() => {
      message.reply('相信大家都知道答案了吧 快~快說給我聽')
    }, 5*60*1000);
  }

  if (message.content.includes('耿鬼') && !message.author.bot) {
    message.reply(`有人在呼叫我嗎 ><`)
  }

})

client.login(process.env.TOKEN)