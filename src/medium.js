// deeep and shallow copy

let arr2 = {
    fruits: ['apple', 'banana', 'orange'],
    total: 3,
}
const item = { ...arr2 }
console.log(item.total = 4)
console.log(arr2.total, "arr2")
console.log(item.fruits.pop())
console.log(arr2.fruits, "arr2")
// const deep = JSON.parse(JSON.stringify(arr2))
// console.log(arr2.fruits.pop())
// console.log(deep.fruits, "deep")