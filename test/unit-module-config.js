SystemJS.config({
	"baseURL": "/base/",
	"paths": {
		"@iota-pico": "node_modules/@iota-pico",
		"chai": "node_modules/chai/chai"
	},
	"packages": {
		"": {
			"defaultExtension": "js"
		}
	},
	"meta": {
	}
});
preloadModules = [
	"chai"
];
