// Custom little thing for Bitburner's script editor to use some intellicomplete thing, idk, RTFM.
/**
* @param {NS} ns
**/

// Hook into the game and because I'm forcing myself to comment shit.
export async function main(ns) {
  // Infinite loop, of course. I actually screwed this up and froze the game, which netted me an achievement. Sucking isn't all bad!
  while(true) { 
    await ns.run("worm.js"); // Deploy our turbo worm to root servers.
    await ns.run("hackDeploy.js"); // Deploy our hack script to the heretics and execute them with threads.
    await ns.sleep(600000); // Sleep for 10 minutes because we don't need to be butt blasting the game with this crap.
  };
};
