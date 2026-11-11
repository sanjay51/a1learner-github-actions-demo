const fs = require("node:fs");
fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/index.html", "<!doctype html><title>Demo</title><h1>Demo site</h1>\n");
console.log("Build done: dist/index.html written.");
