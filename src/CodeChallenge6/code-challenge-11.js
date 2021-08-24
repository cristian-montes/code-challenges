export function returnTen(str) {
    return str.slice(-10).split('');
}

export function findMax(matrix) {
    let arrOfLarge =  matrix.map((subArr) => {
        return Math.max.apply(null, subArr);
    })
    return Math.max(...arrOfLarge);
}
