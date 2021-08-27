export const sortByChildren = (charArray) => {
    return charArray.sort((a, b)=>{
        return a.children.length - b.children.length;
    });
};


export const containsW = (str) => {
    let myRegex = /w/g;
    return myRegex.test(str);

};

export const isNum = (input) => {
    let myRegex = /\d/;
    return myRegex.test(input);
};

export const containsWorld = (input) => {
    let myRegex = /world/g;
    return myRegex.test(input);
};

export const isCapitalized = (str) => {
    const myRegex = str.match(/(\b[A-Z][a-z]+\b)/g)
    if(myRegex){
        return myRegex;
    } else {
        return []
    }


};
// This is i came up with.. I know it is not the solution I couldnt figured out how to use regex to only read the string but not only the words. It is somewhat close.

export const citiesAtoJ = (arr) => {
  return  arr.map((arrii) => {
    const myRegex = arrii.match(/(\b[A-J][a-z]+\b)/g)
        if(myRegex){
        return myRegex;
        } else {
        return []
        }
  })
  
};
