const https = require('https')

module.exports = settings => {
  if (!settings.listings.divinediscordbots) {
    console.log("[botlist.space] Token not set!")
  }
  let data = JSON.stringify({
    'server_count': settings.servercount || 0
  });
  let options = {
    hostname: 'divinediscordbots.com',
    port: 443,
    path: `/bot/${settings.clientid}/stats`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'Authorization': settings.listings.divinediscordbots
    }
  }
  const req = https.request(options, (res) => {
    if (res.statusCode === 200) {
      console.log('[botlist.space] Post success!')
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
