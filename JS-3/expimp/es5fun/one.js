function add() {
    console.log("Addition")
}
class Test {
    constructor(a) {
        console.log("Constructor")
        console.log(a)
    }
}
module.exports = { add, Test }