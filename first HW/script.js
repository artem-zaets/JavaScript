// Переменные задачи(var) *************************************************************************************************************************

// Придумайте названия(let, const) ...............................................................................................................


let price = 1000,
    userInfo;
    
const maxNumber = 11;
const userName = 'Artem';

// Что будет в консоли ............................................................................................................................


console.log(tst); //В консоли будет undefined (Я сам решил, а потом проверил)
var tst = 'String'; 

var x = 'string';
var x = 'string № 2';
console.log(x); // В консоли будет String № 2


// Задачи(let, const) что будет в консоли .........................................................................................................


//console.log(test); коментирую чтоб продолжить ДЗ
let test = 'String'; // В консоли будет Error test is not defined

let someVariable = 15;
let someVariable1 = 10;// добавил 1 чтоб продолжить работать без ошибки
console.log(someVariable); // В консоли будет Error someVariable is already been declared(Поскольку так переопределять можно только var) 


// Строки Задачи **********************************************************************************************************************************


let string = 'some test string';

// Вручную ничего не считаю :)


console.log(string.charAt(0));

console.log(string.slice(-1));


let partString = string.slice(1, -1);

string = string.charAt(0).toUpperCase() + partString + string.slice(-1).toUpperCase();
console.log(string);

string = 'some test string';



console.log(string.indexOf('string'));


console.log(string.lastIndexOf(' '));


console.log(string.substr(5, 4));
console.log(string.slice(5, 9));


let newString = string.slice(0, -6);
console.log(newString);


let a = 20,
    b = 16;

string = ''+20 + ''+16;
console.log(string);


//Числа Задачи *********************************************************************************************************************************


let pi = Math.PI;
console.log((pi).toFixed(2));

console.log(Math.max(20, 13, 16, 18, 45, 51, 13, 12, 51));

let random = Math.random();
console.log((random).toFixed(2));

console.log((Math.random() * 15).toFixed());

console.log((0.6+0.7).toFixed(1));

console.log(parseInt('100$'));


//Задачи Объекты ********************************************************************************************************************************


let obj = {
    product: 'Iphone'
}

obj.price = 1000;
obj.currency = 'dollar';
obj.details = {model:'X',color:'white'};

console.log(obj);



















