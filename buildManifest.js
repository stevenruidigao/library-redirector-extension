const fs = require('fs');

links = require('./links.json');
matches = links.filter(link => link.name !== "LOCKSS (journal box)").map(link => link.url + "/*");

matches = matches.concat([
	"https://dl.acm.org/*",
])

manifest = {
	"name": "UMass Library Redirector Extension",
	"description": "Automatically redirects links to the library proxied links.",
	"version": "1.0",
	"manifest_version": 3,
	"action": {
		"default_popup": "index.html",
		"default_icon": "icon.png"
	},
	"content_scripts": [
		{
			"js": ["scripts/content.js"],
			"matches": matches,
		}
	]
}

fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2));
