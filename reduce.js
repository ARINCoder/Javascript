
//reduce() method
//Getting the total value of the elements.
const reducedValues = [1,2,3,4,5].reduce((prev, next) =>{
console.log(`prev: ${prev}, next:${next}`)
 return prev + next
})
//Use map reduce to get the total of my dinner
let mydinner = [
    {image :'😊', name: "ugali", price:400},
    {image: '🤣', name :'chapati', price:500}
];
const total = mydinner.
                       map(foodobj => foodobj.price)
                       .reduce((prev, next) => {
                        return prev + next
                       }, 0)
console.log(total)
