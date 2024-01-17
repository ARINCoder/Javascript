// Question one
//Open in dedault broswer console for the results.
let randomNumber = Math.floor(Math.random()* 10 + 1)
while(true) {
    let guessedNumber = prompt('Enter a number between 1 and 10');
    if(randomNumber === guessedNumber) {
        alert('Good work')
    } else {
        alert('Not matched')
    }
}



//Question2
//This is not my full understnding of the question but an attempt.
//Trying to comapare with whatever we did in class.

function exams_status( total_marks, is_exams)
{
    if(is_exams){
        return total_marks >= 90;
    }
    return(total_marks >= 89 && total_marks <= 100);
}
console.log(exams_status("78", ""))
//Results:false 
//Question2
//This is not my full understnding of the question but an attempt.
//Trying to compare with whatever we did in class.

function exams_status( total_marks, is_exams)
{
    if(is_exams){
        return total_marks >= 90;
    }
    return(total_marks >= 89 && total_marks <= 100);
}
console.log(exams_status("78", ""))
//Results:false




///Question3
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
