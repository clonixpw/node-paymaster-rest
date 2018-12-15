const rest = require('../rest')
/**
 * getPayment - Проверка по идентификатору платежа
 * Этот запрос используется для получения информации о платеже по его номеру в системе PayMaster.
 *
 * @param  {string|number} paymentid - Идентификатор платежа в системе PayMaster (поле LMI_SYS_PAYMENT_ID)
 * @return {Promise}
 */
module.exports = function getPayment (paymentid) {
  return rest('getpayment', 'Payment', {paymentid}, [paymentid])
}
