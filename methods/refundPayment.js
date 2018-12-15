const rest = require('../rest')

/**
 * refundPayment - Этот запрос используется для осуществления возврата по платежу.
 *
 * @param  {type} paymentID  Идентификатор платежа в системе PayMaster
 * @param  {type} amount     Сумма возврата
 * @param  {type} externalID Идентификатор возврата в системе продавца, не обязательный (допускается не уникальное значение).
 * @return {Promise}            description
 */
module.exports = function getPayment (paymentID, amount, externalID) {
  return rest('refundPayment', 'Refund', {paymentID, amount, externalID}, [paymentID, amount, externalID || ''])
}
