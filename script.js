const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

// function to get number of unchecked items and render to unchecked-count
const getUncheckedCount = () => {
  // get array of checkboxes, filter out checked boxes, set value to length of array
  const uncheckedCountValue = [...document.getElementsByClassName(classNames.TODO_CHECKBOX)].filter(item => !item.checked).length
  // render number of unchecked to unchecked-count
  uncheckedCountSpan.innerHTML = uncheckedCountValue
}  

function newTodo() {
  let todo = prompt('enter new to do task:')

  // conditional to check for todo value
  if (todo !== null && todo !== '') {
    // create todo-container div
    const newTodoDiv = document.createElement('li')
    newTodoDiv.classList.add(classNames.TODO_ITEM)

    // create/append todo-checkbox to todo-list div
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.onchange = getUncheckedCount
    checkbox.classList.add(classNames.TODO_CHECKBOX)
    newTodoDiv.appendChild(checkbox)

    // create/append todo-text to todo-list div
    let textEl = document.createElement('span')
    textEl.classList.add(classNames.TODO_TEXT)
    textEl.innerHTML = todo
    newTodoDiv.appendChild(textEl)

    // append todo-delete button to todo-list div
    let deleteButton = document.createElement('button')
    deleteButton.type = 'button'
    deleteButton.innerHTML = 'Delete'
    deleteButton.classList.add(classNames.TODO_DELETE)
    newTodoDiv.appendChild(deleteButton)

    // append todo-container to todo-list
    list.appendChild(newTodoDiv)

    // get number of list items and render to item-count
    const count = list.childNodes.length
    itemCountSpan.innerHTML = count

    // render unchecked count to update when new item is added
    getUncheckedCount()
    
  } else {
    alert('No todo has been entered!  Please try again.')
  }
  
  

}
