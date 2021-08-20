export function howMuchPencil(str) {
    let newArr =[]
    for(let i = 0;  i < str.length+1; i++){
        newArr.push(str.slice(i) ) 
    }
return newArr;
}

export function wordsToCharList(arr) {
    return arr.split('');
}



  
  export function listFoods(recipe){
    const splittedd =  recipe.ingredients.map((item) => {
        return item.split(' ')
    })

    return splittedd.map((item) => {
       return item.splice(2).join(' ');
    });
    
  }
  