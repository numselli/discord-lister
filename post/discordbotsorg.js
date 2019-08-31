const https = require('https')

module.exports = settings => {
  if (!settings.listings.discordbotsorg) {
    return console.log("[discordbots.org] Token not set!")
  }
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
};
