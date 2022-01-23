// Custom little thing for Bitburner's script editor to use some intellicomplete thing, idk, RTFM.
/**
* @param {NS} ns
**/

export async function main(ns) {
  while(true) {
    await ns.sleep(600000); // Sleep for 10 minutes because we don't need to be butt blasting the game with this crap.
    await ns.run("worm.js"); // Deploy our turbo worm to root servers.
    await ns.run("hackDeploy.js"); // Deploy our hack script to the heretics and execute them with threads.
  };
};
