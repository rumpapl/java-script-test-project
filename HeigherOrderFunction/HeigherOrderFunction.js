// Higher-order function map
const array = [1, 2, 3, 5, 7];
const result = array.map((item) => {
    return item * 2;
});
console.log(result);

// without heigher order function
const data = [22, 32, 30, 40];
let temp = [];

for (let i = 0; i < data.length; i++) {
    temp[i] = data[i] * 2;
}
console.log(temp);