const Discord = require('discord.js');

const Util = require('discord.js');

const client = new Discord.Client({disableEveryone: true});

const prefix = "!";

console.log ('Hello')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

Owner = 422829377139638273


client.on('message', msg => {
 if (msg.content === "?help") {
msg.channel.send('**Check your `Privat` To see the `commands` 🎶**');
msg.react('💌')
 msg.author.sendMessage(`
** ${client.user.tag} Commands ** 
 
        =====  Commands: ===== 
		 
	  ${prefix}\`\ Avatar \`\ - checks the bot's latency 
	  ${prefix}\`\ ping \`\ - checks the bot's latency 
	  ${prefix}\`\ settings \`\ - checks the bot's latency  
		 
        =====  Music: =====  
		 
      ${prefix}\`\ play <url>or<title> \`\ - plays the provided song 
      ${prefix}\`\ skip \`\ - votes to skip the current song  
	  ${prefix}\`\ stop \`\ - stops the current song and clears the queue 
      ${prefix}\`\ playnow \`\ - shows the song that is currently playing 
		  
         =====  DJ: ===== 	   
		 	 
      ${prefix}\`\ Volume [0-150]\`\ - sets or shows volume 
	  ${prefix}\`\ repeat \`\ - Rpeat the song
	  ${prefix}\`\ forcestop \`\ - skips the current song
	  
	     =====  Owner: ===== 
		 
	  ${prefix}\`\ setdj \`\ - sets the DJ role for certain music commands 
	  ${prefix}\`\ settc \`\ - sets the text channel for music commands 
	  ${prefix}\`\ setvc \`\ - sets the voice channel for playing music
      ${prefix}\`\ setavatar \`\ - Setbot avatar 
 	 ${prefix}\`\ setgame \`\ - Set the Bot game 
      ${prefix}\`\ sett \`\ - set the twitch for the bot 
	  ${prefix}\`\ setname \`\ - change the bot name 
	  
 ===== Bot Owner ID ${Owner} ===== `)


		
		
		
		
		


		}             


});

client.login(process.env.BOT_TOKEN);



