
const languages = ['javascript', 'java', 'python', 'prolog', 666666, {}];

customHeigherOrderFunction = (arr, fn) => {
    let lengthArray = [];
    for (let i = 0; i < arr.length; i++) {
        lengthArray[i] = fn(arr[i]);
    }
    return lengthArray;
}

findLength = (item) => {
    return item.length;
}

findType = (item) =>{
    return  typeof(item);
}

const result = customHeigherOrderFunction(languages, findLength);
console.log(result);
console.log(customHeigherOrderFunction(languages, findType));