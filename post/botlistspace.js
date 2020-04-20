const https = require('https')

module.exports = settings => {
  if (!settings.listings.botlistspace) {
    return
  }
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
      if(settings.output == true){
        console.log('[botlist.space] Post success!')
      }
    } else {
      console.log(`[botlist.space] An error occured: ${res.statusCode}, ${res.statusMessage}`)
    }
  })
  req.on('error', (error) => {
    console.log(error)
  })
  req.write(data)
  req.end()
};
