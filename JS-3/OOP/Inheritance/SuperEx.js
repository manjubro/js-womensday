class Parent {
    assets;
    constructor(a) {
        this.assets = a;
        console.log("Parent")
    }
}
class Child extends Parent {
    constructor(amount) {
        super(amount);
        console.log("Child")
    }
}
let c1 = new Child(50000);
console.log(c1)