const https = require('https')

module.exports = settings => {
	if (!settings.listings.discordlabs) return
	const data = JSON.stringify({
		'server_count': settings.servercount || 0,
		'shard_count': settings.shardscount || 0,
	});
	const req = https.request({
		hostname: 'bots.discordlabs.org',
		port: 443,
		path: `/v2/bot/${settings.clientid}/stats`,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': data.length,
			'Authorization': settings.listings.discordlabs
		}
	}, (res) => {
		if (!res.statusCode === 200) return console.log(`[discordlabs] An error occured: ${res.statusCode}, ${res.statusMessage}`)
		if (settings.output) return console.log('[discordlabs] Post success!')
	})
	req.on('error', (error) => console.log(error))
	req.write(data)
	req.end()
};