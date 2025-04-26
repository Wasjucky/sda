const { ActivityType } = require('discord.js');

module.exports = {
  ownerId: '996060657252319293',
  status: {
    rotateDefault: [
      { name: 'Netflix', type: ActivityType.Watching },
      { name: 'GTA VI', type: ActivityType.Playing },
      { name: 'on YouTube', type: ActivityType.Streaming, url: 'https://www.twitch.tv/eym3n54' },
      { name: 'Spotify', type: ActivityType.Listening },
    ],
    songStatus: true
  },
  spotifyClientId: "b35b16b9c2fb4ff3a66aded8ee35dcf5",
  spotifyClientSecret: "801b07e3d57247249bf8e3d0f81c5a52",
}
