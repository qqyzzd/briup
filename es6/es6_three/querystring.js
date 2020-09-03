let querystring = require('querystring')
let obj = {
    name:'larry',
    age:12
}
let res = querystring.stringify(obj)
// console.log(res)
console.log(querystring.parse(res))