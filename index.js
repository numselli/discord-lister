const https = require('https')

module.exports = {
  post: async(settings) => {
    if (settings.listings.discordbotsorg) {
      if (!settings.listings.discordbotsorg) {
        console.log("[discordbots.org] Token not set!")
      } else {
        let data = JSON.stringify({
          'server_count': settings.servercount || 0,
          'shard_count': settings.shardscount || 0,
          'shard_id': settings.shardsid || 0
        });
        let options = {
          hostname: 'discordbots.org',
          port: 443,
          path: `/api/bots/stats`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length,
            'Authorization': settings.listings.discordbotsorg
          }
        }
        const req = https.request(options, (res) => {
          if (res.statusCode === 200) {
            console.log('[discordbots.org] Post success!')
          } else {
            console.log(`[discordbots.org] An error occured: ${res.statusCode}, ${res.statusMessage}`)
          }
        })
        req.on('error', (error) => {
          console.log(error)
        })
        req.write(data)
        req.end()
      }
    }

    if (settings.listings.discordbotsgg) {
      if (!settings.listings.discordbotsgg) {
        console.log("[discord.bots.gg] Token not set!")
      } else {
        let data = JSON.stringify({
          'server_count': settings.servercount || 0,
          'shard_count': settings.shardscount || 0,
          'shard_id': settings.shardsid || 0
        });
        let options = {
          hostname: 'discord.bots.gg',
          port: 443,
          path: `/api/v1/bots/${settings.clientid}/stats`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length,
            'Authorization': settings.listings.discordbotsgg
          }
        }
        const req = https.request(options, (res) => {
          if (res.statusCode === 200) {
            console.log('[discord.bots.gg] Post success!')
          } else {
            console.log(`[discord.bots.gg] An error occured: ${res.statusCode}, ${res.statusMessage}`)
          }
        })
        req.on('error', (error) => {
          console.log(error)
        })
        req.write(data)
        req.end()
      }
    }
    if (settings.listings.discordboats) {
      if (!settings.listings.discordboats) {
        console.log("[discord.boats] Token not set!")
      } else {
        let data = JSON.stringify({
          'server_count': settings.servercount || 0,
        });
        let options = {
          hostname: 'discord.boats',
          port: 443,
          path: `/api/v2/bot/${settings.clientid}`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length,
            'Authorization': settings.listings.discordboats
          }
        }
        const req = https.request(options, (res) => {
          if (res.statusCode === 200) {
            console.log('[discord.boats] Post success!')
          } else {
            console.log(`[discord.boats] An error occured: ${res.statusCode}, ${res.statusMessage}`)
          }
        })
        req.on('error', (error) => {
          console.log(error)
        })
        req.write(data)
        req.end()
      }
    }

  }
};
