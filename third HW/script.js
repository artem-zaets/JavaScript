/*1*/
let string = 'i am in the easycode';
let upString = '';

for(let i = 0; i < string.length; i++){
    let j = string[i];
    if (string[i - 1] === ' '){
      j = j.toUpperCase();
    } else if (i === 0){
        j = j.toUpperCase();
    }
    upString += j;   
    
}
console.log(upString);


/*2*/
let string2 = 'tseb eht ma i';
let string2Reverse = '';

for(let i = --string2.length; i >= 0; i--){
    string2Reverse += string2[i];
    
}

console.log(string2Reverse);


/*5*/
let string3 = 'javascript is a pretty good language';
let upString2 = '';
let d = 0;

for(let i = 0; i < string3.length; i++){
    let j = string3[i];
   if (string3[i - 1] === ' '){
      j = j.toUpperCase();
    } else if (i === 0){
        j = j.toUpperCase();
    } else if (j === ' '){
        continue;
    }
    upString2 += j;
    
}
console.log(upString2);


/*6*/
for(let i = 1; i <= 15; i++){
    if (i % 2 > 0){
        console.log(i);
    }
    
}


/*3*/
let t = 1;

for(let i = 10; i >= 2; i-- ){
    let j = i - 1;
   if (i === 10){
       t = i * j;
   } else {
       t = t * j;
   }
    
}

console.log(t);