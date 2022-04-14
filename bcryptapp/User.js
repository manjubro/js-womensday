const bcrypt = require('bcryptjs');; //es5
//import bcrypt from 'bcryptjs'  //es6

let user = { email: "Rahul", password: "2023PM", cc: '12341234' }

let salt = bcrypt.genSaltSync(5);
let newPassword = bcrypt.hashSync(user.password, salt)

console.log(newPassword)
console.log(user)
user = { ...user, password: newPassword }
console.log(user)
/* if (user.password == "$2a$10$49GVmntFK485o1np7jmISONwp5kiIC7R9JL.oFEfqzxxFDi5I3Zeq") {
    console.log("success")
}
else {
    console.log("Login failed")
} */
let flag = bcrypt.compareSync("2023PM1", user.password)
console.log(flag)
