class School {
    constructor(name, email, contact, field) {
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.field = field;
    }
    intro() {
        document.getElementById('a').innerHTML=(`name = ${this.name},</br>email = ${this.email}</br>contact = ${this.contact}</br>field = ${this.field}`)
    }
}
class students extends School{
    constructor(name, email, contact, field){
        super(name, email, contact, field);
    }
    intro() {
        document.getElementById('a').innerHTML=(`name = ${this.name},</br>email = ${this.email}</br>contact = ${this.contact}</br>field = ${this.field}`)
    }
}
class peon extends School{
    constructor(name, email, contact, field){
        super(name, email, contact, field);
    }
    intro() {
        document.getElementById('b').innerHTML=(`name = ${this.name},</br>email = ${this.email}</br>contact = ${this.contact}</br>field = ${this.field}`)
    }
}
class teacher extends School{
    constructor(name, email, contact, field){
        super(name, email, contact, field);
    }
    intro() {
        document.getElementById('c').innerHTML=(`name = ${this.name},</br>email = ${this.email}</br>contact = ${this.contact}</br>field = ${this.field}`)
    }
}

let a = new students("rahul goswami","rggowami14@gmail.com",6325988745,"Teacher");
a.intro ();

let b = new peon("jay patel","jay123@gmail.com",3699855454,"student");
b .intro ();

let c = new teacher("hardik","hardik223@gmail.com",254748789,"peon");
c .intro ();