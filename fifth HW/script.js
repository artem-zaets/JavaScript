// FUNCTIONS task 6
function NewValue(arr, callback){
    return 'New value: ' + callback(arr);
}

function arrToString(arr){
    let str = arr.join(" ");
    let j = '';
    for(let i = 0; i < str.length; i++){
        if(str[i - 1] === " " || i === 0){
           j += str[i].toUpperCase(); 
        } else {
            j += str[i];
        }
    }
    arr = j.split(" ");
    return arr.join("");
}

function decadesElem(arr){
    let arr2 = [];
    for(i = 0; i < arr.length; i++){
        let j = arr[i] * 10;
        arr2.push(j);
    }
    return arr2;
}

function ObjectsPrint(arr){
    let j = '';
    for(i = 0; i < arr.length; i++){
        j += arr[i].name + ' is ' + arr[i].age + ", ";
    }
    return j;
}

function arrItemsReverse(arr){
    let j = '';
    for(let i = 0; i < arr.length; i++){
       for(let l = arr[i].length - 1; l >= 0; l--){
           j += arr[i][l];
       }
       j += ', '
}
    return j;
}

console.log(NewValue(['ur', "name", "is", "artem"], arrToString));
console.log(NewValue([10, 20, 30, 40, 50, 60], decadesElem));
console.log(NewValue([{age: 45, name: 'John'}, {age: 20, name: 'Aaron'}], ObjectsPrint));
console.log(NewValue(['abc', '123', 'afg', 'oky'], arrItemsReverse));


//Arrays Tasks 
/*1*/
function sortByAlphabetReverse(str){
    let arr = [];
    for(i = 0; i < str.length; i++){
        arr.push(str[i]);
    }
    arr.sort(arrAlphabetSort);
    return arr.join("");
}

function arrAlphabetSort(a, b){
     if (a < b){
         return 1;
     } else {
         return -1;
     }
}
console.log(sortByAlphabetReverse('bcdaeflmjgkhi'));

/*2*/
function sortReverse(arr){
    arr.sort(arrAlphabetSort);
    return arr;
}

console.log(sortReverse([2, 4, 7, 1, -2, 10, -9]));

/*3*/
function arrSlice(arr, from, to){
    return  arr.slice(from, to);
}

console.log(arrSlice([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1, 8));

/*4*/
let array = ['one', 2, 'three', 4];
let newArray = array.concat(array);
console.log(newArray);

/*5*/
let a = [1, 2, 3, 4, 5];
a.splice(2,2);
console.log(a);

/*6*/
a = [1, 2, 3, 4, 5];
a.splice(2, 2, 'three', 'four');
console.log(a);

/*7*/
let b = ['I', 'am', 'an', 'array'];
b.splice(3, 0, 'awesome');
console.log(b);

/*8*/
let hiperArray = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6], [1], [5, 6, 7], [1, 2, 3, 4], [1, 2]];
hiperArray.sort(iHeaveNotIdeas);

function iHeaveNotIdeas(a, b){
    if (a.length < b.length){
        return -1;
    } else {
        return 1;
    }
}
console.log(hiperArray);

/*9*/
let c = ['one', 'two', 'three'];
let d = c.concat();

console.log(d);

/*10*/
let hiperObjectsArray = [
    {cpu:'intel', info:{cores:2, cache:3}},
    {cpu:'intel', info:{cores:4, cache:4}}, 
    {cpu:'intel', info:{cores:1, cache:1}},  
    {cpu:'intel', info:{cores:3, cache:2}}, 
    {cpu:'intel', info:{cores:4, cache:2}} 
];

hiperObjectsArray.sort(ArrParsing);

function ArrParsing(a, b){
    if (a.info.cores > b.info.cores){
        return 1;
    } else {
        return -1;
    }
}

console.log(hiperObjectsArray);

/*11*/
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
    for(i = 0, j = []; i < arr.length; i++){
        if (arr[i].price < diap1 || arr[i].price > diap2){
            continue;
        } else {
            j.push(arr[i]);
        }
    }
    j.sort(productSorting);
    return j;
}

function productSorting(a, b){
    if (a.price > b.price){
        return 1;
    } else {
        return -1;
    }
}

console.log(productParsing(prod, 15, 30));