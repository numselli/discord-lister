# discord-lister
An all-in-one poster for bot stats. Supports the following bot listing services:
- discordbots.org
- discord.bots.gg
- discord.boats

### Example
``` js
const botlist = require('discord-lister');

let settings = {
  listings: {
    discordbotsorg: "", // TOKEN HERE
    discordbotsgg: "", // TOKEN HERE
    discordboats: "" // TOKEN HERE
  },
  clientid: "CLIENT ID HERE",
  servercount: 0,
  shardscount: 0,
  shardsid: 0
}

botlist.post(settings)
```
