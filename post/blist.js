const https = require('https')

module.exports = settings => {
	if (!settings.listings.blist) return

	const data = JSON.stringify({
		'server_count': settings.servercount || 0,
		'shard_count': settings.shardscount || 0
	});

	const req = https.request({
		hostname: 'blist.xyz',
		port: 443,
		path: `/api/v2/bot/${settings.clientid}/stats/`,
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': data.length,
			'Authorization': settings.listings.blist
		}
	}, (res) => {
		if (!res.statusCode === 200) return console.log(`[blist.xyz] An error occured: ${res.statusCode}, ${res.statusMessage}`)
		if (settings.output) return console.log('[blist.xyz] Post success!')
	})
	req.on('error', (error) => console.log(error))
	req.write(data)
	req.end()
};