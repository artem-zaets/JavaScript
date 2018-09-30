// Условные операторы Задачи **********************************************************************************************************************

/*1*/ 

let a = 'visible';

if (a == 'hidden'){
    a = 'visible';   
}else{
    a = 'hidden';
}

console.log(a);


a = a == 'hidden'? 'visible': 'hidden';

console.log(a);

/*2*/

let b = 10;

if( b == 0){
    b = 1;
}else if(b < 0){
    b = 'less than zero';
}else if(b > 0){
    b *= 10;
}else{
    b = ':(';
}

console.log(b);


b = b == 0? 1:
b < 0? 'less than zero':
b > 0? b *= 10:
':(';

console.log(b);

//switch....case. Задача ************************************************************************************************************************

let c = 'a';

switch (c) {
    case 'block':
        console.log('block')
        break
    case 'none':
        console.log('none')
        break
    case 'inline':
        console.log('inline')
        break
    default:
        console.log('other')
        break   
}


//Преобразование типов. Задачи ******************************************************************************************************************


/*1*/
//Чему равно а, почему? .........................................................................................................................

let i = 0 || 'string'// i == 'string' Потому что оператор 'или' запинается на true а string == true, 0 == false
let o = 1 && 'string'// o == 'string' Оба значения == true поэтому && вернет последнее из них
let p = null || 25// выведет 25 потому что запинается на правде, null == false, 25 == true
let s = null && 25// выведет null потому что запинается на лжи, null == false, 25 == true
let f = null || 0 || 35// выведет 35 поскольку 35 == true
let g = null && 0 && 35// вернет null поскольку это первое из списка ложное значение, оператор && после нахождения первого ложного значения не                             смотрит на остальные

/*2*/
// Что отобразится в консоли? Почему ............................................................................................................

12 + 14 + '15';// В консоли отобразится 2615 потому что при складывании числа и строки получается строка
3 + 2 - '1'// В консоли отобразится 4 потому что при отнимании от числа строки строка преобразуется в число
'3' + 2 - 1// В консоли отобразится 31 поскольку сначала при операторе + получилась строка, а при - строка преобразовалась опять к числу
true + 2// В консоли отобразится 3 поскольку при сумировании логический тип привелся к целочисленному, а в этом типе true == 1
+'10' + 1// В консоли отобразится 11 поскольку унарный + преобразил строку в число, а потом задействовался бинарный + сложив 2 числа
undefined + 2// В консоли отобразится NaN поскольку такая операция невозможна
null + 5// В консоли отобразится 5 поскольку Null в целочисленном типе == 0
true + undefined//В консоль выведется NaN поскольку такая операция невозможна

