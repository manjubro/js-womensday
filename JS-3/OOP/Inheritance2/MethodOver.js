class Bank {
    open_Account() {
        console.log("Bank Class - open_Account() method");
    }
}
class Savings_Account extends Bank {
    constructor() {
        super();
    }
}

let c1 = new Savings_Account();
c1.open_Account()