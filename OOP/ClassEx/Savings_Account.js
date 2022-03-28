class Bank {
    min_Bal = 500;
    open_Account() {
        return "Account Opened Successfully"
    }
}
let c1 = new Bank();
let message = c1.open_Account();
console.log(message)
/* console.log(new Bank().open_Account()) */