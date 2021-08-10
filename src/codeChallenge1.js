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

// MAKES STRINGS
export function makeStrings(arr){
    const names = arr.map((famousNames) => {
        if(famousNames.age > 18){
           return `${famousNames.name} can go to The Matrix`;
        } else {
            return `${famousNames.name} is under age!!`;
        }
    })
    return names;
}

//MAKE HEADERS
export function readyToPutInTheDOM(arr){
    return arr.map((famousNames) => {
        return `<h1>${famousNames.name}</h1><h2>${famousNames.age}</h2>`;
    })
}

