const fs = require("fs/promises")

module.exports = {
	post: async (settings) => {
		if (!settings.clientid) return console.log('clientid NOT DEFINED!')
		const files = await fs.readdir(`${__dirname}/post`);
		files.forEach(list => require(`./post/${list}`)(settings))
	}
};
