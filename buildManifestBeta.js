const fs = require('fs');

links = require('./links.json');
defaultManifest = require('./defaultManifest.json');

excluded = [
	"LOCKSS (journal box)",
];

matches = links.filter(link => !excluded.includes(link.name)).map(link => link.url + "/*");

matches = matches.concat([
	"https://dl.acm.org/*",
]);

manifest = defaultManifest;

manifest.name = "Library Redirector Extension BETA";
manifest.description = "THIS EXTENSION IS FOR BETA TESTING. Automatically redirects links to the library proxied links.";
manifest.matches = matches;

fs.writeFileSync('extension/manifest.json', JSON.stringify(manifest, null, 2));
fs.writeFileSync('extension/BETA', JSON.stringify(manifest, null, 2));
fs.rmSync('extension/RELEASE', { force: true });
