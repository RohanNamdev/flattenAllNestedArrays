
/* 
Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90],
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟", "💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];


function flatten(arr) {
    
    let newArray = []
    arr.map(e => {

        if (Array.isArray(e)) {
            return e.forEach(f => newArray.push(f))
        }
        else {
            return newArray.push(e)
        }

    })
    return newArray

    // --alternative and the best way to do this--->> return arr.flat(Infinity)

}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
