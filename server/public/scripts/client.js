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
}).then(function(response) {
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

 function renderToDom() {
    console.log('in renderToDom');
    $('#view-todos').empty();
    // for (let todo of response) 
    //     $('#view-todos').append(`
    //     <tr>
    //         <td>${todo.list_item}</td>
    //         <td>${todo.complete}</td>
    //         <td>
    //             <button class="delete-btn" data-id="${todo.id}">Delete From List</button>
    //         </td>
    //         <td>
    //             <button class="mark-complete" data-id="${todo.id}">Mark As Done</button>
    //         </td>
    //     </tr>
        
    //     `)
}



//mark items as complete conditionally render css to 
//dynamically created elements **look at pg-starting-repo**
//client.js:23