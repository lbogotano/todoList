$('#addTodo').click(function(){
    $('#itemsList').append($('<li>', {
        text: $('#clear').val()
    }))
    $('#clear').val(" ");

    removeItem();
})

function removeItem(){
$('li').click(function(){
    this.remove();
})
}
removeItem();
