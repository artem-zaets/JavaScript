function Car(age,mark){
    const date = new Date();
    const year = date.getFullYear();
    this.mark = mark[0].toUpperCase() + mark.substr(1);
    this.developYear = year - age;
}
const car1 = new Car(22, 'sedan');
const car2 = new Car(2, 'lexus');
const car3 = new Car(6, 'volvo');
// 2
function Shifr(str){
    let newStr = str.split("").reverse().join("");
    this.getStr = function getS(){return str};
    this.getNewStr = function getN(){return newStr};
    this.deleteAll = function del(){ str = ''; newStr = '';}
}
const shif1 = new Shifr('string');
// 3
function ClassString(str){
    this.string = str;
    this.getStr = function (){return this.string};
    this.setStr = function (newStr){this.string = newStr; return this;};
    this.getStrLngth = function (){return this.string.length};
    this.toString = function (){return this.string};
    this.valueOf = function (){return this.string.length};
}
const str1 = new ClassString('string');
