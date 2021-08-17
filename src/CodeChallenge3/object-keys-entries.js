export function sortedKeys(obj) {
    const keYs = Object.keys(obj);
    return  keYs.sort((a,b)=> {
        return a.length - b.length;
    });
        
}
