// console.log("hi my name is mudasir Ahmad Kumar")
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10] = " hello";
// console.log(document.form);
// console.log(document.links);
// console.log(document.images);


// SELECTORS // GET ELEMENTS BY ID

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = "Mudii header";
// headerTitle.innerText = "by by mudii";
// headerTitle.innerHTML = "<h3> Hello Mudii</h3>"
// header.style.borderBottom = 'solid 3px #000'
// headerTitle.style.borderBottom = 'solid 3px #000'


// SELECTOR // GET ELEMENT BY CLASS NAME

// var items = document.getElementsByClassName('list-group-item');
// console.log(items)
// console.log(items[1])
// items[1].textContent = "Hello Mudii";
// items[1].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';
// // this well give the error
// // items.style.backgroundColor = 'light';

// // we need to attrate with loop
// for (var i = 0; i < items.length; i++) {
//     items[i].style.fontWeight = 'bold';
//     // items[i].style.backgroundColor = '#f4f4f4'
// }


// SLECTTOR // GET ELEMENT BY TAG NAME;

// var li = document.getElementsByTagName('li');
// console.log(li)
// console.log(li[1])
// li[1].style.fontWeight = 'bold';
// li[1].textContent = "Hello Mudii";
// li[2].style.backgroundColor = 'green';


// // we need to attrate with loop
// for (var i = 0; i < li.length; i++) {
//     li[i].style.fontWeight = 'bold';
//     // items[i].style.backgroundColor = '#f4f4f4'
// }


// SLECTTOR // GET ELEMENT BY Queary Selector;

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';
// var input = document.querySelector('input');
// input.value = "hello world";

// var submit = document.querySelector('input[type="submit"');
// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = 'red';

// var lastitem = document.querySelector(".list-group-item:last-child");
// lastitem.style.color = 'blue';

// var secitem = document.querySelector('.list-group-item:nth-child(2)');
// secitem.style.color = 'green';



//                                                                  SLECTTOR // GET ELEMENT BY Queary Selector all;

// var titles = document.querySelectorAll('.title');
// // console.log(titles)
// titles[0].textContent = 'this list looks good'
// // using the same property on alternates elements
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }



//                                          Traversing DOM

//                                          parent Node
// var itemList = document.querySelector('#items');
// // access the parent of itemList
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// // acessing the parent of parent
// var pop = itemList.parentNode.parentNode;
// pop.style.backgroundColor = "cyan"

//                                        PARENT ELEMENT

// var itemList = document.querySelector('#items');
// // access the parent of itemList
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// // acessing the parent of parent
// var pop = itemList.parentElement.parentElement;
// pop.style.backgroundColor = "cyan"

//                                         chlid nodes    // return nodes list

// var itemList = document.querySelector('#items');
// console.log(itemList.childNodes)

//                                         CHILDEREN NODES USE ALWAYS// return html collection


// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow'

//                                      FIRST CHILD

// console.log(itemList.firstChild)

//                                      FIRST ELEMENT CHILD

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Mudasir is a good boy';


//                                      LAST CHILD
// console.log(itemList.lastChild)


//                                      LAST eLEMENT CHILD

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Mudasir is working very hard ';


//                                      NEXT SIBLING


// var itemList = document.querySelector('#items');
// console.log(itemList.nextSibling)

//                                 NEXT ELEMENT sIBLING
// console.log(itemList.nextElementSibling);

//                                  previous sibling

// console.log(itemList.previousSibling)

//                                  PREVIOUS ELEMENT SIBLING

// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = "red";


//                                                Create element

var newDiv = document.createElement("div");
// add class
newDiv.className = 'hello'
// add id
newDiv.id = "hello-id"
//   add attribute
newDiv.setAttribute('titel', "hello Div")
// create a text node
var newDivText = document.createTextNode("hello world");
// add text to div
newDiv.appendChild(newDivText)

// insert this div into to the DOM
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv)

newDiv.style.fontSize = '30px';
newDiv.style.fontFamily = 'bold';
container.insertBefore(newDiv, h1);







