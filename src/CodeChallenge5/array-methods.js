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
    return recipe.ingredients.map((item) => {
        return item.split(' ').splice(2).join(' ');
    })    
  }

  export function stepActions(recipe){
    return recipe.steps.map((item)=> {
        return item.split(' ').shift();
    });
}

export function removeLastCharacters(str, numberOfCharacters){
    if(numberOfCharacters > str.length){
      return '';
} else if (Math.sign(numberOfCharacters)!== 1 ){
    return str;
}else {
    return str.slice(0, -numberOfCharacters);
}
}




  