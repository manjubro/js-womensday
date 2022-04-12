let emp = {
    id: 101,
    name: "Rahul",
    getDetails: function () {
        return "Get Details"
    },
    getMoreDetails: () => {
        return "Get More Details"
    }
}
console.log(emp.id)
console.log(emp.name)
console.log(emp.getDetails())
console.log(emp.getMoreDetails())
