domain = "silk.library.umass.edu";

links = Array.from((await (await fetch(`https://login.${domain}/menu`)).text()).matchAll(/<a href="http:\/\/.*?\/login\?url=((.*?:\/\/.*?)([\/?].*?)?)">(.*)<\/a>/g)).map((match) => ({ "full_url": match[1], "url": match[2], "name": match[4] }));

console.log(JSON.stringify(links).replaceAll("\\\\", "\\"));