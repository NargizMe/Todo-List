let addButton = document.getElementById('add-button');
let input = document.getElementById('todo-input');
let wrapper = document.getElementById('wrapper');
let listContainer = document.getElementById('todo-list');
let deleteButton = document.querySelector('.delete-button');



let listElements;
let creationOfButton;
let creationOfLi;
let creationOfEdit;
let creationOfh2;
let updateButton;

input.a
addButton.disabled = input.value? 'false': 'true';


addButton.addEventListener('click', () => {

    creationOfLi = document.createElement('li');
    creationOfButton = document.createElement('button');
    creationOfEdit = document.createElement('button');
    updateButton = document.createElement('button');
    creationOfh2 = document.createElement('h2');

    creationOfButton.classList.add('delete-button');
    creationOfEdit.classList.add('edit-button');

    creationOfh2.innerHTML = input.value;
    creationOfButton.innerHTML = "X";
    creationOfEdit.innerHTML = "Edit";
    updateButton.innerHTML = "Update";


    creationOfLi.appendChild(creationOfh2);
    creationOfLi.appendChild(creationOfButton);
    creationOfLi.appendChild(creationOfEdit);
    listContainer.appendChild(creationOfLi);

    
    input.value = ''
    creationOfButton?.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    })

    creationOfEdit?.addEventListener('click', (e) => {
        input.value = creationOfh2.innerText;
        wrapper.appendChild(updateButton);
    })
    
    updateButton?.addEventListener('click', (e) => {
        input.value = '';
        creationOfh2.innerHTML = input.value;
    })
})





// function deleteListElement(e){
//     console.log(e.target.parentElement)
//     // this.parentElement.remove();
// }

