// Uuse for repitition
// while loop
//while(condition){
//     code
// }
let continue_working = false;
let my_contract = 10
function workingstatus(no_of_years) {
    while (no_of_years <= my_contract) {
        continue_working = true
    }
    return continue_working
}
console.log(workingstatus(17))

//Do while loop
//Execute the programme while checking the truthy of the condition.

let i = 0
do{
    alert(i)
    i++
}
while(i < 10)

//For loop
// for( begin; CSSConditionRule; step)
// {
//     loop body

// }
frameElement(let i = 0; i < 10; i++){
    alert(i)
    if ( i===10){
        console.log("program completed")
    }
}