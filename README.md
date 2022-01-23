# bitburner-scripts
## Scripts I wrote for bitburner because it's forcing me to learn JS.

These scripts can pretty much be run on their own or you can use the basic scheduler to execute them every 10 minutes. 

The worm will iterate through the game's hosts. I was gonna try to get fancy with it but you can't pass a depth to the game's scan function. That woulda been cool tbh.

The hackDeploy does just that. Deploys whatever hack script to the hostnames and then executes it on hosts that are rooted. I'm pretty sure that's working. Someone tell me if I'm just dumb. It shouldn't keep pushing the script to hosts that already have the script. It'll execute the script with maximum efficiency (In theory, of course).

The scheduler schedules stuff. It's literally just an infinite loop with a sleep and run function. I swear I'm a security professional. 

I guess I'll rewrite my hack script in .js instead of .script. I'm too ashamed to upload .script version, so it'll be a bit.

# YES, I KNOW THE WORM'S MASSIVE ELSE IF CHAIN IS THE WORST SIN SINCE EVE FRENCH KISSED AN APPLE, I'LL GET TO IT WHEN I FEEL LIKE IT.