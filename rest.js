const got = require('got')
const assert = require('assert')
const sha1 = require('./hash-sha1')
const {PAYMASTER_LOGIN: login, PAYMASTER_PASSWORD: password} = process.env
assert(login, 'env PAYMASTER_LOGIN is required')
assert(password, 'env PAYMASTER_PASSWORD is required')

function handleRequest (field, {body}) {
  const {ErrorCode} = body
  if (0 === ErrorCode) {
    return body[field] || body
  }
  const {Message} = body
  const error = new Error(Message)
  error.code = ErrorCode
  throw error
}

module.exports = async function rest (method, field, params, hashParams) {
  const nonce = new Date().getTime().toString(36)
  const hash = sha1(login, password, nonce, ...hashParams)
  const url = `https://paymaster.ru/partners/rest/${method}`
  const body = {
    login,
    nonce,
    hash,
    ...params
  }
  return handleRequest(field, await got.post(url, {form: true, json: true, body}))
}
