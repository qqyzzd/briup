function Animal(name,age){
    this.name = name
    this.age = age
}
function Dog(name,age,gender){
    // 借用Animal构造函数
    Animal.apply(this,arguments);
    this.gender = gender
}

Dog.prototype = new Animal()
var dog = new Dog('旺财',6,'male')

console.log(dog instanceof Animal)