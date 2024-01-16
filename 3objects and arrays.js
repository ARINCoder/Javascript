//Anything that holds data

//string
let firstName = 'Marvin'
console.log(firstName)

//Number
let age = 89
//Adding data into objects

var person = {}

person:firstName = "JUDE"
person:secondName = "Masika"
person:age = 24

//character
let myChar = 'A'

//Array
let marks = ['Marvin', age, { location: 'Nairobi' }, [1, 2, 3]]
console.log(marks)

//Objects
const MarvinInfo = {
    //key:value
    first_name: 'Marvin', //string
    age: 22, //number
    marks: [23, 34, 56], //array
    govInfo: {
        location: 'Nairobi',
        IdNo: 234234
    },
    meangrade: function(meangrade){

    }
}
console.log(MarvinInfo)

//Arrays of objects
const car = [
    {
        brand: 'Mercedes',
        Model: 'Mercedes-C550'
    },
    {
        brand: 'Subaru',
        Model: 'Forester'
    },
    {
        brand: 'Nissan',
        model: 'Nissan-Note'

    }
]
console.log(car)

//Displaying a specific object from specific data.
console.log(car[1])
// { brand: 'Subaru', Model: 'Forester' }

//Displaying a model or a brand
//To access data in an obj use a dot notation
console.log(car[1].Model)

//To access data in an obj use a dot notation
const Name = {
    firstname: 'Marvin',
    secondname: 'Githambo'
}
console.log(Name.firstname)



console.log(person)


//To access data in an obj using a key as an index
//The object.keys() static method returns an array oof a given objec's own enumerable string--keyed property names

console.log(Object.keys(Name["firstname"]))

//Passing the key method
console.log(Name["secondname"])
//  Githambo

//thirdway is to use a function that returns an array of a given object(Object.keys)
console.log( Object.keys(Name))
// [ 'firstname', 'secondname' ]


var obj = {
    firstname: 'Marvin',
    secondname: 'Githambo',
    key: function(n){
        return this[Object.keys(this)[n]]
    }
}
console.log(obj.key(1)) 
// Githambo

//functions as objects
const hero ={
    name: "Thanos",
    phrase: "Boom",
    speak: function(){
        return this.phrase
    }
}
console.log(hero.speak())
// Boom

