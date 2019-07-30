# Discord-Listing
An all-in-one poster for bot stats. 

### Example
```
const botlist = require('Discord-Listing');

let settings = {
  discordbotsorg: true,
  discordbotsgg: true
}

let count = {
  servercount: 0,
  shardsid: 0,
  shardscount: 0
}

botlist.post(settings, count)
```
