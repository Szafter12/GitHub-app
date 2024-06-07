const arrowBtn = document.querySelector('.switch-btn')
const arrow = document.querySelector('.arrow')
const allBtnsName = document.querySelectorAll('.btn-name')
const allBtns = document.querySelectorAll('.functional-btn')
const nav = document.querySelector('.nav-left')

const showNav = () => {
	nav.classList.toggle('showNav')
	arrow.classList.toggle('arrowRotate')
	allBtnsName.forEach(name => {
		name.classList.toggle('showName')
	})
}

function setActive(button) {
	allBtns.forEach(btn => {
		btn.classList.remove('active')
	})
	button.classList.add('active')
}

arrowBtn.addEventListener('click', showNav)
