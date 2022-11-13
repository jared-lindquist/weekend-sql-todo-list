$(document).ready(onReady);

function onReady() {
    console.log('JQ is working!');   
    clickListener();
    getToDos();
}

function clickListener() {
$('#addButton').on('click', addToDo);
//add click listener for delete-btn
$('#view-todos').on('click', '.delete-btn', deleteTodo);
//add click listener for mark-complete-btn
$('#view-todos').on('click', '.mark-complete', markComplete);
}

function addToDo() {
console.log('in addToDo');
let itemToSend ={
    list_item: $('#add-todo').val(), 
    complete: false
}
$.ajax({
    method: 'POST',
    url: '/todos',
    data: itemToSend
}).then(function() {
    console.log('post complete');
    $('#add-todo').val('');
    // $('#mark-complete').val('');
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
        renderToDom(response);
    })
    .catch(function(error) {
        alert('error in ajax GET', error);
    })

}

function renderToDom(response) {
    console.log('in renderToDom');
    $('#view-todos').empty();
    for (let item of response) {
        if (item.complete === false) {
        $('#view-todos').append(`
        <div class="content">
        <tr>
            <td class="item">${item.list_item}</td>
            <td>
                <button 
                    class="delete-btn" 
                    data-id="${item.id}"
                    >Delete From List
                </button>
            </td>
            <td>
                <button 
                    class="mark-complete" 
                    data-id="${item.id}"
                    data-direction="down"
                    >Mark As Done
                </button>
            </td>
        </tr>
        </div>
        `);
        }//end append
    }//end for loop
}//end renderToDom



//mark items as complete conditionally render css to 
//dynamically created elements **look at pg-starting-repo**
//client.js:23

function deleteTodo() {
    console.log('in deleteTodo');
    const todoId = $(this).data('id')
    console.log(todoId);
    $.ajax({
        method: 'DELETE',
        url: `/todos/${todoId}`
    })
    .then(function() {
        getToDos();
    })
    .catch(function(error) {
        alert(`Error in deleteTodo ${error}`);
    });//end ajax
}//end deleteTodo

function markComplete() {
    $(this).attr("disabled", "disabled");
    $(this).parent().addClass('complete');
    console.log('in markComplete');
    const id = $(this).data('id');
    const direction = $(this).data('direction');
    console.log(id);
    
    $.ajax({
        method: 'PUT',
        url:`/todos/complete/${id}`,
        data: {
            direction: direction
        }
    })
    .then(function() {
        // getToDos();
    })
    .catch(function(error) {
        alert('Error in ajaxPUT', error);
    })//end ajax
}//end markComplete