const https = require('https')
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

module.exports = {
  post: async(settings) => {
    let lists = await readdir(__dirname + "/post");
    if(!settings.clientid){
      return console.log('clientid NOT DEFINED!')
    }
    if(!settings.output){
      settings.output = false
    }
    lists.forEach(list =>{
      require(`./post/${list}`)(settings)
    })
  }
};
