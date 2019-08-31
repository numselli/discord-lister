const https = require('https')

module.exports = settings => {
  if (!settings.listings.botsondiscord) {
    return console.log("[bots.ondiscord.xyz] Token not set!")
  }
  let data = JSON.stringify({
    'guildCount': settings.servercount || 0
  });
  let options = {
    hostname: 'bots.ondiscord.xyz',
    port: 443,
    path: `/bot-api/bots/${settings.clientid}/guilds`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'Authorization': settings.listings.botsondiscord
    }
  }
  const req = https.request(options, (res) => {
    if (res.statusCode === 200) {
      console.log('[bots.ondiscord.xyz] Post success!')
    } else {
      console.log(JSON.stringify(res.raw))
      console.log(`[bots.ondiscord.xyz] An error occured: ${res.statusCode}, ${res.statusMessage}`)
    }
  })
  req.on('error', (error) => {
    console.log(error)
  })
  req.write(data)
  req.end()
};
