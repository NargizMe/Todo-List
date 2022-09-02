let addButton = document.getElementById('add-button');
let input = document.getElementById('todo-input');
let wrapper = document.getElementById('wrapper');
let listContainer = document.getElementById('todo-list');
let deleteButton = document.querySelector('.delete-button');


input.addEventListener('keyup', ()=> {
    addButton.disabled = false;
})

let lisatData = [];
let idOfList;

addButton.addEventListener('click', () => {
    if(addButton.innerHTML === 'Update'){
        document.querySelectorAll(`li[data-id="${idOfList}"]`).forEach(() => {
            lisatData.forEach(arrEl => {
                if(idOfList == arrEl.id){
                    arrEl.listText = input.value;
                }
            })
        });
        listContainer.innerHTML = '';
    }

    else{
        
        addButton.disabled = input.value? false: true;  
    
        let listObj = {
            id: new Date(),
            listText: input.value,
        }
    
        lisatData.push(listObj);
    
    }

    listContainer.innerHTML = '';
    input.value = '';

    lisatData.forEach(data => {
        listContainer.innerHTML +=`
            <li data-id="${data.id}">
                <h2>${data.listText}</h2>
                <span>
                    <button class="delete-button" onclick="removeList( '${data.id}' )">X</button>
                    <button onclick="editList(this.parentElement.previousElementSibling.innerHTML, '${data.id}' )">Edit</button>
                <span/>
            </li>
        `
    })
    addButton.innerHTML = 'Add';
})

function removeList(id){
    lisatData.forEach(arrEl => {
        if(id == arrEl.id){
            lisatData.splice(arrEl, 1)
        }
    })
    document.querySelector(`li[data-id="${id}"]`).remove();
}

function editList(liText, id){
    input.value = liText;
    addButton.innerHTML = 'Update';
    addButton.disabled = input.value? false: true;
    idOfList = id;
}

// addButton.addEventListener('click', () => {
//     input.value = '';
//     addButton.disabled = input.value? false: true;  
// })

// function createElementScheama(params) {
    
//         console.log(lisatData)
// }