// export function getHouses(obj) {
 
//     return console.log(Object.values(obj));
// }




export function updateNumbers(obj) { 
    let newArr = []
    for(let [key, value] of Object.entries(obj)){
        newArr.push(`${key}: ${value}`)
    }
    return newArr;
}