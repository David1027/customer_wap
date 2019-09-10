module.exports = {
  dev: true,
  env: {
    baseUrl: '',
    timeout: 90000
  },
  HOST: '0.0.0.0',
  PORT: 80,
  proxy: {
    '/api': 'http://192.168.40.25:8080',
    '/upload': 'http://192.168.40.25:8080'
  }
}
