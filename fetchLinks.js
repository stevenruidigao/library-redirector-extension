links = Array.from((await (await fetch("https://login.silk.library.umass.edu/menu")).text()).matchAll(/<a href="http:\/\/silk.*?\/login\?url=((.*?:\/\/.*?)([\/?].*?)?)">(.*)<\/a>/g)).map((match) => ({ "full_url": match[1], "url": match[2], "name": match[4] }));

console.log(JSON.stringify(links).replaceAll("\\\\", "\\"));