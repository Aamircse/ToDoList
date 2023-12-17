document.addEventListener('DOMContentLoaded', function () {
    // Get the input field and task list
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    // Add event listener for the Enter key
    taskInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Add event listener for the Add button
    document.querySelector('button').addEventListener('click', addTask);

    // Add task function
    function addTask() {
        var taskText = taskInput.value.trim();

        if (taskText !== '') {
            var li = document.createElement('li');
            li.textContent = taskText;

            li.addEventListener('click', function () {
                li.remove();
            });

            taskList.appendChild(li);

            // Clear the input field
            taskInput.value = '';
        }
    }
});
