/* func tsk 1*/ 
function multiply(){
    if (arguments[0] === undefined){
        console.log('введите аргументы');
    } else {
    let j = 1;
    for(let i = 0; i <= arguments.length; i++){
      if (arguments[i] === undefined){
          break;
      } else {
          j *= arguments[i];
      }
    }
  return j;
}
}
console.log( multiply(1, 2, 3, 4, 5, 6));


/* func tsk 3*/ 
function strReverse(str){
    let j = '';
    for(i = str.length; i--;){
        j += str[i];
    }
   return j;
}
console.log(strReverse('test'));


/* func tsk 4*/ 
function getCodeString(string){
    let j = '';
    for(i = 0; i < string.length; i++){
        j += string.charCodeAt(i);
        j += ' ';
    }
    return j;
}
console.log(getCodeString('hello'));


/* Arr tsk 1*/
function duplicate(arr){
    let doubleArr = [];
    let j = 0;
    for(let i = 0; i < arr.length; i++){
        j = arr[i];
          doubleArr.push(j);
    }
    for(let i = 0; i < arr.length; i++){
        j = arr[i];
          doubleArr.push(j);
    }
    return doubleArr;
}
console.log(duplicate([1, 2, 3, 4, 5, 6]));


/*Arr tsk 2*/
function lastChild(array){
    let j = array[array.length - 1];
    return j;
}
console.log(lastChild([1, 2, 3, 4, 5, 6, 7, 'asd', 25]));

/*Arr tsk 3*/
function createArr(N){
    let newArr = [];
    for(let i = 1; i <= N; i++){
        newArr.push(i);
    }
    return newArr;
}
console.log(createArr(29));

/*Arr tsk 4*/
function removeArrSymbols (){
    let newArr = [];
    for(i = 0; i < arguments.length; i++){
        arguments[i].pop();
        newArr.push(arguments[i]);
    }
    return newArr;
}
console.log(removeArrSymbols ([1, 2, 3, 4], [2, 4, 6], [5, 7, 9]));