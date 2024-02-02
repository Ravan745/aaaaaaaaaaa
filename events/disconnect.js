module.exports = {
    once: true,
	run: () => {
        console.warn('[SENOBI] Disconnecting, Good bye!');
        process.exit(0);
    }
}