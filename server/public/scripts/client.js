$(document).ready(onReady);

function onReady() {
    console.log('JQ is working!');
    //add click listener for the #addButton
    clickListener();

    //load existing to-dos on page load
    getToDos();
}

function clickListener() {
$('#addButton').on('click', addToDo);
}

function addToDo() {
console.log('in addToDo');
let itemToSend ={
    list_item: $('#add-todo').val(),
}
$.ajax({
    method: 'POST',
    url: '/todos',
    data: itemToSend
}).then(function(response) {
    $('#add-todo').val('');
    getToDos();
}).catch (function(error) {
    alert(`error in ajax POST ${error}`)
})
console.log(itemToSend);
};



function getToDos() {
    console.log('in getToDos');

    $.ajax({
        method: 'GET',
        url: '/todos'
    }).then(function (response) {
        console.log('GET', response);
       // renderToDom();
    })
    .catch(function(error) {
        alert('error in ajax GET', error);
    })

}

//Write the renderToDom function below
// function renderToDom(todo_list) {
//     console.log('in renderToDom');
//     $('#view-todos').empty();
//     for (let todo of todo_list) 
//         $('#view-todos').append(`
//         <tr>
//             <td>${todo.list_item}</td>
//             <td>${todo.complete}</td>
//             <td>
//                 <button class="delete-btn" data-id="${todo.id}">Delete From List</button>
//             </td>
//             <td>
//                 <button class="mark-done" data-id="${todo.id}">Mark As Done</button>
//             </td>
//         </tr>
        
//         `)


// }


//mark items as complete conditionally render css to 
//dynamically created elements **look at pg-starting-repo**
//client.js:23