/** @type {import('next').NextConfig} */

const runtimeCaching = require('next-pwa/cache')

const withPWA = require('next-pwa')({
	runtimeCaching,
	buildExcludes: [/middleware-manifest.json$/],
	register: true,
	skipWaiting: true,
})

const nextConfig = withPWA({
	output: 'export',
})

module.exports = nextConfig
