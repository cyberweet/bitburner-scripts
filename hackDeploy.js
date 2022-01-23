// Custom little thing for Bitburner's script editor to use some intellicomplete thing, idk, RTFM.
/**
* @param {NS} ns
**/

// Array of who to iterate through and smack around. I was going to automate the gathering but the scan() function doesn't have a depth param, so this is easier for now. Don't feel like writing a wholeass worm yet.
const patheticVictims = ["n00dles", "foodnstuff", "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi", "iron-gym", "max-hardware", "zer0", "nectar-net", "CSEC", "neo-net", "silver-helix", "omega-net", "phantasy", "avmnite-02h","the-hub", "comptek", "netlink", "johnson-ortho", "crush-fitness", "rothman-uni", "catalyst", "zb-institute", "I.I.I.I", "summit-uni"];

const hackScript = "diddler.script"; // Yup, that's the name of my hack script. Don't judge me, it was 4 am.

// Hook into the game like a pirate.
export async function main(ns) {

  // So, we're checking to see if the file already exists on the remote host. If it does, we'll skip. If not, open wide.
  for (let victims of patheticVictims) {
    if (await ns.fileExists(hackScript, victims) == false) {
      await ns.scp(hackScript, "home", victims); // We're assuming you're running this from the home directory because where else would you be doing so.
      ns.print("Copied script to " + victims); // Visual confirmation because I like validation.
    };
  };
  
  // Basically, just like above, we're checking to see if it's rooted. If it is, great, lets execute the script that should already be present on the box.
  for (let deployVictims of patheticVictims) {
    if (await ns.hasRootAccess(deployVictims) == true) {
      const threads = Math.floor((ns.getServerMaxRam(deployVictims) - ns.getServerUsedRam(deployVictims)) / ns.getScriptRam(hackScript)); // This one, I took the easy route with the math. Truthfully, I suck a math. I copied it from a dev example lol.
        if (threads > 0) {
          ns.exec(hackScript, deployVictims, threads, deployVictims); // Note: The diddler script requires a hostname arg, even if executing against the localhost, so the 4th arg is just the hostname.
          ns.print("Scripts activated on " + deployVictims);
        } else {
          ns.print("Looks to be maxed out.")
        };
    };
  };
};