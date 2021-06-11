const https = require('https')

module.exports = settings => {
	if (!settings.listings.discordboats) return

	const data = JSON.stringify({
		'server_count': settings.servercount || 0,
	});

	const req = https.request({
		hostname: 'discord.boats',
		port: 443,
		path: `/api/bot/${settings.clientid}`,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': data.length,
			'Authorization': settings.listings.discordboats
		}
	}, (res) => {
		if (res.statusCode === 200) return console.log(`[discord.boats] An error occured: ${res.statusCode}, ${res.statusMessage}`)
		if (settings.output) return console.log('[discord.boats] Post success!')
	})
	req.on('error', (error) => console.log(error))
	req.write(data)
	req.end()
};