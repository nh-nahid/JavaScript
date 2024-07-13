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



// Set Timeout
setTimeout(function(){
  console.log(`Hello Nahid`);
},4000);

// Set Interval
setInterval (function(){
  console.log(`I will count in interval`);
}, 3000);


/* 

let i = 0
const intTime = setInterval(function(){
     i++
 console.log(i, `Hello Switzerland`);
}, 100);
               
                     
setTimeout(function(){
  clearInterval(intTime);
}, 5000 + 100);

*/

// Array.forEach

const arrNum = [3,5,6,8,6];

arrNum.forEach(function(value){
    console.log(value);
});



 /* 
 const arrInArr = [[1,4,6],[3,5,7],[4,7,8]];

 arrInArr.forEach(function (inArr) {
   inArr.forEach(function(data){
       console.log(data);
    });
              
  }); 

  */


// Map

const numberArr = [2,4,6,7,5];

const res = numberArr.map(function(num){
    return num ** 2
});

console.log(res);

// Filter

const allNum = [12,33,45,64,68,77];
const findEvenNum = allNum.filter(function(value){
    return value % 2 === 0
},[] )
  
console.log(findEvenNum);

// Find

const allNumHere = [12,33,45,64,68,77];
const findNum = allNum.find(function(value){
    return value % 2 === 0
}, [] )

console.log(findNum);


// Every 

const dataEvery = [12,33,45,64,68,77];
const everyNum = dataEvery.every(function(value){
    return value % 2 === 0       
                 // Every data same condition mane kina
});

console.log(everyNum);


// Some 

const allNum3 = [12,33,45,64,68,77];
const someNum = allNum3.some(function(value){
    return value % 2 === 0    
}, [] )            // Ontoto 1 data same condition mane kina

console.log(someNum);


// Sort

const fruitsList = [`Guava`, `Apple`, `Litchies`, `Banana`];

const fruitRes = fruitsList.sort();

console.log(fruitRes);


/* const fruitsList = [234,2,3,454,6,11,22];

const fruitRes = fruitsList.sort(function(a,b){
  return a-b
});

console.log(fruitRes); */


// Reduce

const red = [3,5,6,44,32];

const redRes = red.reduce(function(acc, curr){
    acc.push(curr ** 2)
      return acc
}, [])

console.log(redRes);

 

/* const red = [3,5,6,44,32];

const redRes = red.reduce(function(prev, next){
    prev += next
      return prev
}, 0)

console.log(redRes) */



/* const red = [3,3,3,3,3];

const redRes = red.reduce(function(prev, next, i){
    if ( i === 0){
        prev += next
    } else {
        prev += `, ` + next;
    }
      return prev
}, ``)

console.log(redRes) */


/*++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


// Chapter 3

// Object

const person = {
  personName: `Nahid Hossain`,
  personAge: 21,
  personDistrict: `Meherpur`,
  varsity: `Islamic University`,
  result: 4.00

}

Object.keys(person).forEach(function(key){
  console.log(person[key])
});


/* for(key in person){                 /* for in = object
   console.log(person[key])            /*  for of = array
 }                           

*/


 const person = {
    personName: `Nahid Hossain`,
    personAge: 21,
    personDistrict: `Meherpur`,
    varsity: `Islamic University`,
    result: 4.00,
    callNahid: function(){
      console.log( this.personName)
    },
    sayHello: function(){
      console.log(`Hello`)
      this.callNahid();
    }

}

Object.keys(person).forEach(function(key){
    if(typeof person[key] === `function` ) { 
        person[key]();
    } else {
        console.log(person[key])
    }
});


/*------------*/

console.time(`Nahid`);

const nam = `Hello Rangamati`
console.log(nam);

console.timeEnd(`Nahid`);

/*------------*/


const newArr = function () {
  let mainArr  = [];
for(let i = 1; i<=100; i++){
   mainArr.push(i)
}
return (mainArr)
}

const myArr = newArr();

myArr.splice(44, 1)

console.log(myArr)




// DOM--------------------------------------------------


