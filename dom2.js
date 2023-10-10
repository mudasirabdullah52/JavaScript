var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);
// Delete item from the list
itemList.addEventListener('click', removeItem);
// filter the elements
filter.addEventListener('keyup', filterItems);

// Add item 
function addItem(e) {
    e.preventDefault();

    // Get input value 
    var newItem = document.getElementById('item').value;

    // Create new li element

    var li = document.createElement('li');

    // add class to the list
    li.className = 'list-group-item'

    // apppend the text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create the delete button element

    var deleteBtn = document.createElement('button');
    // add class to deleteBtn 
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // add text node to the button 
    deleteBtn.appendChild(document.createTextNode('X'))
    // append this delete button to li 
    li.appendChild(deleteBtn)

    // CREATE THE EDIT BUTTON
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editBtn);

    // append li element to itemList

    itemList.appendChild(li);


    console.log(li)
}
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure to Delete')) {
            // get the parent of the target element  
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
    else if (e.target.classList.contains('edit')) {
        var li = e.target.parentElement;
        li.innerHTML = 'hello Mudii';
    }
}

function filterItems(e) {
    // convert the text into lower case;
    var text = e.target.value.toLowerCase();
    // get list
    var items = itemList.getElementsByTagName('li');
    // make the array go lists
    Array.from(items).forEach(function (item) {
        // get the text of list element 
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }

    })


}