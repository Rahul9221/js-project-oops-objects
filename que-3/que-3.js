class Employee {
    constructor(name) {
        this.name = name;
    }
    intro() {
        document.getElementById('a').innerHTML=(`Hi my name is ${this.name}, & i'm a Employee`)
    }
}
let a = new Employee("jayesh");
a .intro ();