## Install

```
$ npm install paymaster-api
```

## Usage
 1. define environment variables
   - PAYMASTER_LOGIN(with role Операционист or Бухгалтер)
   - PAYMASTER_PASSWORD
   - PAYMASTER_ID(optionally)

 2. require paymaster-api module
```js
const paymaster = require('paymaster-api');
```

 3. run any method from https://paymaster.ru/docs/restapi.html
 ```js
 paymaster.listPaymentsFilter()
  .then(({Overflow, Payments}) => {
    console.log({Overflow, Payments})
  })
  .catch(error => {
    console.error(error)
    process.exit(error.code)
  })
 ```
