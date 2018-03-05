SystemJS.config({
    "baseURL": "/base/",
    "paths": {
        "@iota-pico": "node_modules/@iota-pico",
        "chai": "node_modules/chai/chai",
        "sinon": "node_modules/sinon/pkg/sinon",
        "big-integer": "node_modules/big-integer/BigInteger"
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
