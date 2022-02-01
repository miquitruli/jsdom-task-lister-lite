document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById('create-task-form'); //const form = document.getElementById('create-task-form');
  const list = document.getElementById('tasks');
  //<div id="list">
    //<h2>My Todos</h2>
    //<ul id="tasks"> </ul>
  //</div>
  
  form.addEventListener('submit', addTask); //add task

  list.addEventListener('click', removeTask); //delete

  function addTask(e){
    e.preventDefault();

    const newTask = document.getElementById('new-task-description').value;
    console.log(newTask);

    // Create new li element
    const li = document.createElement('li');

    // Add text node with input value
    li.appendChild(document.createTextNode(newTask));

    // create delete button element
    const deleteBtn = document.createElement('button');

    // append text node to delete button
    deleteBtn.appendChild(document.createTextNode('X'));

    // append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    list.appendChild(li);

  }

  function removeTask(e){
    if (e.target.nodeName === 'BUTTON') {
      if(confirm('Are you sure?')) {
        let li = e.target.parentElement;
        list.removeChild(li);
      }
    }

  }

});
