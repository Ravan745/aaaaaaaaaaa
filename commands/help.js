const {
    ApplicationCommandType,
    PermissionFlagsBits
} = require("discord.js");
module.exports = {
    name: "help",
    description: `help commands`,
    type: ApplicationCommandType.ChatInput,
    options: [],
    userPermissions: [PermissionFlagsBits.SendMessages],
    botPermissions: [PermissionFlagsBits.SendMessages],
    run: async (client, interaction) => {
        return interaction.reply({
            content: `\`/help , /ping , /removechannel , /setchannel\``
        })
    }
}