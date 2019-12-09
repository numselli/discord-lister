const https = require('https')

module.exports = {
  post: async(settings) => {
    try {
    console.log("Posting Data to Bot Listing Services")
    if(settings.listings.topgg){
      require("./post/topgg")(settings);
    }
    if(settings.listings.discordbotsgg){
      require("./post/discordbotsgg")(settings);
    }
    if(settings.listings.discordboats){
      require("./post/discordboats")(settings);
    }
    if(settings.listings.botsondiscord){
      require("./post/botsondiscord")(settings);
    }
    if(settings.listings.botsfordiscord){
      require("./post/botsfordiscord")(settings);
    }
    if(settings.listings.botlistspace){
      require("./post/botlistspace")(settings);
    }
    if(settings.listings.divinediscordbots){
      require("./post/divinediscordbots")(settings);
    }
    } catch(err) {
      console.log(err)
    }
  }
};
