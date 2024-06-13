class circle{
    constructor(name,pi,r,ans){
        this.name=name;
        this.pi=pi;
        this.r=r;
        this.ans=pi*r*r;
    }
    intro() {
        document.getElementById('a').innerHTML=(`name = ${this.name},</br>r=${this.r} than area of circle is ${this.ans}`)
    }
}
class rectangle{
    constructor(name,w,h,ans){
        this.name=name;
        this.w=w;
        this.h=h;
        this.ans=w*h;
    }
    intro() {
        document.getElementById('b').innerHTML=(`name = ${this.name},</br>r=${this.r} than area of circle is ${this.ans}`)
    }
}
let a = new circle("circle",3.14,5);
a.intro ();
let b = new rectangle("rectangle",10,5);
b.intro ();