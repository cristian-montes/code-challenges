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
  return stores.reduce((acc,curr) =>{
     return curr.map((b,i)=>{
         return (acc[i] || 0) + b;
     })
  }, [])
}

export function salesData(hours, total){
    return total.map( (x, i) => {
        return {sales: `${x} cookies`, time: hours[i]};
    })
}




    