// let [a,b,c] =[1,2,3]
// console.log(a,b,c)

// let [a,b,...c] = [1,2,3,4]
// console.log(a,b,c)

// let [a,b,c,d,e] = [1,2,3]
// console.log(a,b,c,d,e)

// let [a,[b],d] = [1,[2,3],4];
// // let [a,b,d] = [1,[2,3],4];
// console.log(a,b,d)

// let [a,b = '22'] = [10,20]
// let [a,b=22] = [10]
// console.log(a,b)

// //数组嵌套对象
// let [a,{name:user}] = ['hello',{name:'tom'}]
// console.log(a,user)

// //对象嵌套数组
// let {test} = {test:[1,2,3]}
// console.log(test)

// let obj={ p :['Hello',{ y :'World'}]};
// let { p :[x,{y : w}]} = obj; 
// console.log(x,w)


// let {a,b = 4} = {a:1,b:5}
// console.log(a,b)
 
// let [a,b,c] = '123'
let {length:len} = '123'
console.log(len)