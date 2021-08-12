export function fiveAndGreaterOnly(arr){
    return arr.filter((num) =>{
        return num > 5;
    });
}

export function fiveCharactersOrFewerOnly(arr){
 
    const result = arr.filter(word => word.length <= 5);
    result.sort((a,b) =>{
       return a.length - b.length;
   })
    return result;
}

export function peopleWhoBelongToTheIlluminati(arr){
 return arr.filter((evil) => {
      return evil.member === true;
  })
}


export function ofAge(arr){
  return arr.filter( older => older.age > 18);
}
