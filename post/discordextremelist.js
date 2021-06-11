const https = require('https')

module.exports = settings => {
	if (!settings.listings.discordextremelist) return

	const data = JSON.stringify({
		'guildCount': settings.servercount || 0,
		'shardCount': settings.shardscount || 0,
	});
	const req = https.request({
		hostname: 'api.discordextremelist.xyz',
		port: 443,
		path: `/v2/bot/${settings.clientid}/stats`,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': data.length,
			'authorization': settings.listings.discordextremelist
		}
	}, (res) => {
		if (!res.statusCode === 200) return console.log(`[discordextremelist.xyz] An error occured: ${res.statusCode}, ${res.statusMessage}`)
		if (settings.output == true) return console.log('[discordextremelist.xyz] Post success!')
	})
	req.on('error', (error) => console.log(error))
	req.write(data)
	req.end()
};