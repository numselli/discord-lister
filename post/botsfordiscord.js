const https = require('https')

module.exports = settings => {
  if (!settings.listings.botsfordiscord) {
    return console.log("[botsfordiscord.com] Token not set!")
  }
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
};
