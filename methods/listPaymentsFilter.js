const rest = require('../rest')
const {PAYMASTER_ID} = process.env

/**
 * listPaymentsFilter - Этот запрос используется для получения списка платежей, удовлетворяющих условиям поиска
 *
 * @param  {string} {accountID номер учетной записи в системе PayMaster. Его можно узнать из URL страницы "Учетная запись" в личном кабинете. Параметр accountID можно не указывать, если у вас всего одна учетная запись
 * @param  {string} siteAlias идентификатор сайта (LMI_MERCHANT_ID). Если указан, то будут возвращены только платежи данного сайта
 * @param  {string} periodFrom начало периода (yyyy-MM-dd), часовой пояс UTC. Если указан, то будут возвращены платежи только после указанной даты
 * @param  {string} periodToконец периода (yyyy-MM-dd), часовой пояс UTC. Если указан, то будут возвращены платежи только до указанной даты
 * @param  {string} invoiceID номер счета. Если указан, то будут возвращены платежи только с таким номером счета.
 * @param  {string} state} Состояние платежа. Если указано, то будут возвращены только платежи с указанным состоянием
 * @return {Promise} { Payments: Список платежей, Overflow: "true", если в ответе приведены не все платежи, удовлетворяющие фильтру. Если вам нужны все платежи, сузьте область поиска. }
 */
module.exports = function listPaymentsFilter ({accountID, siteAlias, periodFrom, periodTo, invoiceID, state} = {}) {
  if (!siteAlias) {
    siteAlias = PAYMASTER_ID
  }
  return rest('listPaymentsFilter', 'Response', {accountID, siteAlias, periodFrom, periodTo, invoiceID, state}, [accountID || '', siteAlias || '', periodFrom || '', periodTo || '', invoiceID || '', state || ''])
}
