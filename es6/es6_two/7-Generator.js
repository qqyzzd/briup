// Generator
// function和函数名之间有一个*
// 函数内部使用yield
// yield 阻塞
// Generator函数的返回值是一个遍历器对象
// function* test(){
//     yield 'hello';
//     yield 'world';
//     yield 'nice';
//     return 'end';
// }
// let res = test()
// console.log(res.next()) //value: 'hello', done: false
// console.log(res.next()) //value: 'hello', done: false
// console.log(res.next()) //value: 'hello', done: false
// console.log(res.next()) //value: 'hello', done: false


let axios = require('axios')
function* main() {  
	var result = yield request("http://39.105.67.242:5588/customer/findAll");  
	console.log(result.data);
}
function request(url) {  
    // response参数会当做上一个yield表达式的返回值
    // 纯粹的ajax
	axios.get(url).then(function(response){it.next(response);});
}
var it = main();
it.next();
