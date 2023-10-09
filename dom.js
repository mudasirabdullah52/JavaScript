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

var items = document.getElementsByClassName('list-group-item');
console.log(items)
console.log(items[1])
items[1].textContent = "Hello Mudii";
items[1].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'green';
// this well give the error
// items.style.backgroundColor = 'light';

// we need to attrate with loop 
for (var i = 0; i < items.length; i++) {
    items[i].style.fontWeight = 'bold';
    // items[i].style.backgroundColor = '#f4f4f4'
}


