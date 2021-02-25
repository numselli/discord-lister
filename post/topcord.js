const https = require('https')

module.exports = settings => {
  if (!settings.listings.topcord) {
    return
  }
  let data = JSON.stringify({
    'guilds': settings.servercount || 0,
    'shards': settings.shardscount || 0,
  });
  let options = {
    hostname: 'api.topcord.xyz',
    port: 443,
    path: `/bot/${settings.clientid}/stats`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'authorization': settings.listings.topcord
    }
  }
  const req = https.request(options, (res) => {
    if (res.statusCode === 200) {
      if(settings.output == true){
        console.log('[TopCord.xyz] Post success!')
      }
    } else {
      console.log(`[TopCord.xyz] An error occured: ${res.statusCode}, ${res.statusMessage}`)
    }
  })
  req.on('error', (error) => {
    console.log(error)
  })
  req.write(data)
  req.end()
};
