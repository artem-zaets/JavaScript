/*1*/
const prod = [
    {title:'prod1', price:5.2}, {title:'prod2', price:0.18},
    {title:'prod3', price:15}, {title:'prod4', price:25},
    {title:'prod5', price:18.9}, {title:'prod6', price:8},
    {title:'prod7', price:19}, {title:'prod8', price:63}
];

function productParsing(arr, diap1, diap2){
    if (diap2 < diap1){
        console.log('второй идентификатор не должен быть меньше первого!!111!!1');
        return 0;
    }
    let newArr = arr.filter(number => number.price >= diap1 && number.price <= diap2); 
    newArr.sort(productSorting);
    return newArr;
}

function productSorting(a, b){
   return a.price - b.price;
}

console.log(productParsing(prod, 15, 30));
/*2*/
let array = [1, 2, 3, 5, 8, 9, 10];
let objArray = array.map(item => ({digit:item, odd:Boolean(item % 2)}));
console.log(objArray);
/*3*/
let testArray = [12, 4, 50, 1, 0, 18, 40];
console.log(testArray.every(item => item !== 0));
/*4*/
let strArr = ['yes', 'no', 'hello', 'easycode', 'what'];
console.log(strArr.some(item => item.length > 3));
/*5*/
let charArr = [
    {char:"!", index:5},
    {char:"l", index:2},
    {char:"H", index:0},
    {char:"e", index:1},
    {char:"l", index:3},
    {char:"o", index:4},
];
function arrToString(arr){
    arr.sort((prev, next) => prev.index - next.index);
    let str = arr.reduce((sum, current) => sum + current.char, '');
    return str;
}
console.log(arrToString(charArr));
