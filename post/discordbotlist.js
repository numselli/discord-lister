const https = require('https')

module.exports = settings => {
	if (!settings.listings.discordbotlist) return

	const data = JSON.stringify({
		'guilds': settings.servercount || 0,
		'users': settings.usercount || 0
	});
	const req = https.request({
		hostname: 'discordbotlist.com',
		port: 443,
		path: `/api/v1/bots/${settings.clientid}/stats`,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': data.length,
			'Authorization': settings.listings.discordbotlist
		}
	}, (res) => {
		if (!res.statusCode === 200) return console.log(`[discordbotlist.com] An error occured: ${res.statusCode}, ${res.statusMessage}`)
		if (settings.output) return console.log('[discordbotlist.com] Post success!')
	})
	req.on('error', (error) => console.log(error))
	req.write(data)
	req.end()
};