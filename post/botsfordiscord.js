const https = require('https')

module.exports = settings => {
	if (!settings.listings.botsfordiscord) return

	const data = JSON.stringify({
		'server_count': settings.servercount || 0
	});

	const req = https.request({
		hostname: 'botsfordiscord.com',
		port: 443,
		path: `/api/bot/${settings.clientid}`,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': data.length,
			'Authorization': settings.listings.botsfordiscord
		}
	}, (res) => {
		if (!res.statusCode === 200) return console.log(`[botsfordiscord.com] An error occured: ${res.statusCode}, ${res.statusMessage}`)
		if (settings.output) return console.log('[botsfordiscord.com] Post success!')
	})
	req.on('error', (error) => console.log(error))
	req.write(data)
	req.end()
};