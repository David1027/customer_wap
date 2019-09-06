module.exports = {
  dev: false,
  env: {
    baseUrl: 'http://192.168.1.48:889/mock/5b87e8ef87c0c20021a314c7/example',
    timeout: 20000
  },
  HOST: '0.0.0.0',
  PORT: 3000,
  proxy: {
    '/api': 'http://192.168.100.48:81'
  }
}
