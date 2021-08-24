export function returnTen(str) {
    return str.slice(-10).split('');
}

export function findMax(matrix) {
    let arrOfLarge =  matrix.map((subArr) => {
        return Math.max.apply(null, subArr);
    })
    return Math.max(...arrOfLarge);
}

export function totalSum(matrix) {
 const flatttie = matrix.flatMap(subArr => subArr);
 return flatttie.reduce((a ,b) => a+b)
}



export function grandTotal(stores){
    const hoursOpen = ['9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];

    return stores.map((subArr) => {
        for(let item of subArr){
            return item;
        }
    })
}
