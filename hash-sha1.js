const crypto = require('crypto')

module.exports = function (...args) {
  return crypto.createHash('sha1')
    .update(args.join(';'))
    .digest('base64');
}
