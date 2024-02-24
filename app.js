let todoInput
let errorInfo
let addBtn
let ulList
let newTodo //nowe LI, nowe zadanie

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}
const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')
}
const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addTodoItem)
	ulList.addEventListener('click', checkClick)
}

const addTodoItem = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		ulList.append(newTodo)
		createButtons()
		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'wpisz treść'
	}
}

const createButtons = () => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.add('tools')

	const buttonComplete = document.createElement('button')
	buttonComplete.classList.add('complete')
	buttonComplete.innerHTML = '<i class="fas fa-check"</>'

	const buttonEdit = document.createElement('button')
	buttonEdit.classList.add('edit')
	buttonEdit.innerText = 'EDIT'

	const buttonDelete = document.createElement('button')
	buttonDelete.classList.add('delete')
	buttonDelete.innerHTML = '<i class="fas fa-times"</>'

	newTodo.append(toolsPanel)
	// console.log('dupa')
	toolsPanel.append(buttonComplete, buttonEdit, buttonDelete)
}
const checkClick = event => {
	// console.log(event.target.classList.contains('complete'))

	if (event.target.matches('.complete')) {
		console.log('completed')
		console.log(event.targer)
	} else if (event.target.matches('.edit')) {
		console.log('edited')
	}
	else if (event.target.matches('.delete')) {
		console.log('deleted')
	}
}
//
//
//
//
//
//
//
//
document.addEventListener('DOMContentLoaded', main)
// addBtn.appendChild(newElement)
