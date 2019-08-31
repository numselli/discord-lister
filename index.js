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
    
    if (settings.listings.botsondiscord) {
      if (!settings.listings.botsondiscord) {
        console.log("[bots.ondiscord.xyz] Token not set!")
      } else {
        let data = JSON.stringify({
          'guildCount': settings.servercount || 0
        });
        let options = {
          hostname: 'bots.ondiscord.xyz',
          port: 443,
          path: `/bot-api/bots/${settings.clientid}/guilds`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length,
            'Authorization': settings.listings.botsondiscord
          }
        }
        const req = https.request(options, (res) => {
          if (res.statusCode === 200) {
            console.log('[bots.ondiscord.xyz] Post success!')
          } else {
            console.log(`[bots.ondiscord.xyz] An error occured: ${res.statusCode}, ${res.statusMessage}`)
          }
        })
        req.on('error', (error) => {
          console.log(error)
        })
        req.write(data)
        req.end()
      }
    }
    
    if (settings.listings.botsfordiscord) {
      if (!settings.listings.botsfordiscord) {
        console.log("[botsfordiscord.com] Token not set!")
      } else {
        let data = JSON.stringify({
          'server_count': settings.servercount || 0
        });
        let options = {
          hostname: 'botsfordiscord.com',
          port: 443,
          path: `/api/bot/${settings.clientid}`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length,
            'Authorization': settings.listings.botsfordiscord
          }
        }
        const req = https.request(options, (res) => {
          if (res.statusCode === 200) {
            console.log('[botsfordiscord.com] Post success!')
          } else {
            console.log(`[botsfordiscord.com] An error occured: ${res.statusCode}, ${res.statusMessage}`)
          }
        })
        req.on('error', (error) => {
          console.log(error)
        })
        req.write(data)
        req.end()
      }
    }
    
    if (settings.listings.botlistspace) {
      if (!settings.listings.botlistspace) {
        console.log("[botlist.space] Token not set!")
      } else {
        let data = JSON.stringify({
          'server_count': settings.servercount || 0,
          'shards': settings.shardscount || 0
        });
        let options = {
          hostname: 'api.botlist.space',
          port: 443,
          path: `/v1/bots/${settings.clientid}`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length,
            'Authorization': settings.listings.botlistspace
          }
        }
        const req = https.request(options, (res) => {
          if (res.statusCode === 200) {
            console.log('[botlist.space] Post success!')
          } else {
            console.log(`[botlist.space] An error occured: ${res.statusCode}, ${res.statusMessage}`)
          }
        })
        req.on('error', (error) => {
          console.log(error)
        })
        req.write(data)
        req.end()
      }
    }
    
    if (settings.listings.divinediscordbots) {
      if (!settings.listings.divinediscordbots) {
        console.log("[botlist.space] Token not set!")
      } else {
        let data = JSON.stringify({
          'server_count': settings.servercount || 0
        });
        let options = {
          hostname: 'divinediscordbots.com',
          port: 443,
          path: `/bot/${settings.clientid}/stats`,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length,
            'Authorization': settings.listings.divinediscordbots
          }
        }
        const req = https.request(options, (res) => {
          if (res.statusCode === 200) {
            console.log('[botlist.space] Post success!')
          } else {
            console.log(`[botlist.space] An error occured: ${res.statusCode}, ${res.statusMessage}`)
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
        
