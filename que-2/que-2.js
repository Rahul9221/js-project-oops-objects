class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    intro() {
        document.getElementById('a').innerHTML=(`name = ${this.name},email = ${this.age}`)
    }
}
class Father extends Person{
    constructor(name){
        super(name, 60);
    }
    intro() {
        document.getElementById('b').innerHTML=(`name = ${this.name},</br>email = ${this.age}`)
    }
}
class Son extends Person{
    constructor(name){
        super(name, 20);
    }
    intro() {
        document.getElementById('c').innerHTML=(`name = ${this.name},</br>email = ${this.age}`)
    }
}

let a = new Father("harsh bhai");
a.intro ();

let b = new Son("manan");
b .intro ();