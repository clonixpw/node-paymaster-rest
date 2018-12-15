const rest = require('../rest')
/**
 * confirmPayment - Подтверждение платежа
 * Этот метод используется для завершения платежа, по которому были холдированы средства. В некоторых случаях возможно указать для списания меньшую (чем сумма холда) сумму.
 *
 * @param  {string|number} paymentID - Идентификатор платежа в системе PayMaster (поле LMI_SYS_PAYMENT_ID)
 * @param  {number} amount - Реальная сумма списания 
 * @return {Promise}
 */
module.exports = function confirmPayment (paymentID, amount) {
  return rest('confirmPayment', 'Payment', {paymentID, amount}, [paymentID, amount])
}
