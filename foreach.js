//Unlike map(), foreach() does not return an new array.
//Example
[1,2,3,4,5,5,6,7,8].forEach(function(item){
    console.log(item * 10)
})
// 10, 20, 30, 40, 50, 50, 60, 70, 80
//If return for forEach() It returns undefined. It doesnot mutate the array, but the cllaback can if programmed to do so.

var images =[
    {height : 10, width :20},
    {height: 23, width :30}
];
const calculateareafunction = ({width, height}) =>{
    return height * width
}

//push the areas in the new array
const imageareas = () => {
    images.forEach(obj => areas.push(calculateareafunction(obj)))
    console.log(areas)
}
imageareas()

//filter() method
const intialprices =[
    {image :'😊', name: "ugali", price:400},
    {image: '🤣', name :'chapati', price:500}
]
const filtereArray = intialprices.filter(function(filteredObject)
{ return filteredObject.price > 450
})
console.log(filtereArray)



