const colors = ["red", "blue", "cyan", "magenta", "yellow ochre"];
const numbers = ["3", "1", "4", "1", "5", "9"];
const adjectives = [
    "strong",
    "helpful",
    "trustworthy",
    "loyal",
    "courteous",
    "kind",
]
const nouns = [
    "person",
    "scout",
    "bear",
    "shoe",
    "waterbottle",
    "car",
    "piano",
]

const verbs = [
    "hit",
    "yells",
    "jumps",
    "lifts",
    "opens",
    "turns",
    "twists",
]

for(let i = 0; i < colors.length; i++){
    // console.dir(colors);
    // console.log(colors);
    // console.log(colors[i]);
}

// colors.forEach(function(item) {
//     console.log(item);
// });

colors.forEach((item, ind) => {
    console.log(ind, item);
});

//

function stuff(item){
    console.log(item);
}

colors.forEach(stuff);

//

// const newArray = colors.map((color) => {
//     return 'light' + color;
// });
// console.log(newArray);

//

const newArray = colors.map(color => 'light' + color);
console.log(newArray);

//
const negative = numbers.map(number => number * -1);
console.log(negative);

//

function random6(){
    return Math.floor(Math.random()*6);
}
//
// function random(num)

// function madLib(){
//     console.log("The" + adjectives[Math.floor(Math.random()*6)+1])
// }