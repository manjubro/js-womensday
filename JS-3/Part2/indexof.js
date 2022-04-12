let ids = [101, 101, 102, 103, 102, 103, 102, 102];
let new_ids = []

for (id of ids) {
    if (new_ids.indexOf(id) == -1) {
        new_ids.push(id)
    }
}
console.log(new_ids)