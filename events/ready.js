module.exports = {
    once: false,
    run: async (client) => {
        const allCommands = await client.slashCommands.map(c => c);
        await client.application.commands.set(allCommands);
        console.log('[SENOBI] Ready to chat!');
    }
};