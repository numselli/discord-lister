# Discord-Listing
An all-in-one poster for bot stats. 

### Example
``` js
const botlist = require('Discord-Listing');

let settings = {
  discordbotsorg: {
    enabled: true,
    token: 'Discord Bots Org Token Here'
  },
  discordbotsorg: {
    enabled: true,
    token: 'Discord Bots GG Token Here',
    client_id: 'Bot ID here'
  },
  servercount: 0,
  shardscount: 0,
  shardsid: 0,
}

botlist.post(settings)
```
