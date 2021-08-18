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

export function totalCharacters(arr) {
    let newArr= [];
   const names = arr.map((item) => {      
        newArr.push(item.name, item.spouse);  
        item.children.map(kid => newArr.push(kid)) 
    });
    // const spouses = arr.map((item) => {      
    //     return newArr.push(item.spouse);   
    //   })
    console.log(newArr.length)
    return newArr;
}
