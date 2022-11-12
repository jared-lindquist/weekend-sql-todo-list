$(document).ready(onReady);

function onReady() {
    console.log('JQ is working!');   
    clickListener();
    getToDos();
}

function clickListener() {
$('#addButton').on('click', addToDo);
//add click listener for delete-btn
//add click listener for mark-complete-btn
}

function addToDo() {
console.log('in addToDo');
let itemToSend ={
    list_item: $('#add-todo').val(),
    complete: $('#mark-complete').val(),
}
$.ajax({
    method: 'POST',
    url: '/todos',
    data: itemToSend
}).then(function() {
    console.log('post complete');
    $('#add-todo').val('');
    $('#mark-complete').val();
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
        renderToDom();
    })
    .catch(function(error) {
        alert('error in ajax GET', error);
    })

}

function renderToDom(todo) {
    console.log('in renderToDom');
    $('#view-todos').empty();
    for (let item of todo) {
        $('#view-todos').append(`
        <tr>
            <td>${item.list_item}</td>
            <td>${item.complete}</td>
            <td>
                <button 
                    class="delete-btn" 
                    data-id="${item.id}"
                    >Delete From List</button>
            </td>
            <td>
                <button 
                    class="mark-complete" 
                    data-id="${item.id}"
                    >Mark As Done</button>
            </td>
        </tr>
        `);
    }
}



//mark items as complete conditionally render css to 
//dynamically created elements **look at pg-starting-repo**
//client.js:23

// function deleteTodo() {
//     console.log('in deleteTodo');
//     const todoId = $(this).data('id')
//     console.log(todoId);
//     $.ajax({
//         method: 'DELETE',
//         url: `/todos/${todoId}`
//     })
//     .then(function() {
//         getToDos();
//     })
//     .catch(function(error) {
//         alert(`Error in deleteTodo ${error}`);
//     });//end ajax
// }//end deleteTodo

// function markComplete() {
//     console.log('in markComplete');
//     let id = $(this).data('id');
//     console.log(id);
    
//     $.ajax({
//         method: 'PUT',
//         url:`/todo/complete/${id}`
//     })
//     .then(function() {
//         getToDos();
//     })
//     .catch(function(error) {
//         alert('Error in ajaxPUT', error);
//     })//end ajax
// }//end markComplete