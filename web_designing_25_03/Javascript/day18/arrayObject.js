let arr = [
    "vinay", "mandira", "dinesh",
    {
        hobby: ["sing", "music", "dance"]
    }
    ,
    [10,20,30,40,{
        sal: 12000,
        fname: "sam"
    } ]
];
//take out any name
// hobby => music
// sal => 12000
// console.log(arr[0]);
// console.log(arr[3].hobby[1]);
// console.log(arr[4][4].sal);

let world_map = [
    "continents", {
countinents_names: ["Asia", "Europe", "North America", "South America", "Africa", "Australia"]
    },
   "countries", {
    countries_names: ["India", "United Kingdom", "USA", "Argentina", "Ghana", "Melbourne"]
   }  
];
console.log(world_map);
console.log(world_map[0])
console.log(world_map[1].countinents_names);
console.log(world_map[2])
console.log(world_map[3].countries_names)