const https = require('https')

module.exports = {
     post: async (settings) => {
          if(settings.discordbotsorg.enabled === true) {
           if(!settings.discordbotsorg.token){
             return console.log("[discordbots.org] Token is not set!")
           }
           let data = JSON.stringify({
             'server_count' : settings.servercount || 0,
             'shard_count' : settings.shardscount || 0,
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
                 'Authorization': settings.discordbotsorg.token
              }
           }
           
           
           const req = https.request(options, (res) => {
                if(res.statusCode === 200){
                     console.log('discordbots.org post success!')
                } else {
                  console.log(`[discordbots.org] An error occured: ${res.statusCode}, ${res.statusMessage}`)
                  console.log('[discordbots.org]This may be a cause of a malformed API Token.')
                }
                 
           })
           
           req.on('error', (error) => {
              console.log(error)
           })
           req.write(data)
           req.end()
        }
        if(settings.discordbotsgg.enabled === true) {
           if(!settings.discordbotsgg.token){
             return console.log("[discord.bots.gg] Token is not set!")
           }
           let data = JSON.stringify({
             'guildCount' : settings.servercount || 0,
             'shardCount' : settings.shardscount || 0,
             'shardId': settings.shardsid || 0
           });
           let options = {
              hostname: 'discord.bots.gg',
              port: 443,
              path: `/api/v1/bots/${settings.discordbotsgg.client_id}/stats`,
              method: 'POST',
              headers: {
                 'Content-Type': 'application/json',
                 'Content-Length': data.length,
                 'Authorization': settings.discordbotsgg.token
              }
           }
           
           
           const req = https.request(options, (res) => {
                if(res.statusCode === 200){
                     console.log('discord.bots.gg post success!')
                } else {
                  console.log(`[discord.bots.gg] An error occured: ${res.statusCode}, ${res.statusMessage}`)
                  console.log('[discord.bots.gg] This may be a cause of a malformed API Token or Invalid Client ID.')
                }
                 
           })
           
           req.on('error', (error) => {
              console.log(error)
           })
           req.write(data)
           req.end()
        }
     }
};
