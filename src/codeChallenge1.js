//DOUBLE NUMBERS
export   function doubleNumbers(arr){
    return arr.map((num) => num *2 );
}

//STRING IT UP
export function stringItUp(arr){
    return arr.map((num) => num.toString());
  
}

// CAPITALIZE NAMES
export function capitalizeNames(arr){
 const loArr = arr.map((string) => {
      return string.toLowerCase();
  })
  return loArr.map((firtCap) => {
      return firtCap[0].toUpperCase()+ firtCap.slice(1);
  })
}

//NAMES ONLY
export function namesOnly(arr){
    return arr.map((famousNames) => {
        return famousNames.name;
    })
  
}

// MAKES STRINGSq
