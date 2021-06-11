const fs = require("fs/promises")
const files = await fs.readdir(`${__dirname}/post`);

module.exports = {
	post: async (settings) => {
		if (!settings.clientid) return console.log('clientid NOT DEFINED!')
		files.forEach(list => require(`./post/${list}`)(settings))
	}
};