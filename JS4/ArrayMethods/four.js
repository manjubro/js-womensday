let contacts = [{ id: 101, name: "Rahul" },
{ id: 102, name: "Sonia" },
{ id: 103, name: "Priyanka" }
]
let names = contacts.forEach((singleContact) => {
    return singleContact.name;
})
console.log(names)