// chapter 2

// Array Operation

// Slice

const  test = ["nahid", "rakib", "sakib", "hanif"];
const result = test.slice(0, 1);
console.log(result)

// Split

const textToArr = 'hello world';
const newArr = textToArr.split("");
console.log(newArr)

// Join

const arrToText = ["ena", "hanif", "royal"]
const newResult = arrToText.join(" ");
console.log(newResult);

// Delete

const arrDelete = ["ena", "hanif", "royal"]
delete arrDelete[1];
console.log(arrDelete[1]);

// Splice

const newSplice = ["abdullah", "meri", "tuhin", "abdur rob","adiyat"];
newSplice.splice(1, 3, "BANGLADESH");
console.log(newSplice);


const byLenght =  ["abdullah", "meri", "tuhin", "abdur rob"];
byLenght.splice(byLenght.length , 0, "HANIF");
console.log(byLenght);

const bus = ["jr", "royal","purbasha", "hanif", "saint martin"];
bus.reverse();
console.log(bus);


// Problem Solving

function esayText (text, limit) {

const arr = text.split("");
const newTrim = arr. slice(0, limit);

const newTrimText = newTrim.join("") + "... [Read More]"

console.log(newTrimText);

}

esayText( "I am Nahid Hossain. I love to do what I do. That's why I am exceptional", 24);
esayText( "I am Nahid Hossain. I love to do what I do. That's why I am exceptional", 14);
esayText( "I am Nahid Hossain. I love to do what I do. That's why I am exceptional", 20);


//  Concating String

const text1 = "hello world"
const text2 = " hello bangladesh"

const text3 = text1.concat(text2);
console.log(text3);

// StartsWith & EndsWith

const text4 = "A quick brown fox jumps over the lazy dog";
const text5 = text4.startsWith("A")
console.log(text5)


const text6 = "hello bangladesh";
const text7 = text6.endsWith("hello");
console.log(text7);


// Includes

const textIncludes = "A quick brown fox jumps over the lazy dog";
const newIncludes = textIncludes.includes("over");
console.log(newIncludes);


/*  Truthy value
  * String with any character -- "Hasib"
  * number excluding zero -- 45, -3
  * array
  * object -- {}, {key:"value"}
  * function -- callback
  * /

/** Falsy value
 * zero as a number -- 0, -0
 * null
 * undifined
 * empty -- ""
 
 */


if("hasib"){
console.log("YES")
} else{
    console.log("NO")
}


// Case Change of String

const caseChange = "Hello Bangladesh YOu are beautiful";
const newCase = caseChange.toLowerCase();
console.log(newCase)

// Convert

const stringToNum = "10";
console.log(Number(stringToNum));


let f = "5.7";
f = parseInt(f);
console.log(f);


let j = "5.7";
 j = parseFloat(j);  // Only number ta rakhe like 3abc 
console.log(j);


let k = "5.7";
k = Number(k);
console.log(k);

// To Fixed

const nums = 5.873569
const numsFixed = nums.toFixed(2);
console.log(numsFixed);


// Positon

const arr = ["ena","nabil","rex","royal","hanif"];
const position = arr.indexOf("rex") + 1;
console.log(position);

// Array Search

const numbers = [4, 9, 16, 25, 29];
const first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first)

// Index Of

const checkIndexByData = `Rahim,Karim,Sumon,Hossain`;
const resultIndex = checkIndexByData.indexOf(`Karim`);
console.log(resultIndex);

// Concat

const textConcat1 = `It's myself Nahid`;
const textConcat2 = ` Hossain. My age is 21.`;
console.log(textConcat1.concat(textConcat2));

// Array.isArray

const district =[`Meherpur, Rangpur, Khulna, Chuadanga`];
const districtIsArr = Array.isArray(district);
console.log(districtIsArr);


// Is NaN

const numNan = `Nahid` * 3;
console.log(isNaN(numNan));

// Array != Array

const testArr1 = [`Nahid`,`Rofik`,`Shakib`];
const testArr2 = [`Nahid`,`Rofik`,`Shakib`];
console.log(testArr1 === testArr2);   // Ram er address

// String Search

const str1 = `His nationality is Bangladeshi`;
const strSearch = str1.search(`Bangladeshi`)
console.log(strSearch);

// String Replace

const str2 = `He was born in Meherpur.`;
const rplcStr = str2.replace(`Meherpur`, `Khulna`);
console.log(rplcStr);

// Default Parameter of Function

function callNahid(userName){
  console.log(`I am ${userName}`)
}
callNahid();  // I am undifined

// ------

function changeDefaultValue(age, nickName="Nahid"){
  console.log(`I am ${nickName}`)
  console.log(`I am ${age} years old`)
} 
changeDefaultValue(21, "Nahid Hossain");

// Template Literals (ES6 Update)

// Uses of Back Tick, $ sign 


// Function Expression / A Function Without Name 

const fncExpress = function(){
  console.log(`Hello World`)
  return 10
}
console.log(fncExpress());

// Null vs Udifined vs NaN

/* Null = We keep blank
   Undifined = JavaScript keep blank
   NaN = Not a Number 
*/

// Distructuring Array

const person = [`Abdullah`,`Nahid`,21];
const [ , personName, personAge] = person;
console.log(`I am ${personName} and my age is ${personAge}`);


// Math ------

// Absolute
const absolute = -54;
console.log(Math.abs(absolute));    

// Round
const rnd = 5.8756;
console.log(Math.round(rnd));

// Ceil
const numCeil = 6.1;
console.log(Math.ceil(numCeil));

// Floor
const numFloor = 7.9;
console.log(Math.floor(numFloor));

// Random
console.log(Math.random());

/* console.log(Math.round(Math.random() * 10)); */

// Min & Max
const numMin = Math.min(3,45,65,7,8,5);
console.log(numMin);

console.log(Math.max(33,65,77,3,24,5));


// Callback

function printF (personName, personAge, callback ){
  console.log(`I am ${personName}`);
  console.log(`I am ${personAge} years old`);

callback();
}

function myExtension (){
  console.log(`I am from Meherpur`);
}

printF(`Nahid Hossain`, 21, myExtension);     // Function direct extention er jaigai dewa jay
