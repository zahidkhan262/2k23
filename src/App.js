// how to store a value  in a variable 


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

//find smallest number 
let arr = [11, 2, 6, 9, 10, 12]

const obj = {
    firstName: 'zahid',
    lastName: 'khan',
    age: 24,
    detail: function () {
        console.log(`my name is ${this.firstName} ${this.lastName} and i am ${this.age} years old`)
    }
}
console.log(obj.detail())

let showData = document.getElementById('show')
let searchData = document.getElementById('search')

import { data } from './data.js'
// const data = require('./data')
var val;
var card;

function cardData() {


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


    // searchData.onkeyup = function () {

    searchData.addEventListener('keypress', function () {
        val = this.value
        console.log(val, "searching")
        const filterData = data?.filter((data) => {
            if (data.title.toLowerCase().match(val.toLowerCase())) {
                return data
            }
        })

        console.log(filterData, "filter")

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

    })
    showData.innerHTML = card

}
cardData()







