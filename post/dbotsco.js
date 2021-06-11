const https = require('https')

module.exports = settings => {
	if (!settings.listings.dbotsco) return
	
	const data = JSON.stringify({
		'guildCount': settings.servercount || 0
	});
	const req = https.request({
		hostname: 'dbots.co',
		port: 443,
		path: `/api/v1/bots/${settings.clientid}/stats`,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': data.length,
			'Authorization': settings.listings.dbotsco
		}
	}, (res) => {
		if (!res.statusCode === 200) return console.log(`[dbots.co] An error occured: ${res.statusCode}, ${res.statusMessage}`)
		if (settings.output) return console.log('[dbots.co] Post success!')
	})
	req.on('error', (error) => console.log(error))
	req.write(data)
	req.end()
};