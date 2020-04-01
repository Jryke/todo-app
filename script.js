const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

// function to render number of items to item-count
const renderItemCount = () => {
  // get number of todo items
  const count = document.getElementsByClassName(classNames.TODO_ITEM).length
  // render 
  itemCountSpan.innerHTML = count
}

// function to render number of unchecked items to unchecked-count
const renderUncheckedCount = () => {
  // get array of checkboxes, filter out checked boxes, set value to length of array
  const uncheckedCountValue = [...document.getElementsByClassName(classNames.TODO_CHECKBOX)].filter(item => !item.checked).length
  // render number of unchecked to unchecked-count
  uncheckedCountSpan.innerHTML = uncheckedCountValue
}

// function to remove todo from list
const deleteItem = (e) => {
  // identify button element parent and remove it
  e.target.parentElement.remove()
  // rerender item-count and unchecked-count
  renderItemCount()
  renderUncheckedCount()
}

const newTodo = () => {
  // prompt modal to enter task value
  let todo = prompt('enter new to do task:')

  // conditional to check for todo value
  if (todo !== null && todo !== '') {
    // create todo-container div
    const newTodoDiv = document.createElement('li')
    newTodoDiv.classList.add(classNames.TODO_ITEM)

    // create/append todo-checkbox to todo-list div
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.onchange = renderUncheckedCount
    checkbox.classList.add(classNames.TODO_CHECKBOX)
    newTodoDiv.appendChild(checkbox)

    // create/append todo-text to todo-list div
    const textEl = document.createElement('span')
    textEl.classList.add(classNames.TODO_TEXT)
    textEl.innerHTML = todo
    newTodoDiv.appendChild(textEl)

    // append todo-delete button to todo-list div
    const deleteButton = document.createElement('button')
    deleteButton.type = 'button'
    deleteButton.onclick = deleteItem
    deleteButton.innerHTML = 'Delete'
    deleteButton.classList.add(classNames.TODO_DELETE)
    newTodoDiv.appendChild(deleteButton)

    // append todo-container to todo-list
    list.appendChild(newTodoDiv)

    // render item-count and unchecked-count when new item is added
    renderItemCount()
    renderUncheckedCount()
    
  } else {
    alert('No todo has been entered!  Please try again.')
  }
}
