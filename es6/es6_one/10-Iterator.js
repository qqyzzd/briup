let s = new Set([10,20,30,40,50,60])
console.log(s)

let values = s.values()
console.log(values.next())  //{ value: 当前值, done:false 没有结束  }
console.log(values.next())
console.log(values.next())
console.log(values.next())
console.log(values.next())
console.log(values.next())
console.log(values.next())