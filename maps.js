//map() array method
//Array which can then be used to acces each array element and return its value for each iteration
//For you to return something, use a function
const siz = ["Fest", "Nelly", "Fatma", "Pearl"]
const new_siz = siz.map(function(siz){
    return siz
})
console.log(new_siz) 
///[ 'Fest', 'Nelly', 'Fatma', 'Pearl' ]
siz.push('Millie')
console.log(siz)
console.log(new_siz)

//ANOTHER EXAMPLE
const intialprices =[
    {image :'😊', name: "ugali", price:400},
    {image: '🤣', name :'chapati', price:500}
]
intialprices.map(item => console.log(item))
// ///{ image: '😊', name: 'ugali', price: 400 }
// { image: '🤣', name: 'chapati', price: 500 }
intialprices.map(item => console.log(typeof item))
// object
// object

intialprices.map(item => console.log(item.price))
/// 400 500

intialprices.map(item => console.log(item.price[500]))



