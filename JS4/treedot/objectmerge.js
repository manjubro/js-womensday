let user = { id: 101, name: "Rahul Gandhi", email: 'Rahul@gmail.com' }
let details = { email: "Rahul@pm.com", loc: ['Wayanad', 'Noida'] }

let userDetails = { ...user, ...details }

console.log(userDetails)