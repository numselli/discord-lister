const https = require('https')

module.exports = settings => {
	if (!settings.listings.topgg) return

	const data = JSON.stringify({
		'server_count': settings.servercount || 0,
		'shard_count': settings.shardscount || 0,
		'shard_id': settings.shardsid || 0
	});
	const req = https.request({
		hostname: 'top.gg',
		port: 443,
		path: `/api/bots/${settings.clientid}/stats`,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': data.length,
			'Authorization': settings.listings.topgg
		}
	}, (res) => {
		if (!res.statusCode === 200) return console.log(`[top.gg] An error occured: ${res.statusCode}, ${res.statusMessage}`)
		if (settings.output) return console.log('[top.gg] Post success!')
	})
	req.on('error', (error) => console.log(error))
	req.write(data)
	req.end()
};