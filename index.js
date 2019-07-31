const https = require('https')

module.exports = {
     post: async (settings) => {
        if(!settings.servercount || !settings.shardscount || !settings.shardsid){
             return("Please check your settings. Something required is not filled.")
        }
          
        if(!settings.discordbotsorg || settings.discordbotsorg.enabled === true) {
           if(!settings.discordbotsorg.token){
             return console.log("token is not set!")
           }
           let data = JSON.stringify({
             'server_count' : settings.servercount,
             'shard_count' : settings.shardscount,
             'shard_id': settings.shardsid
           });
           let options = {
              hostname: 'discordbots.org/api',
              port: 443,
              path: `/bots/stats`,
              method: 'POST',
              headers: {
                 'Content-Type': 'application/json',
                 'Content-Length': data.length,
                 'Authorization': settings.discordbotsorg.token
              }
           }
           const req = https.request(options, (res) => {
              console.log(`statusCode: ${res.statusCode}`)
                 res.on('data', (d) => {
                    process.stdout.write(d)
                 })
           })
           req.on('error', (error) => {
              console.log(error)
           })
           req.write(data)
           req.end()
        },
             
        if(!settings.discordbotsgg || settings.discordbotsgg.enabled === true) {
           if(!settings.discordbotsgg.token){
             return console.log("token is not set!")
           }
           if(!settings.discordbotsorg.client_id){
             return console.log("client_id is not set!")
           }
           let data = JSON.stringify({
             'guildCount' : settings.servercount,
             'shardCount' : settings.shardscount,
             'shardId': settings.shardsid
           });
           let options = {
              hostname: 'discord.bots.gg/api/v1',
              port: 443,
              path: `bots/${settings.client_id}/stats`,
              method: 'POST',
              headers: {
                 'Content-Type': 'application/json',
                 'Content-Length': data.length,
                 'Authorization': settings.discordbotsgg.token
              }
           }
           const req = https.request(options, (res) => {
              console.log(`statusCode: ${res.statusCode}`)
                 res.on('data', (d) => {
                    process.stdout.write(d)
                 })
           })
           req.on('error', (error) => {
              console.log(error)
           })
           req.write(data)
           req.end()

        }

};
