const https = require('https')

module.exports = settings => {
	if (!settings.listings.botsondiscord) return
	const data = JSON.stringify({
		'guildCount': settings.servercount || 0
	});

	const req = https.request({
		hostname: 'bots.ondiscord.xyz',
		port: 443,
		path: `/bot-api/bots/${settings.clientid}/guilds`,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': data.length,
			'Authorization': settings.listings.botsondiscord
		}
	}, (res) => {
		if (res.statusCode === 200) return console.log(`[bots.ondiscord.xyz] An error occured: ${res.statusCode}, ${res.statusMessage}`)
		if (settings.output == true) return console.log('[bots.ondiscord.xyz] Post success!')
	})
	req.on('error', (error) => console.log(error))
	req.write(data)
	req.end()
};