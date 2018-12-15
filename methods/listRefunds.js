const rest = require('../rest')

/**
 * listRefunds - Этот запрос используется для получения списка возвратов за период
 *
 * @param  {string} {accountID номер учетной записи в системе PayMaster. Его можно узнать из URL страницы "Учетная запись" в личном кабинете. Параметр accountID можно не указывать, если у вас всего одна учетная запись
 * @param  {type} paymentID        Идентификатор платежа. Если присутствует, то выводятся возвраты только по этому платежу
 * @param  {type} periodFrom       Начало периода (yyyy-mm-dd). Если отсутствует, то ограничения снизу нет
 * @param  {type} periodTo         Конец периода, включительно (yyyy-mm-dd). Если отсутствует, то ограничения сверху нет
 * @param  {type} externalID} = {} Идентификатор возврата в системе продавца, не обязательный
 * @return {Promise} { Payments: Список возвратов. Каждый объект - такой же, как и объект Response первого запроса, Overflow: true, если выдан не весь список возвратов. В этом случае следует указать более узкий диапазон для поиска }
 */
module.exports = function listRefunds ({accountID, paymentID, periodFrom, periodTo, externalID} = {}) {
  return rest('listRefunds', 'Response', {accountID, paymentID, periodFrom, periodTo, externalID}, [accountID || '', paymentID || '', periodFrom || '', periodTo || '', externalID || ''])
}
