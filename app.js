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
	addEventListener('click', addTodoItem)
}

const addTodoItem = () => {
	if (todoInput.value !== '') {
		newTodo = document.createElement('li')
		newTodo.textContent = todoInput.value
		ulList.append(newTodo)
		todoInput.value = ''
		errorInfo.textContent = ''
	} else {
		errorInfo.textContent = 'wpisz treść'
	}
}


const createButtons = () => {
	const toolsPanel = document.createElement('div')
	toolsPanel.classList.tools
}

document.addEventListener('DOMContentLoaded', main)
// addBtn.appendChild(newElement)
