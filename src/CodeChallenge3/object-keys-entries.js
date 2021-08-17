export function sortedKeys(obj) {
    const keYs = Object.keys(obj);
    return  keYs.sort((a,b)=> {
        return a.length - b.length;
    });
        
}

export function getFilteredKey(obj) {
    const keYs = Object.keys(obj);
    return keYs.filter(item => item === 'age');
}

export function getArrayOfKeysAndValues(obj){
    return Object.entries(obj);
}


export function sortedArraysByValuesLength(obj) {
    const newArr = Object.entries(obj);
    const sorted = newArr.sort(function (a,b) {
        return b[1].length - a[1].length;
    });
    return sorted;
}
    




