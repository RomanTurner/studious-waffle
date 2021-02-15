

//############# GET ELEMENTS BY TAG NAME ############ 
const headings = document.getElementsByTagName('h2');
const items = document.getElementsByTagName("li");
//console.log(headings.length);
//selected by tag name

//selected using index number
items[2].style.color = "orange";
headings[0].style.color = 'red';

//############################



//############# GET ELEMENTS BY CLASS NAME #############
const listItems = document.getElementsByClassName('special');

listItems[1].style.color = "blue"; 
//############################



//############# QUERY SELECTOR #############
// Use the CSS Selectors in the argument: # for ID, . for Class, etc
const result = document.querySelector('#result');
result.style.backgroundColor = "blue";
result.style.color = 'white'; 

// Your CSS Selector can be as complex as you want. 
const lastItem = document.querySelector('li:last-child');
//############################




//############# QUERY SELECTOR ALL #############
const list = document.querySelectorAll('.special');
console.log(list);

list.forEach(function(item){
    console.log(item);
    item.style.color = 'yellow';
    item.style.backgroundColor = 'black';
});
//############################

//############# TRAVERSE THE DOM TREE #############
const florb = document.querySelector('#florg');

//CHILDNODES
//child nodes prints everything even whitespace
const allChildren = florg.childNodes;


//CHILDREN
const children = florg.children;
//creates an index value for the children
// example console.log(children[0]);

/**FIRST-CHILD
 * These are child NODES so there will be whitespace (which is treated as a text node) returned. 
example console.log(florg.firstChild)

//LAST CHILD
example console.log(florg.lastChild)
* These are child NODES so there will be whitespace returned. 

*/
//############################




//############# PARENT ELEMENT #############
const heading = document.querySelector('h3');
heading.parentElement.parentElement.style.color = 'purple';
console.log(heading.parentElement.parentElement);

//############################


//############# NEXT SIBLING #############
const nextSiblingListItem = document.querySelector('.first-hot-stuff')
const siblingUnder1 = (nextSiblingListItem.nextSibling);
 //the fist nextSibling will get the whitespace, a null value text NODE
const siblingUnder = (nextSiblingListItem.nextSibling.nextSibling.style.color = 'orange');

//############################






//############# PREVIOUS SIBLING #############
//always watch what you are using in the html for your CSS selector, a class or ID or title 
const lastHotStuff = document.querySelector("#last-hot-stuff");
const fourth = lastHotStuff.previousSibling.previousSibling.style.color = 'blue';
console.log(fourth);

//############################





//############# PREVIOUS ELEMENT SIBLING #############

//############################


//############# NEXT ELEMENT SIBLING #############
//############################



//############# NEXT SIBLING #############
//############################
//############# NEXT SIBLING #############
//############################
//############# NEXT SIBLING #############
//############################

//############# NEXT SIBLING #############
//############################


















/** 
//It returns the an object that is ...SPREAD (operator)into another object, but the object will be called by their userId. 
//This is found by using the computed [person.userId] VALUE (accessed by using the dot and )



const students = [
    {
        userId: 'stevenh',
        name: 'Steven',
        passFail: true
    },
    {
        userId: 'debbw',
        name: 'Debbie',
        passFail: true
    },
    {
        userId: 'maxv',
        name: 'Max',
        passFail: false
    }
];

let studentObj = students.reduce(function(acc, person){
    return { ...acc, [person.userId]: person };
}, {});
 
let arrays = [[1, 2, 3], [4, 5], [6]];

let newArray = arrays.reduce(function (acc, currItem) {
   return  acc = acc.concat(currItem);
}, []);



// Using the || operator as a 'default operator'. Example: if an let name = input || nr.items; 
// if the input is left empty by the user the name will by default se to the second condition. 


 * In a way, the SOME method is a version of the || operator that acts on arrays, and EVERY method is like the && operator.
 */