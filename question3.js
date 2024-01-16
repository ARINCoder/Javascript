let obj ={};
//for this we assign the string 'one' to the property with key 1
 obj[1] = 'one';
 console.log(obj[1])
//The output:one
// Assigns the string 'string one' to the property with key '1' (a string).
 obj['1'] = 'string one'
console.log(obj['1'])
//The output:string one
//Outputs False because it compares the values of the two properties using strict comparison
console.log(obj[1] === obj['1']);
//Results is true. /
//Though according to my undersatnding the result should be FALSE.
//This is because one is a key type the other is a string content.
