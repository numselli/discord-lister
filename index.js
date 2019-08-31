const https = require('https')

module.exports = {
  post: async(settings) => {
    if(settings.discordbotsorg){
      require("./post/discordbotsorg")(settings);
    }
  }
};
        
