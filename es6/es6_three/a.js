let a = 11
let test=function(r){
    console.log(r)
}
// 导出
// module.exports.a = a
// module.exports.test = test
module.exports.obj = {
    a:a,
    test:test
}