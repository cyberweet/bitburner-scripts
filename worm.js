/**
* @param {NS} ns
**/

// Array of who to iterate through and smack around. I was going to automate the gathering but the scan() function doesn't have a depth param, so this is easier for now. Don't feel like writing a wholeass worm yet.
const patheticVictims = ["n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi", "iron-gym", "max-hardware", "zer0", "nectar-net", "CSEC", "neo-net", "silver-helix", "omega-net", "phantasy"];

const availableExploits = ["brutessh.exe", "ftpcrack.exe", "relaysmtp.exe", "httpworm.exe", "sqlinject.exe"]


const home = "home";

export async function main(ns) {
  let hackingLevel = ns.getHackingLevel(); // We must determine how much of a l33t 4ax0r we are. Are we a sk1d or a m4st3r Mossad h4ck3r?


  //let currentExploits = ns.fileExists(availableExploits)

  let currentExploits = availableExploits.forEach(function(exploits) {
    if (ns.fileExists(exploits) == true) {
    }
  });


  //ns.tprint(currentExploits)
  ns.tprint("Beginning ping sweep...");  // Is it really a ping sweep if your targets are pre-defined? It sounds good, so who cares.
  patheticVictims.forEach(function(victim) {
    if (ns.getServerRequiredHackingLevel(victim) <= hackingLevel && ns.getServerNumPortsRequired(victim) <= currentExploits) {
      ns.tprint("hackable")
      ns.tprint(currentExploits)
    } else {
      ns.tprint("unhackable")
    };

  });
  ns.tprint(hackingLevel);
}