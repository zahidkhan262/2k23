// how to store a value  in a variable 
import { data } from './data.js'
// 

// exercise one


let a = 12
console.log(typeof (a)) //number

let b = "hello world";
console.log(typeof (b)) //string


let isUser = false;
console.log(typeof (isUser)) //boolean

let isValue = null;
console.log(typeof (isValue)) // object

let isDefine
console.log(typeof (isDefine)) // undefined



let largeNumber = BigInt("0x1ffffffeeeeeeeeef");
console.log(typeof (largeNumber)) // bigint


let isObj = {};
console.log(typeof (isObj)) // object

let isArr = [];
console.log(typeof (isArr)) // object



// exercise two

// convert string to integer
let strToInteger = '15'
strToInteger = +strToInteger

console.log(typeof strToInteger, "integer")

// convert Intger to string

let intToString = 12;

console.log(typeof (intToString + ""), "stringg")

console.log(typeof parseInt("123Hello"));


let arr1 = [11, 2, 6, 9, 10, 12]

var val = 13;

let findClosest = (target) => {
    return arr1.reduce((prevElement, currEle) => {
        // debugger
        return (Math.abs(currEle - target) < Math.abs(prevElement - target) ? currEle : prevElement)
    })
}
console.log(findClosest(10), "close")

// exercise three

// string built in methods

let str = "today we are learning javascripts"
// toUppercase(),toLowercase(), charAt()

console.log(str.charAt(31), "charAt")
console.log(str.charCodeAt(3), "charCodeAt") //unicode ascii code
console.log(str.includes('we'), "includes")
console.log(str.indexOf('a'), "indexOf")
console.log(str.lastIndexOf('s'), "lastIndexOf")
console.log(str.length, "lenght")
console.log(str.match('we'), "match")
// console.log(str.matchAll(['we']), "matchAll")



const obj = {
    firstName: 'zahid',
    lastName: 'khan',
    age: 24,
    detail: function () {
        console.log(`my name is ${this.firstName} ${this.lastName} and i am ${this.age} years old`)
    }
}
console.log(obj.detail())

let searchData = document.getElementById('search')

// const data = require('./data')
var val;

function cardData() {
    var card;
    console.log(data, "data")
    data.forEach((data) => {
        card += `
                <div class="card">
                <div class="cardhead">
                <div class="logo">${data.id}</div>
                <div class="title">${data.title}</div>
                </div>
                <div class="cardbody">
                    <img src=${data.img_path}  alt="">
                    </div>
                    </div>
                    `

    })
    document.getElementById('show').innerHTML = card
}
cardData()

// searchData.onkeyup = function () {

searchData.addEventListener('keypress', function () {
    val = this.value
    console.log(val, "searching")
    const filterData = data?.filter((data) => {
        if (val == '') return console.log("zahid")
        if (data.title.toLowerCase().match(val.toLowerCase())) {
            return data
        }
    })

    console.log(filterData, "filter")
    var card;
    filterData?.forEach((data) => {
        card += `
                    <div class="card">
                    <div class="cardhead">
                        <div class="logo">${data.id}</div>
                        <div class="title">${data.title}</div>
                    </div>
                    <div class="cardbody">
                        <img src=${data.img_path}  alt="">
                    </div>
                    </div>
                    `

    })
    document.getElementById('show').innerHTML = card

})







// calculator with if else
let user1 = 5
let user2 = 3
let total;
const calculator = "Divide"

if (calculator === "Add") {
    console.log(total = user1 + user2)
} else if (calculator === "Sub") {
    console.log(total = user1 - user2)
} else if (calculator === "Multiply") {
    console.log(total = user1 * user2)
} else if (calculator === "Divide") {
    console.log(total = user1 / user2)
} else {
    console.log("you are enter invalid input")
}

// calulator with switch case

switch (calculator) {
    case 'Add':
        console.log(total = user1 + user2);
        break;
    case 'Sub':
        console.log(total = user1 - user2);
        break;
    case 'Divide':
        console.log(total = user1 / user2, "switch");
        break;
    case 'Multiply':
        console.log(total = user1 * user2);
        break;
    default: console.log("you are enter invalid input")
}

// ternary operator
const age = 22;

(age >= 18 ? console.log('Eligiable for vote') : console.log('not Eligiable for vote'))

// how to concat two value with the help of back ticks or template litral

let firstName = "Zahid"
let lastName = "khan"

console.log(`${firstName} ${lastName}`)


// loop in javascript
// there are 5 loops
// do while loop
//while loop
//for loop
// for in loop
// for of loop

let n = 10

// while (n <= 10) {
//     console.log(n)
//     n++
// }
for (var i = 1; i <= 10; i++) {
    console.log(user1 + "*" + i + "=" + i * user1)
}
let arr = [11, 2, 6, 9, 10, 12]
var sum = 0
for (let data of arr) {
    if (data > 10) {
        console.log(data, "data")
        sum += data
    }
}
console.log(sum, "sum")


let obj1 = {
    name: 'zahid',
    address: 'noida',
    phone: 99999
}

for (let mydata in obj1) {
    console.log(mydata, ":", obj1[mydata])
}








