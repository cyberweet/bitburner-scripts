/**
* @param {NS} ns
**/

// Array of who to iterate through and smack around. I was going to automate the gathering but the scan() function doesn't have a depth param, so this is easier for now. Don't feel like writing a wholeass worm yet.
const patheticVictims = ["n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi", "iron-gym", "max-hardware", "zer0", "nectar-net", "CSEC", "neo-net", "silver-helix", "omega-net", "phantasy", "avmnite-02h","the-hub", "comptek", "netlink", "johnson-ortho", "crush-fitness", "rothman-uni", "catalyst", "zb-institute", "I.I.I.I", "summit-uni"];

const availableExploits = ["brutessh.exe", "ftpcrack.exe", "relaysmtp.exe", "httpworm.exe", "sqlinject.exe"]

// Begin hooking into the game.
export async function main(ns) {
  let hackingLevel = await ns.getHackingLevel(); // We must determine how much of a l33t 4ax0r we are. Are we a sk1d or a m4st3r Mossad h4ck3r?
  let currentExploits = 0 // Counter for number of exploits currently in home directory.

  // Iterate through the available exploits within the game and check the home directory for their presence. This little fucker stumped me for like... 6 hours.
  for (let kek of availableExploits) {
    if (await ns.fileExists(kek, "home") == true) {
     currentExploits++
    };
  };

  ns.tprint("Beginning ping sweep...");  // Is it really a ping sweep if your targets are pre-defined? It sounds good, so who cares.

  for (let victim of patheticVictims) {
    if (await ns.getServerRequiredHackingLevel(victim) <= hackingLevel && await ns.getServerNumPortsRequired(victim) <= currentExploits) {
      if (currentExploits == 0) {
        await ns.nuke(victim);

      } else if (currentExploits == 1) {
        await ns.brutessh(victim);
        await ns.nuke(victim);

      } else if (currentExploits == 2) {
        await ns.brutessh(victim);
        await ns.ftpcrack(victim);
        await ns.nuke(victim);

      } else if (currentExploits == 3) {
        await ns.brutessh(victim);
        await ns.ftpcrack(victim);
        await ns.relaysmtp(victim);
        await ns.nuke(victim);

      } else if (currentExploits == 4) { 
        await ns.brutessh(victim);
        await ns.ftpcrack(victim);
        await ns.relaysmtp(victim);
        await ns.httpworm(victim);
        await ns.nuke(victim)

      } else if (currentExploits == 5) {
        await ns.brutessh(victim);
        await ns.ftpcrack(victim);
        await ns.relaysmtp(victim);
        await ns.httpworm(victim);
        await ns.sqlinject(victim)
        await ns.nuke(victim)
      };
      ns.tprint("Cracked and hacked!")
    } else {
      ns.tprint("Not hackable... yet...")
    };
  };
};