let todoInput //wpisywanie tresci zadania
let errorInfo //info o braku zas
let addBtn //button add nowy do listy
let ulList
let newTodo //nowe LI, nowe zadanie
let popup
let popupInfo //tekst w popoupie
let todoToEdit //edytowany Todo
let popupInput //input w popoupie
let popupAddBtn //zatwierdz w popoupi
let popupCloseBtn //anuluj w popupie

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}
const prepareDOMElements = () => {
	todoInput = document.querySelector('.todo-input')
	errorInfo = document.querySelector('.error-info')
	addBtn = document.querySelector('.btn-add')
	ulList = document.querySelector('.todolist ul')

	popup = document.querySelector('.popup')
	popupInfo = document.querySelector('.popup-info')
	popupInput = document.querySelector('.popup-input')
	popupAddBtn = document.querySelector('.accept')
	popupCloseBtn = document.querySelector('.cancel')
}
const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addTodoItem)
	ulList.addEventListener('click', checkClick)
	popupCloseBtn.addEventListener('click', closePopup)
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
		// buttonComplete.classList.add('complete')
		event.target.closest('li').classList.toggle('completed')
		event.target.classList.toggle('completed')
	} else if (event.target.matches('.edit')) {
		editTodo()
		// console.log('edited')
	} else if (event.target.matches('.delete')) {
		// console.log('deleted')
	}
}

const editTodo = () => {
	popup.style.display = 'flex'

	// buttonEdit.classList.add('edit')
}
const closePopup = () => {
	popup.style.display = 'none'
}
// editTodo()
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
