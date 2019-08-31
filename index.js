const https = require('https')

module.exports = {
  post: async(settings) => {
    try {
    console.log("Posting Data to Bot Listing Services")
    if(settings.discordbotsorg){
      console.log("discordbotsorg")
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
    } catch(err) {
      console.log(err)
    }
  }
};
        
