let arr = [31,43,65,543,76]
let keys = arr.keys()
let values = arr.values()
let entries = arr.entries()
console.log(keys,values,entries)
for(let key of keys){
    console.log(key)
}
for(let value of values){
    console.log(value)
}
for(let entrie of entries){
    console.log(entrie)
}

//判断arr是否含有55
let res = arr.includes(55)
console.log(res)

