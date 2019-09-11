module.exports = {
  dev: true,
  env: {
    baseUrl: '',
    timeout: 90000
  },
  HOST: '0.0.0.0',
  PORT: 80,
  proxy: {
    '/api': 'http://47.99.196.112:8080',
    '/upload': 'http://47.99.196.112:8080'
  }
}
