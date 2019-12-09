# discord-lister
An all-in-one poster for bot stats. Supports the following bot listing services:
- discordbots.org
- discord.bots.gg
- discord.boats
- bots.ondiscord.xyz
- botsfordiscord.com
- botlist.space
- divinediscordbots.com

### Example
``` js
const botlist = require('discord-lister');

let settings = {
  listings: {
    topgg: "", // TOKEN HERE
    discordbotsgg: "", // TOKEN HERE
    discordboats: "", // TOKEN HERE
    botsondiscord: "" // TOKEN HERE
    botsfordiscord: "", // TOKEN HERE
    botlistspace: "", // TOKEN HERE
    divinediscordbots: "" // TOKEN HERE
  },
  clientid: "CLIENT ID HERE", // REQUIRED
  servercount: 0,
  shardscount: 0,
  shardsid: 0
}

botlist.post(settings)
```
## Update 1.2.2
Replaced Bot Lists
- top.gg

## Update 1.2.0
Added New Bot Lists
- botsfordiscord.com
- botlist.space
- divinediscordbots.com

## Update 1.1.2
Fixed Error on botsondiscord settings

## Update 1.1.1
Added bots.ondiscord.xyz
