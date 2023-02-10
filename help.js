const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ApplicationCommandType, ButtonStyle } = require('discord.js');

module.exports = {
	name: 'help',
	description: "Get info about the bot",
  usage: "",
  category: "",
	userPerms: [''],
	botPerms: [''],
	cooldown: 30,
  guildOnly: false,
  ownerOnly: false,
  toggleOff: false,
  nsfwOnly: false,
  maintenance: false,
    voteOnly: false,
	type: ApplicationCommandType.ChatInput,
	run: async (client, interaction) => {
    try{ 
		const inviteUrl = `https://discord.com/api/oauth2/authorize?client_id=$962680185730261062&permissions=8&scope=bot%20applications.commands`;
		const embed = new EmbedBuilder()
		.setTitle("<:ocping:982974984781725716>  __**OctorPro Help Panel**__ <:ocping:982974984781725716> ")
    .setDescription("<:safeunlock:977957447849345104> __**<:Suggestions:967345652805816392>  About Me**__ \n\n Octor is one of the powerful bot that Make Your Replit / Glitch / Website 24/7 Without Any Downtime  \n\n __**Why Octor Not Other**__ \n\n \n You Should Know Why You Use Octor And Not Other Because Octor Always Provide 24/7 Support For Your Bot And Website Without A Break \n\n __**<:cog:963945022061940806>  OCTOR COMMANDS**__ \n\n  `octor add`, `octor remove` , `alert` , ` octor projects` , `octor total` , `octor total` ,` ping` ,  `alert` , `info`")
      
    .setImage("https://images-ext-1.discordapp.net/external/C0l3JJRjCFgC75-J0MQVsJaT4MJ3zitPMoYzf1DfAmc/https/share.creavite.co/2aaqyoX2hB7PbCHW.gif?width=374&height=48")
      

		.setTimestamp()
		.setThumbnail(client.user.displayAvatarURL())
		.setFooter({ text: client.user.tag })

		const actionRow = new ActionRowBuilder()
		.addComponents([
			new ButtonBuilder()
			.setLabel('Invite')
			.setURL(inviteUrl)
			.setStyle(ButtonStyle.Link)
		])
   interaction.reply({ embeds: [embed], components: [actionRow] })
    } catch (error){
      client.slash_err(client, interaction, error);
    }
	}
};
