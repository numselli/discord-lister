const https = require('https')

module.exports = settings => {
  if (!settings.listings.discordboats) {
    return
  }
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
      if(settings.output == true){
        console.log('[discord.boats] Post success!')
      }
    } else {
      console.log(`[discord.boats] An error occured: ${res.statusCode}, ${res.statusMessage}`)
    }
  })
  req.on('error', (error) => {
    console.log(error)
  })
  req.write(data)
  req.end()
};
