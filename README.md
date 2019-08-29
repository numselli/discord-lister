# discord-lister
An all-in-one poster for bot stats. Supports the following bot listing services:
- discordbots.org
- discord.bots.gg
- discord.boats
- bots.ondiscord.xyz

### Example
``` js
const botlist = require('discord-lister');

let settings = {
  listings: {
    discordbotsorg: "", // TOKEN HERE
    discordbotsgg: "", // TOKEN HERE
    discordboats: "", // TOKEN HERE
    botsondiscord: "" // TOKEN HERE
  },
  clientid: "CLIENT ID HERE", // REQUIRED
  servercount: 0,
  shardscount: 0,
  shardsid: 0
}

botlist.post(settings)
```

## Update 1.1.2
Fixed Error on botsondiscord settings

## Update 1.1.1
Added bots.ondiscord.xyz
