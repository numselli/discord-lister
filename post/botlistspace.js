const https = require('https')

module.exports = settings => {
	if (!settings.listings.botlistspace) return
	
	const data = JSON.stringify({
		'server_count': settings.servercount || 0
	});
	const req = https.request({
		hostname: 'api.discordlist.space',
		port: 443,
		path: `/v1/bots/${settings.clientid}`,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': data.length,
			'Authorization': settings.listings.botlistspace
		}
	}, (res) => {
		if (!res.statusCode === 200) return console.log(`[botlist.space] An error occured: ${res.statusCode}, ${res.statusMessage}`)
		if (settings.output) return console.log('[botlist.space] Post success!')
	})
	req.on('error', (error) => console.log(error))
	req.write(data)
	req.end()
};