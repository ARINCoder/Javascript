//Maps are used to store any type of keys unlike objects.
//Methods in maps.
//new map() - creates a new map.
//map.set(key, value) - stores the value by its key
//map.get(key) - getting the value by key
// map.has(key) - Returns TRUE if it has key else FALSE
//map.delete(key) - delete a value using its key
//map.clear() - Removes everything on the map
//map.size() - the size of that map

//The key/value must be in quotes, unless it is a number/boolean
let mymap = new Map()
mymap.set("firstName", 'Jude') 
mymap.set('age', 23)
mymap.set(22, true)
console.log(mymap)
// Map(3) { 'firstName' => 'Jude', 'age' => 23, 22 => true }

//get the age of Jude
console.log(mymap.get('age'))

//Does Jude exists in this map
console.log(mymap.has('firstName'))
