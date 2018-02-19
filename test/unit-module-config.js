SystemJS.config({
    "baseURL": "/base/",
    "paths": {
        "@iota-pico": "node_modules/@iota-pico",
        "chai": "node_modules/chai/chai",
        "crypto-js": "node_modules/crypto-js/crypto-js"
    },
    "packages": {
        "": {
            "defaultExtension": "js"
        }
    }
});
preloadModules = [
    "chai"
];
