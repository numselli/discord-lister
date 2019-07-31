const https = require('https')

module.exports = {
     post: async (settings) => {
        if(!settings.servercount || !settings.shardscount || !settings.shardsid){
             return("Please check your settings, something is wrong with it")
        if(!settings.discordbotsorg || settings.discordbotsorg.enabled === true) {
           if(!settings.discordbotsorg.discordbotsorg_token){
             return console.log("discordbotsorg_token is not set!")
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
                 'Authorization': settings.discordbotsorg.discordbotsorg_token
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
           
        }
     },

};
