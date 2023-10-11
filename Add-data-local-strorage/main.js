var form = document.getElementById('inner-form');


var msg = document.getElementById('msg');


form.addEventListener('submit', addItem);

function addItem(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Creating the li for user info
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(name + ' ' + email + ' ' + phone));

    // getting the list and add the li to
    var users = document.getElementById('users');
    users.appendChild(li);

    // Add Data into the localStorage
    var myobj = {
        myname: name,
        myemai: email,
        nyphone: phone
    };

    // converting the object into string 
    var myobj_serkauzed = JSON.stringify(myobj);
    localStorage.setItem(name, myobj_serkauzed);
    console.log(localStorage);


}
