// parent Children

const listItem = document.querySelector(`.list-item`);

console.log(listItem.parentElement)

// 

const menu = document.querySelector(`.menu`)       /* <ul> 
                                                         <li> */
console.log(menu.children[1].children)              /* </ul>
                                                            <li>facebook </li>
     /* children
        parentElement                                   
        parentNode */                     

const nahid = document.querySelector(`.nahid`)

const hasib = nahid.nextElementSibling;
const hasib = nahid.previousElementSibling;

console.log(hasib)


const container = document.querySelector(`.container`)

console.log(container.lastElementChild)

const container = document.querySelector(`.container`)

console.log(container.firstElementChild)


// Remove Element

const nahid = document.querySelector(`.nahid`)

nahid.remove();


// Funtion Call from Another File

<script type="module" src = "app.js">  </script>
 <script src="nahid.js">  </script>


 app.js

function sayHelloWorld (){
    console.log("hello world")
}

export default sayHelloWorld;    // default na hole {sayHelloWorld} dibo..default only 1 function er jonno ... ekadhik function hole , diye export & , diye import...default rekhe duita export korte chaile [] er vitore , diye pathabo....array index akare 
// sayHelloWorld[0]()evabe call korbo

// default rekhe object akare korle {"sayHelloWorld": sayHelloWorld, "sayBangladesh": hello bangladesh} & ja diye import seta diye . diye key call....obosso object a key & value eki nam hole just value nilei hoy .... js er default behaviour eta


nahid.js

import sayHelloWorld from './app.js'    

// tokkho ekhaneo {sayHelloWorld} dite hobe..& same nam diye same call    // onno nam diye call korte chaile sayHelloWorld as nahid evabe diye nahid(); call

sayHelloWorld();       