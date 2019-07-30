const https = require('https')

module.exports = {
     post: async (settings) => {
        if(settings.discordbotsorg === true) {
           if(!settings.discordbotsorg_token){
             return console.log("discordbotsorg_token is not set!")
           }
           let data = JSON.stringify({
             'server_count' : settings.servercount,
             'shard_count' : settings.shardscount,
           });
           let options = {
              hostname: 'discordbots.org/api',
              port: 443,
              path: `/bots/{bot.id}/stats`,
              method: 'POST',
              headers: {
                 'Content-Type': 'application/json',
                 'Content-Length': data.length,
                 'Authorization': settings.discordbotsorg_token
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
             
        if(settings.discordbotsgg === true) {
           
        }
     },

};
