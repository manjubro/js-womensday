class Bank {
    acc_Id;
    acc_Name;
    constructor(a, b) {
        this.acc_Id = a;
        this.acc_Name = b;
        /*  console.log(a)
         console.log(b) */
    }
}
class Savings_Account extends Bank {
    constructor(id, name, amount) {
        this.acc_Bal = amount;
        super(id, name);

    }
}

let c1 = new Savings_Account(101, "Rahul Gadnhi", 45000);
console.log(c1)
class Current_Account { }