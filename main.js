// const name = "Yash Prasad";
// const age = 25;
// const address = "Prestige Falcon City, Bangalore";

// console.log("personal details = Ny name is", name, "age is", age, "address is", address);
// console.log('my name is ${name} and i am ${age}')
// console.log(`My name is ${name} age is ${age} address is ${address}`)
// const str = `personal details = My name is ${name} age is ${age} address is ${address}`

// const str1 = address.split(" , ");

// console.log(name);

// console.log(name.substring(0, 5).toUpperCase());

// ARRAYS====================================================================================================


// const arr = new Array('Mudasir', 'Ahmad', 'kumar', 3);

// arr.push('abdullah');

// arr.pop();

// arr.unshift('My Name is:');
// arr[3] = 'khan';
// console.log(arr);
// console.log(arr[3]);
// console.log(arr.indexOf('khan'));
// console.log(Array.isArray(arr));

// ************************************************************************************************************

// *********************************************OBJECTS***********************************************************

// const person = {
//     fristName: "Mudasir",
//     lastNmae: 'Kumar',
//     age: 24,
//     address: {
//         Streat: "Kumar Mohallah",
//         village: 'Satura',
//         tehsil: 'Tral'
//     },
//     hobies: ['adventure', 'travel', 'vlontaire']

// }
// console.log(person.fristName, person.lastNmae)
// console.log(person.address.Streat)
// console.log(person.hobies[2])
// **************************************pulling the variable from the object
// const { fristName, lastNmae } = person;
// console.log(fristName)
// const { fristName, lastNmae, address: { village } } = person;
// console.log(village)
// *************************************adding new value

// person.email = "kumarmudasir92@gmail.com"



// /*************************************************** */Array of Ojects

// const arr = [
//     {
//         id: 1,
//         text: "meeting with boss",
//         idchecked: true
//     },
//     {
//         id: 2,
//         text: "meeting with preeti",
//         idchecked: true
//     },
//     {
//         id: 3,
//         text: "meeting with khusi",
//         idchecked: false
//     }
// ];

// console.log(arr)
// console.log(arr[1].text)

// ******************Convert arry of object into JSSON

// const todoJSON = JSON.stringify(arr);
// console.log(todoJSON);


// **********************************************?loops in javascrips
// FOR LOOP
// for (let i = 0; i < arr.length; i++) {
//     console.log("the info", arr[i].text);
// }

// for (let items of arr) {
//     console.log(items.id);
// }

//****************** */ ForECah loops Map, and filter

// arr.forEach(function (item) {
//     console.log(item.text);
// });




// // map is working like a foreach but it return  the value
// const arrtext = arr.map(function (item) {
//     return item.text
// })
// console.log(arrtext)




// filter is is used to filter the array based on some condition
// const filterValue = arr.filter(function (item) {
//     return item.id === 1
// })
// console.log(filterValue)




// getting any particular valye from that object
// const filterValue = arr.filter(function (item) {
//     return item.id === 1
// }).map(function (item) {
//     return item.text;
// })
// console.log(filterValue)


// Functions

// function fun(num1, num2) {
//     // console.log(num1 + num2);
//     return num1 + num2;
// }
// console.log(fun(10, 20))


// Arrow Funcation
// const addnums = (n1, n2) => {
//     return n1 + n2;
// }
// console.log(addnums(10, 20))

// const addnums1 = (n1, n2) =>
//     n1 + n2;

// console.log(addnums1(10, 20))




// Constractor and prototypes

// function Person(fristName, lastNmae, dob) {
//     this.fristName = fristName;
//     this.lastNmae = lastNmae;
// this.dob = dob;
// converting the date dob into data object
// this.dob = new Date(dob);

// this.getBirthYear = function () {
//     return this.dob.getFullYear();
// }
// this.getFullName = function () {
//     return `${this.fristName} ${this.lastNmae}`;
// }

// }


// prototype
// Person.prototype.getBirthYear = function () {
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName = function () {
//     return `${this.fristName} ${this.lastNmae}`;
// }

// const person1 = new Person("Mudasir", "Ahmad", "02-17-1998");
// console.log(person1);
// // console.log(person1.dob.getFullYear());
// console.log(person1.getBirthYear())
// console.log(person1.getFullName())




// ES6 classes

// class Person {
//     constructor(fristName, lastNmae, dob) {
//         this.fristName = fristName;
//         this.lastNmae = lastNmae;
//         this.dob = new Date(dob);
//     }
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }
//     getFullName() {
//         return `${this.fristName} ${this.lastNmae}`;
//     }

// }
// const person1 = new Person("Mudasir", "Ahmad", "02-17-1998");
// console.log(person1);
// console.log(person1.getBirthYear())
// console.log(person1.getFullName())





// DOM
// const ul = document.querySelector('.items')
// ul.firstElementChild.textContent = "Hello Mudasir";
// ul.children[1].innerHTML = "need more practic";
// ul.lastElementChild.innerHTML = "<h3>very good</h3>  "
// ul.firstElementChild.style.background = 'Yellow';


const myform = document.querySelector('#inner-form');
const mynmae = document.querySelector('#name');
const myemail = document.querySelector('#email');
const mymsg = document.querySelector('#msg');
const userList = document.querySelector('#users');

myform.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault();

    if (myemail.value === '' || mynmae.value === '') {
        mymsg.innerHTML = 'Please fill all the fields'
        mymsg.style.color = 'red';
        setTimeout(() => mymsg.remove(), 3000)
    }
    else {
        const li = document.createElement('li');

        li.appendChild(document.createTextNode(`${mynmae.value}:${email.value}`));

        console.log(li);


        myemail.value = '';
        mynmae.value = '';
    }


}