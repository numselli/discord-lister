const https = require('https')

module.exports = settings => {
  if (!settings.listings.discordbotlist) {
    return
  }
  let data = JSON.stringify({
    'guilds': settings.servercount || 0,
    'shards': settings.shardscount || 0,
    'users': settings.usercount || 0
  });
  let options = {
    hostname: 'discordbotlist.com',
    port: 443,
    path: `/api/v1/bots/${settings.clientid}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'authorization': settings.listings.discordbotlist
    }
  }
  const req = https.request(options, (res) => {
    if (res.statusCode === 200) {
      if(settings.output == true){
        console.log('[discordbotlist.com] Post success!')
      }
    } else {
      console.log(`[discordbotlist.com] An error occured: ${res.statusCode}, ${res.statusMessage}`)
    }
  })
  req.on('error', (error) => {
    console.log(error)
  })
  req.write(data)
  req.end()
};
