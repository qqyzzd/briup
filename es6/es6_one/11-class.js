class Animal{
    //构造函数
    constructor(name){
        this.name=name
    }
    //实例方法
    toSay(){
        console.log('实例方法')
    }
    //静态方法
    static mySay(){
        console.log('静态方法')
    }
}
//cat是Animal的一个实例
let cat = new Animal('tom')
cat.toSay()
console.log(cat)
Animal.mySay()
// let arr new Array()
// pop push sort
//Array.from()