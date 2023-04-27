require('dotenv').config()
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js')

const commands = [
  {
    name: 'question',
    description: 'Random question',
    options: [
      {
        name: 'type',
        description: 'Frontend/Backend/Javascript',
        type: ApplicationCommandOptionType.String,
        choices: [
          {
            name: '前端',
            value: 'Frontend',
          },
          {
            name: '後端',
            value: 'Backend',
          },
          {
            name: 'JS',
            value: 'Javascript',
          },
        ],
        required: true,
      }
    ],
  }
]

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering slash commands...')

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    )

    console.log('Slash commands were registered successfully!')
  } catch (error) {
    console.log(`There was an error: ${error}`)
  }
})()