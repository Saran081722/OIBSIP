document.getElementById('todo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (title && description) {
        addTodoItem(title, description);
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    }
});

function addTodoItem(title, description) {
    const todoList = document.getElementById('todo-list');

    const row = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.textContent = title;
    row.appendChild(titleCell);

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = description;
    row.appendChild(descriptionCell);

    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function() {
        todoList.removeChild(row);
    };
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    todoList.appendChild(row);
}
