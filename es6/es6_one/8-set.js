// //s是Set的实例
// let s = new Set()
// //添加
// s.add(10)
// s.add(20)
// s.add(10)
// //删除
// s.delete(20)
// //清除
// // s.clear()
// console.log(s)
// console.log(s.has(10))
// //size set对象中有多少个数据
// console.log(s.size) 


let arr = [10,20,20,20,30,30,40,50,50]
// let s = new Set(arr) 
// console.log(s)
// let res = [...s]
// console.log(res)
console.log([...new Set(arr)])