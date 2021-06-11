const https = require('https')

module.exports = settings => {
	if (!settings.listings.topcord) return
	
	const data = JSON.stringify({
		'guilds': settings.servercount || 0,
		'shards': settings.shardscount || 0,
	});

	const req = https.request({
		hostname: 'api.topcord.xyz',
		port: 443,
		path: `/bot/${settings.clientid}/stats`,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': data.length,
			'authorization': settings.listings.topcord
		}
	}, (res) => {
		if (!res.statusCode === 200) return console.log(`[TopCord.xyz] An error occured: ${res.statusCode}, ${res.statusMessage}`)
		if (settings.output) return console.log('[TopCord.xyz] Post success!')
	})
	req.on('error', (error) => console.log(error))
	req.write(data)
	req.end()
};