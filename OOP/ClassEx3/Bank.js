class Bank {
    min_Bal;
    constructor(bal) {
        this.min_Bal = bal;
        console.log("First Cosntr execute")
    }
}
let c1 = new Bank(500)
console.log(c1.min_Bal)
console.log(c1.acc_Bal)
