const keys = {
  production : require('./prod'),
  development : require('./dev'),
}

module.exports = keys[process.env.NODE_ENV || 'development']