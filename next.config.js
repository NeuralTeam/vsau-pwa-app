const { version } = require("./package.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    env: {
        VERSION: version
    }
};

module.exports = nextConfig;
