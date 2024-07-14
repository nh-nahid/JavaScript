// data type

const number = 80
console.log(number)

let string = "Nahid Hossain"
console.log(string)


// variable

let nickName

 nickName = ("Nahid") 
 
 console.log(nickName)
   
 nickName = ("Rakib")

 console.log(nickName)

//arrithmatic  operator

 let firstData = 30

 let secondData = 40

 let sum = firstData + secondData
 let subtraction = firstData - secondData
 let multiply = firstData * secondData
 let exponentiation = firstData ** secondData
  
 console.log(sum)
 console.log(subtraction)
 console.log(multiply)
 console.log(exponentiation)

//  boolean operator

 let test = true
 console.log(test)

 let compare = 5>3
 console.log(compare)

 let anotherCompare = 7<4
 console.log(anotherCompare)

//  pre & post increment & decrement

 let increment = 5;
   increment++;
 console.log(increment); 

 let postIncrement = 15
   ++postIncrement;
   console.log(postIncrement)

   let complex = 7;
   const result = complex++;
   console.log(result)

   let anotherComplex = 10;
   const anotherResult = ++anotherComplex;
   console.log(anotherResult)


   // comparision operator

  const greater = 5>3;
   console.log(greater)

   const equal = 5===5;
    console.log(equal)

    const notEqual = 5 != 5;
    console.log(notEqual)

    const notNotEqual = 6 !== 6;
    console.log(notNotEqual)

    // logical operator

    const and = true && false;
    console.log(and)

   const or = true || false;
   console.log(or);

   const convert = !false;
   console.log(convert)

  //  expression evaluation

 const expression = (((5>7) || 6 === "6") && ((10 != "12") || (7 != 10) ));

  console.log(expression);

  // array
  
  let array5 = [4,5,7,8]
  array5.push(67)
  console.log(array5)

  let array = [4,5,7,10]
  array.pop();
  console.log(array)

  let array2 = [34,45,60]
  array2.shift();
  console.log(array2)

  let array3 = [50,33,56]
  array3.unshift(45);
  console.log(array3)

  let array4 = [45,35, 55]
  array4[array4.length-1] = array4[array4.length-1] + 80;
  console.log(array4)

  // multiple types of data in array

  const multipleData = [56, true, "Abdullah"]
   console.log(multipleData)
   

  //  function

  function box () {
    console.log("hello world");
  }

  box();
  box();


  function guest () {

    const x = "Nahid Hossain"
    console.log("hello " + x)
  }

  guest();


  function differentGuest (greetings , person){
  console.log (greetings + " " + person); 
  }

  differentGuest("hello","Bangladesh");
  differentGuest("Hi", "July");
  differentGuest("Bye", "Meri")
 

  // return

  function returnTest (){
    console.log("hello Nahid")

    return 10;
  }
 
  const abc = returnTest();

  console.log(abc)

  // condition

  if(4>3){
    console.log("It is right")
  }
  else{
    console.log("It is wrong")
  }

  if(false){
    console.log("first")
  } else if(false){
    console.log("second")
  } else if(true){
    console.log("third")
  }

  // loop

  i = 1
 while(true){

    console.log(i + ". I am Nahid")


    if(i===10){
      break;
   }
    i++;
 }



 i= 1
 while(true){
  i++;

  if(i===4){
    continue;
  }
  console.log(i + ". hello")

   if(i===10){
     break;
   }
  }


  for(i=0; i<=10; i++ ){
    console.log(i + ". I love Bangladesh")
  }

  