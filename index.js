const https = require('https')

module.exports = {
  post: async(settings) => {
    if(settings.discordbotsorg){
      require("./post/discordbotsorg")(settings);
    }
    if(settings.discordbotsgg){
      require("./post/discordbotsgg")(settings);
    }
    if(settings.discordboats){
      require("./post/discordboats")(settings);
    }
    if(settings.botsondiscord){
      require("./post/botsondiscord")(settings);
    }
    if(settings.botsfordiscord){
      require("./post/botsfordiscord")(settings);
    }
    if(settings.botlistspace){
      require("./post/botlistspace")(settings);
    }
    if(settings.divinediscordbots){
      require("./post/divinediscordbots")(settings);
    }
  }
};
        
