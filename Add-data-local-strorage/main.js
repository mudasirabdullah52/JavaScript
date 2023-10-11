var form = document.getElementById('inner-form');


var msg = document.getElementById('msg');


form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;


    // var li = document.createElement('li');
    // li.appendChild(document.createTextNode(name));

    // var users = document.getElementById('users');
    // users.appendChild(li);
    // Add Data into the localStorage
    var myobj = {
        myname: name,
        myemai: email

    };

    var myobj_serkauzed = JSON.stringify(myobj);
    // console.log(myobj_serkauzed);
    localStorage.setItem(name, myobj_serkauzed);
    console.log(localStorage);


}
