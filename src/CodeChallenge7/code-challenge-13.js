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
