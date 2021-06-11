const https = require('https')

module.exports = settings => {
	if (!settings.listings.sentcord) return

	let data = JSON.stringify({
		'serverCount': settings.servercount || 0,
		'shardCount': settings.shardscount || 0
	});
	const req = https.request({
		hostname: 'sentcord.com',
		port: 443,
		path: `/api/bot/${settings.clientid}`,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': data.length,
			'authorization': settings.listings.sentcord
		}
	}, (res) => {
		if (!res.statusCode === 200) return console.log(`[sentcord.com] An error occured: ${res.statusCode}, ${res.statusMessage}`)
		if (settings.output) return console.log('[sentcord.com] Post success!')
	})
	req.on('error', (error) => console.log(error))
	req.write(data)
	req.end()
};