// //es5
// let obj = {
//     name:'tom',
//     sayName(){
//         console.log(this)
//     }
// }

// es6
let obj ={
    name :'tom',
    sayName:()=>{
        console.log(this)
    }
}
//调用对象中的方法
obj.sayName()

//es5
// let test = function(){
//     console.log(arguments)
// }

//es6
let test = ()=>{
    console.log(arguments)
}
test()