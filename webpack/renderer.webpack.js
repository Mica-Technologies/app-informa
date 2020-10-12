module.exports = {
  target: 'electron-renderer',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: require('./rules.webpack'),
  },
}