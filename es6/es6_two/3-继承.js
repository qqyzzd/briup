// Animal 父类
class Animal{
    constructor(name){
        this.name = name
    }
    say(){
        console.log('say')
    }
    static sayMy(){
        console.log('sayMy')
    }
}
// 子类

class Dog extends Animal{
    constructor(name,age){
        // super是函数,调用父类的构造函数
        super(name)
        this.age = age
    }
    // 实例
    Dogsay(){
        // super ---> 对象
        super.say()
    }
    static DogMy(){
        super.sayMy()
    }
}
let dog = new Dog('旺财','6')
// dog.say()
// dog.Dogsay()
// Dog.sayMy()
// Dog.DogMy()
// console.log(dog)
console.log(Dog.__proto__===Animal)
console.log(Dog.prototype.__proto__ === Animal.prototype) 