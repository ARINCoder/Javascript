// Arrays are passed by reference and not by value
let marvin_info =[ 22, "Marvin", [45,67,89],
 { id_number: 123213423, location: "Nairobi"},
  function name(){return grade} ]
// Access elements in an array
console.log(marvin_info[1])
//Print thr whole array
console.log(marvin_info)

//Changing elememts in an Array
marvin_info[1] = "Jude"
console.log(marvin_info[1]) //Jude

//Add a new value at the end of 
marvin_info.push("Dedan Kimathi University")
console.log(marvin_info)

//pop() remove a value from the end of an array
marvin_info.pop()
console.log(marvin_info)
// [
//     22,
//     'Jude',
//     [ 45, 67, 89 ],
//     { id_number: 123213423, location: 'Nairobi' },
//     [Function: name]
//   ]


// shift() remove element/value at the begining of the array
marvin_info.shift()
console.log(marvin_info)
// [
//     'Jude',
//     [ 45, 67, 89 ],
//     { id_number: 123213423, location: 'Nairobi' },
//     [Function: name]
//   ]
  
// indexOf() get an index of a particular value in array.
const judeInfo = [ "Jude", "Masika", 45]
judeInfo.push(123425554)
console.log(judeInfo)
//[ 'Jude', 'Masika', 45, 123425554 ]


//get IndexOf id
console.log(judeInfo.indexOf(123425554))
console.log(judeInfo.indexOf("Masika"))

//Joining arrays using concat()
const samuel_mugane = [ "Samuel", 21424]
const parmenas_mk = ['Parmenas', 88745]
console.log(samuel_mugane.concat(parmenas_mk))
///[ 'Samuel', 21424, 'Parmenas', 88745 ]



//The join() method that creates and returns a new string by concatenating all of the elementsin this array
const months =[ "Jan", "Feb", "MArch","April"]
console.log(months.join()) // Jan,Feb,MArch,April

//Checking the type of data structure
console.log(typeof months.join())

//Remove commas but not spaces
console.log(months.join(""))  /// JanFebMArchApril

//Remove commas and adding spaces
console.log(months.join("  ")) /// Jan  Feb  MArch  April

 
//Array.prototype.splice()
const brother =[ "Sam", "Jude","Par"]
brother.splice(1, 0, "Mar") //The 1 is the starting index , 0 is the end elememt(remove 0 zero elemts and pass "Mar")
console.log(brother)
// Remove 2 elements at index and add Bon.
brother.splice(1, 2, "Bon")
console.log(brother)
///[ 'Sam', 'Bon', 'Par' ]
//Remove value all the 3 indices
console.log(brother.splice(1,3))

//Array.prototype.slice()
//Returns a shallow copy of a portion of an array into a newe array object slev=cted from the start to end(end not included) where start and ed represrent the index of items in that array
const siz = ["Fest", "Nelly", "Fatma", "Pearl"]
console.log(siz.slice(1,3))
/// [ 'Nelly', 'Fatma' ]
// NOTE THAT THE END WILL NOT BE INCLUDED.

//Array.prototype.includes()
//Instances determines whetehr an array includes a certain element.
console.log(siz.includes("Millie"))
//False since "Millie" is not included in the siz array










