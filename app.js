let todoInput
let errorInfo
let addBtn
let ulList

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

document.addEventListener('DOMContentLoaded', main)
const addTodoItem = () => {
	if (todoInput.value !== '') {
		console.log('ok')
	} else {
		errorInfo.textContent = 'wpisz treść'
	}
}
// addBtn.appendChild(newElement)
