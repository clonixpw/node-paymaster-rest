const assert = require('assert')
const rest = require('../rest')
const errors = require('../errors')

/**
 * cancelPayment - Отмена платежа
 * Этот запрос используется для отмены холда и разблокирования средств плательщика
 *
 * @param  {string|number} paymentID - Идентификатор платежа в системе PayMaster (поле LMI_SYS_PAYMENT_ID)
 * @param  {nubmer} error - Опциональный параметр. Код ошибки из списка Коды ошибок.
 * @return {Promise}
 */
module.exports = function cancelPayment (paymentID, error) {
  if (error) {
    assert(errors.find(({code}) => code === error), `Error code ${error} is not from error list`)
  }
  return rest('cancelPayment', 'Payment', {paymentID, error}, [paymentID, error || ''])
}
