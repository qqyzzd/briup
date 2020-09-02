class Animal{
    //构造函数
    constructor(age,name){
    //实例属性
        this.age = age
        this.name = name
    }  
    //实例方法
    sayDog(){
        console.log('sayDog')
    }
    //静态方法
    static sayAnimal(){
        console.log('sayAnimal')
    }
}

Animal.test = 'hello'
console.log(Animal.test,'--------')

let dog = new Animal('5','旺财')
dog.sayDog()
Animal.sayAnimal()
console.log(dog)
