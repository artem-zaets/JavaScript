// Closures Tasks
// 3
function min(){
    return function(value1 = 0){
        return function(value2 = 0){
            return value1 - value2;
        }
    }
}
const minus = min();
console.log(minus(10)(6));
// 4
function multiply(variable){
    let result = 1;
    return function mult(number){
        return result *= number;
    }
}
let m = multiply();
console.log(m(2));
console.log(m(2));
console.log(m(10));
console.log(m(100));
// 5
const strWorker = (function (){
    let string = '';
    function setStr(str){
        if (str === undefined){
            string = ',';
        } else {
            string = str;
        }
        return this;
    }
    function getStr(){
        return string;
    }
    function getStrLength(){
        return string.length;
    }
    function strReverse(){
        let newStr = '';
        for(let i = string.length - 1; i >= 0; i--){
            newStr += string[i];
        }
        string = newStr;
        return this;
    }
    return {
        setStr,
        getStr,
        getStrLength,
        strReverse
    }
}());
console.log(strWorker.setStr('I am String'));
console.log(strWorker.getStr());
console.log(strWorker.getStrLength());
console.log(strWorker.strReverse());
console.log(strWorker.getStr());
// 6
const kalk = (function(){
    let firstVal = 0;
    function setVal(value){
        firstVal = value;
        return this;
    }
    function sum(value){
        firstVal += value;
        return this;
    }
    function minus(value){
        firstVal -= value;
        return this;
    }
    function stack(value){
        firstVal *= value;
        return this;
    }
    function dob(value){
        firstVal /= value;
        return this;
    }
    function double(value){
        firstVal = Math.pow(firstVal, value);
        return this;
    }
    function getVal(){
        return firstVal;
    }
    function clear(){
        firstVal = 0;
        return this;
    }
    
    return {
        setVal,
        sum,
        minus,
        stack,
        dob,
        double,
        getVal,
        clear
    }
}());

