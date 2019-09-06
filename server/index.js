const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config_Pc = require('../nuxt.config.js')
// const config =
const myConfig = require('../config/' + process.env.NODE_ENV + '.js')
config_Pc.dev = myConfig.dev

async function start() {
  // Init Nuxt.js
  const nuxt_PC = new Nuxt(config_Pc)

  const {
    host = process.env.HOST || myConfig.HOST,
    port = process.env.PORT || myConfig.PORT
  } = nuxt_PC.options.server

  // Build only in dev mode
  if (config_Pc.dev) {
    const builder = new Builder(nuxt_PC)
    await builder.build()
  }

  app.use(nuxt_PC.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
