module.exports = {
  dev: true,
  env: {
    // baseUrl: 'http://192.168.1.48:889/mock/5b87e8ef87c0c20021a314c7/example',
    timeout: 20000
  },
  HOST: '0.0.0.0',
  PORT: 80,
  proxy: {
    '/api': 'http://192.168.40.25:80',
    '/upload': 'http://192.168.40.25:80'
  }
}
