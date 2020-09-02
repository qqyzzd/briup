let arr = [10,8,5,44,88]
let res1 = arr.find((item,index,arr)=>{
    return item < 10
})
console.log(res1)

let res2 = arr.findIndex((item,index,arr)=>{
    return item < 5
})
console.log(res2)