// var form = document.getElementById('inner-form');


// var msg = document.getElementById('msg');
// var users = document.getElementById('users');

// users.addEventListener('click', removeItem);

// form.addEventListener('submit', addItem);

// function addItem(e) {
//     e.preventDefault();
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var phone = document.getElementById('phone').value;

//     // Creating the li for user info
//     var li = document.createElement('li');
//     li.appendChild(document.createTextNode(name + ' ' + email + ' ' + phone));

//     // Add button
//     var deleteBtn = document.createElement('button');
//     deleteBtn.className = 'delete'
//     deleteBtn.appendChild(document.createTextNode('delete'));
//     li.appendChild(deleteBtn);

//     // getting the list and add the li to
//     var users = document.getElementById('users');
//     users.appendChild(li);

//     // Add Data into the localStorage
//     var myobj = {
//         myname: name,
//         myemai: email,
//         nyphone: phone
//     };

//     // converting the object into string
//     var myobj_serkauzed = JSON.stringify(myobj);
//     localStorage.setItem(name, myobj_serkauzed);
//     console.log(localStorage);


// }
// function removeItem(e) {
//     e.preventDefault();
//     if (e.target.classList.contains('delete')) {
//         if (confirm('Are you sure to Delete')) {
//             // get the parent of the target element
//             var li = e.target.parentElement;

//             users.removeChild(li);
//         }
//     }
// }





// NOW TRY TO DO THE ABOVE WITH DIFFERNT WAY



function saveOnLocal(e) {
    e.preventDefault();
    console.log(1)
}
