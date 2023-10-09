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


// SLECTTOR // GET ELEMENT BY Queary Selector all;

var titles = document.querySelectorAll('.title');
// console.log(titles)
titles[0].textContent = 'this list looks good'
// using the same property on alternates elements
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}
