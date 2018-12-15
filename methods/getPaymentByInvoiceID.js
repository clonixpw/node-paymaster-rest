const rest = require('../rest')
const {PAYMASTER_ID} = process.env

/**
 * getPaymentByInvoiceID - Этот запрос используется для получения информации о платеже по его номеру в системе учета продавца.
 *
 * @param  {string} invoiceID - Номер счета (поле LMI_PAYMENT_NO)
 * @param  {string} siteAlias - Идентификатор сайта (поле LMI_MERCHANT_ID)
 * @return {Promise}
 */
module.exports = function getPaymentByInvoiceID (invoiceID, siteAlias = PAYMASTER_ID) {
  return rest('getPaymentByInvoiceID', 'Payment', {invoiceID, siteAlias}, [invoiceID, siteAlias])
}
