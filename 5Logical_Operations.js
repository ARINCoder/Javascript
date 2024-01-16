//In Javascript we have conditions, and should always results to TRUE.
//If statement to use a condition

let showering = true
if (showering) {
    alert("you are a good body")
}
//It gives an alert saying "you are a good boy"

let eating = false
if (eating) {
    alert('You are hungry')
}
//will return undefined and not alert anything.

//To solve the truth clause, else. False is used to excecute the else.
let hasID = true
if (hasID) {
    alert('Enter the library')
} else {
    alert('Access denied')
}
// alert('Enter the library')

// else ... if for multiple condtions

let marks = 0
let grade = ''
// function(parameter) {
//     return parameter condition
// }
function mygrade(marks) {
    if (marks > 89) {
        grade = 'A'
    } else if (marks > 70) {
        grade = 'B'
    }
    else if (marks > 50) {
        grade = 'C'
    }
    else if (marks > 30) {
        grade = 'D'
    }
    else {
        grade = 'E'
    }
    return grade
}
console.log(mygrade(70)) //B


// || operation
let result = '2'||'3'
if(result === 2|| result === 3){
    alert('true')
} else{
    alert('false')
}
//Results{FALSE}

//ES6? let result = condition? value1 : value2;
//acceessing the cinema hall, age > 18
let age : 20
let allowedaccess = (age > 18) ? console.log('Allowed'):console.log('Not Allowed')
console.log(allowedaccess)

// && - truthy or || --false/either
//single equal sign is used for assignment
//two equal assignment or double == is used to check the truthy of something
//three equal signs === checks for bith the thruthy of something and the type of that value.
let age = 0
let gender = ''
let info = {
    age,
    gender
}
let accessallowed = '' // not allowed or allowed
function accessmalehall( info ){
    if( age >= 18 && gender === 'male'){
        accessallowed = 'ALLOWED'
    }
    else{
        accessallowed = 'Not allowed'
    }
    return accessallowed
return
}
console.log(accessmalehall({age: 12, gender: 'female'}))

