export function getHouses(obj) {
    const sorted = obj.sort((a, b)=>{
        return a.children.length - b.children.length;
    });

    const casas = sorted.map(item => {
        return  item.house;
    });
    return casas;
}

export function updateNumbers(obj) { 
    let newArr = []
    for(let [key, value] of Object.entries(obj)){
        newArr.push(`${key}: ${value}`)
    }
    return newArr;
}


export function totalCharacters(arr) {
    let newArr= [];

    arr.map((item) => {      
        newArr.push(item.name, item.spouse);  
        return item.children.map(kid => newArr.push(kid)) 
    });
   const fillArr = newArr.filter(item => item != null);
    return fillArr.length;
}

export function hasChildrenEntries(arr, character) {
   for( let [key, value] of Object.entries(arr)){
      if( value.name === character && value.children !== []){
          return true;
      } else {
          return false;
      }
   }
} 

export function sortByChildren(arr){
   return arr.sort((a, b)=>{
         return a.children.length - b.children.length;
     })
     
    }
