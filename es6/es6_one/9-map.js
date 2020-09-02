// const map = new Map([['name','张三'],['作者','author']]);
// console.log(map)
let map = new Map()
//添加数据
map.set('name','tom')
map.set('age',12)
// //has 
// console.log(map.has('a'))
//删除
map.delete('name')
console.log(map)
// //清空
// map.clear(map)
// console.log(map)
console.log(map.size)