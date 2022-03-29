class Account {
    acc_Bal;
    constructor(a, b, c) {
        this.acc_Id = a;
        this.acc_Name = b;
        this.acc_Bal = c;

        console.log("Account class Constructor executing auto")
    }


}
let c1 = new Account(101, "Rahul Gandhi", 45000);
console.log(c1)
