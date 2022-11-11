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
    list_item: $('add-todo').val(),
};
console.log(itemToSend);
}



function getToDos() {
    console.log('in getToDos');

    $.ajax({
        method: 'GET',
        url: '/todos'
    }).then(function (response) {
        console.log('GET', response);
        //renderToDom();
    })
    .catch(function(error) {
        alert('error in ajax GET', error);
    })

}
