var addBtn = document.querySelector('#addTodo');

//grabbing element for button
addBtn.addEventListener('click', function(event){   
    var addItem = document.querySelector('input[name = "addTodo"]').value;
    //Console log to check if item is being grabbed
    // console.log(addItem);
    var itemsList = document.querySelector('#itemsList');
    var listItem = document.createElement('li');
    
    itemsList.appendChild(listItem);
    listItem.innerHTML = addItem;
    clear.value="";

    // listItem.onclick = function(){
        // this.remove();
    // }
    itemsToRemove();
})


function itemsToRemove(){
var removeItems = document.querySelector('#itemsList');
console.log(removeItems);
removeItems.addEventListener('click', function(event){
    // console.log(event.target);
    var item = event.target;
    console.log(item);
    item.remove();
})
// removeItems.onclick =function(){
//     this.remove();
}
 itemsToRemove();