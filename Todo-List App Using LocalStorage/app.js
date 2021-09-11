/*  The Javascript File.... */


// Step 1 : Lets Grab all the Elements from HTML Document...

    let taskInput = document.getElementById('addTask');

    let taskBtn = document.getElementById('btn-1');

    let taskFilter = document.getElementById('filter');

    let ul = document.getElementById('list-items');

    let clearBtn = document.getElementById('clear-btn');


// Step 2 : Load all Event Listeners : Function Call

    loadAllEventListeners();

// Function loadAllEventListeners : Function Definition :

    function loadAllEventListeners() {

        // F1 : DOM LOAD EVENT when the page is Reloaded 
            document.addEventListener('DOMContentLoaded', getTasks);

        // F2 : Load All event listeners :
            taskBtn.addEventListener("click", addTask);

        // F3 : Remove Task Event :
            ul.addEventListener('click', removeTask);

        // F4 : Clear All List Items form the List-Group:
            clearBtn.addEventListener('click', clearTasks);

        // F5 : Filter Task based on the Search Value :
            taskFilter.addEventListener('keyup', filterTask);

         }

// F 1.a) Get Task From the Local Storage.

    function getTasks(){

        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = []; 
        }
        else {
            // local storage can only store strings...
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.forEach(function (task) {

            let a = document.createElement("a");

            // T2 : Add class name and set attributes for <a> element
            a.setAttribute('href','#');
            a.setAttribute('class' , 'list-group-item list-group-item-action  list-group-item-secondary list-group-item-warning');
            
            // T3 : Create TextNode and Append to <a> Element.
            a.appendChild(document.createTextNode(task));
            
            // T4 : Create a icon append it to <a> element 
            let icon = document.createElement('i');
            icon.setAttribute('class','fas fa-trash-alt m-1');
    
            // T5 : Appending the Icon to <a> Element.
            a.appendChild(icon);
    
            // T6 : Now Append the <a> element to <ul> Element
            ul.appendChild(a);
             
        });

    }


// F 1.b) : Event Handler for the above Event Listeners....

    function addTask(e) {
        
        e.preventDefault();

        if (taskInput.value === "") {
            alert("Cannot Be Empty.")
        }
        else {

        // T1 : Create a new <a> element 
        let a = document.createElement("a");

        // T2 : Add class name and set attributes for <a> element
        a.setAttribute('href','#');
        a.setAttribute('class' , 'list-group-item list-group-item-action  list-group-item-secondary list-group-item-warning');
        
        // T3 : Create TextNode and Append to <a> Element.
        a.appendChild(document.createTextNode(taskInput.value));
        
        // T4 : Create a icon append it to <a> element 
        let icon = document.createElement('i');
        icon.setAttribute('class','fas fa-trash-alt m-1');

        // T5 : Appending the Icon to <a> Element.
        a.appendChild(icon);

        // T6 : Now Append the <a> element to <ul> Element
        ul.appendChild(a);

        // Store in LocalStorage  : Function Call : F1
        storeTaskInLocalStorage(taskInput.value);

        // T7 : clear the inputs :
        taskInput.value = '';
     }
}

        // F1: Function Definition for storeTaskInLocalStorage() :

                        function storeTaskInLocalStorage(task){

                            let tasks;
                            if (localStorage.getItem('tasks') === null) {
                                tasks = []; 
                            }
                            else {
                                // local storage can only store strings...
                                tasks = JSON.parse(localStorage.getItem('tasks'));
                            }

                            tasks.push(task);
                            localStorage.setItem('tasks', JSON.stringify(tasks));
                        }

// F2 : Event Handler for the Delete Button when Clicked 

    function removeTask(e){
       
            if (e.target.parentElement.classList.contains('list-group-item-action')) {
                console.log(e.target);
                if (confirm('Are you sure you want to delete')) {
                    e.target.parentElement.remove();

                    // Remove the Element from the LocalStorage..
                        
                        removeTaskFromLocalStorage(e.target.parentElement);

                }
            }
    }

    // F2 : Function Definition for removeTaskFromLocalStorage :

                function removeTaskFromLocalStorage(taskItem) {

                    let tasks;
                        if (localStorage.getItem('tasks') === null) {
                            tasks = []; 
                        }
                        else {
                        // local storage can only store strings...
                        tasks = JSON.parse(localStorage.getItem('tasks'));
                        }

                        tasks.forEach(function (task,index) {
                            if (taskItem.textContent === task) {
                                tasks.splice(index,1);
                            }
                        });

                        localStorage.setItem('tasks', JSON.stringify(tasks));
            
                    
                }



// F3 : Event Handler for Clear all the Task in The List : 

    function clearTasks() {

    // ul.innerHTML = '';

    // Faster way to remove child elements inside the <li> is 
        while(ul.firstChild){
            ul.removeChild(ul.firstChild);
        }

        // Clear Tasks From Local Storage : 
            clearTaskFromLocalStorage();
    }

        // F3 : Function Definition for Clear tasks

                function clearTaskFromLocalStorage() {
                    localStorage.clear();
                }

// F4 : Event handler for all the filter tasks..

    function filterTask(e){
        
        // Step 1 : Lets grab the input value from the HTML Document..
            let inputValue = e.target.value.toLowerCase();

        // Step 2 : Loop through the list-items

            document.querySelectorAll('.list-group-item').forEach(function (task) {  
            // Loop through Node List 

                let item = task.firstChild.textContent.toLowerCase();

                if (item.includes(inputValue) == true){
                    task.style.display = '';
                }
                else {
                    task.style.display = 'none';
                }
            });
    }