console.dir(document)  /* object akare document k dekhabe */

<h1>Hello World</h>

<script>
  const h1 = document.querySelector(`h1`)
 console.dir(h1)

</script>


// 

const person = {

}

person.varsity = `IU`
person.subject = `ICT`  /* property input */

console.log(person)

// 

<div> Nahid </div>

const div = document.querySelector(`div`)

div.innerText = `Hasib`

// 

<div class="country"> India </div>

s
const country = document.querySelector(.country)  

/* aro div thakle sb dhorte querySelectorAll dibo */ /* tkhn array er moto [Nodelist] return kore */ /* Array.from() korle Array chole ashbe */

country.innerHTML = `<b> ${country.innerText} </b>` 
s

// Class Add or Remove

<div class="country "> Bangladesh </div>

s
const country = document.querySelector(.country)  
country.classList.add("desh", "land")

country.classList.remove( "land")
s 

// Attribute

<div  class="season"> Summer </div>

s
const season = document.querySelector(.season)

season.setAttribute("data-nahid", "season Name"); /* any kind of attribute set kora jay evabe */
season.removeAttribute("data-nahid")

season.getAttribute("data-nahid")  /* attribute er value dekhabe ex season Name */ console.log(value)

// Tittle Change

const tittle = document,querySelector(`tittle`)
innerText = `hahaha`

or document.tittle = `hahaha`


// Notification in Tittle

let showMessageInTittle = false;
let messageCount = 1
document.tittle = "Facebook";

setInterval(function(){
   if(showMessageInTittle){
    document.tittle = `Facebook (${messageCount})`
    messageCount++;

   } else {
    document.tittle = "Facebook"
   }
   
   showMessageInTittle = !showMessageInTittle;
}, 1*1000)


// ------------------------------------------------------------------

// Alert

alert(`Don't cross!`)

// Prompt

const dataCollect = prompt(`What is Your Name?`)
console.log(dataCollect)




// EventListener

/* click */
const btn = document.querySelector(`.btn`);

btn.addEventListener(`click`,function(){
  const p  = document.querySelector(`p`)

p.style.color = `red`;
p.style.backgroundColor = `yellow`
})


/* Input */ /* Change */

const fullname = document.querySelector(`.fullname`)

fullname.addEventListener(`input`, function(){
const notice = document.querySelector(`.notice`)

    if(fullname.value === `nahid`){
      notice.style.display = "block"
    } else {
      notice.style.display = "none"
    }
})


/* Scroll */
const btn = document.querySelector(`.btn`)

window.addEventListener(`scroll`,function(){

  if(scrollY > 0){
    btn.style.visibility = `visble`
    btn.style.opacity = `1`
    btn.style.transition.opacity = `0.5s` // ei style css file er
  } else{
    btn.style.opacity = `0`
    btn.setTimeout(function(){
    btn.style.visibility = `hidden`

  }, 0.5 * 1000)

  }

})

btn.addEventListener(`click`,function(){
  scrollTo(0, 0);
})


/* wheel
   mouseover
   mouseleave
   dblclick
*/


// PreventDefault

const prevent = document.querySelector(`.prevent`)

prevent.addEventListener(`click`, function(event){
 event.preventDefault();
})


// LocationRedirectByJS

const text = document.querySelector(`.text`);

function redirect(){
  location.href = `http://facebook.com`
}

text.addEventListener(`click`, redirect)    


// Element

// Create Element & Append

const root = document.querySelector(`.class`)

const div = document.createElement(`div`)
div.style.color = `red`

root.append(div)

// Nested Element Query

const div = document.querySelector(`.nahid`)

const hasib = nahid.querySelector(`hasib`)


// Data Insertion By Looping

const menuData = [
  `Home`,
  `Contact`,
  `About`,
  `Gallery`
]

const menu = document.querySelector(`.menu`)

const fragment = document.createDocumentFragment(`div`)

menuData.forEach(function(menuText){
    const li = document.createElement(`li`);
    li.innerText = menuText;
    middleElement.append(li)
})

menu.append(fragment)
