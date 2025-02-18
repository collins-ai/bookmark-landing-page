const lists = document.querySelectorAll(`.list`)
const firstList = document.getElementById(`firstList`)
const image = document.getElementById(`image`)
const head = document.getElementById(`head`)
const body = document.getElementById(`body`)
let initial
const container = [
  {
    image: `images/illustration-features-tab-1.svg`,
    head: `Bookmark in one click`,
    body: `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`
  },
  {
    image: `images/illustration-features-tab-2.svg`,
    head: `Intelligent search`,
    body: `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`
  },
  {
    image: `images/illustration-features-tab-3.svg`,
    head: `Share your bookmarks`,
    body: `Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.`
  }
]

lists.forEach((list, index) => {
  const changeContent = (e) => {
    image.src = container[index].image
    head.innerHTML = container[index].head
    body.innerHTML = container[index].body
    firstList.classList.remove(`listStyle`)
    e.target.classList.add(`listStyle`)
    
    if(initial) {
      initial.classList.remove(`listStyle`)
    }
    initial = e.target
  }
  list.addEventListener(`click`, changeContent)
  list.addEventListener(`keypress`, changeContent)
})


const questions = document.querySelectorAll(`.question`)
const answers = document.querySelectorAll(`.answer`)
const arrows = document.querySelectorAll(`.arrow`)

questions.forEach((question, index) => {
  const showAnswer = () => {
    answers[index].classList.toggle(`hidden`)
    arrows[index].classList.toggle(`arrowStyle`)
  }
  question.addEventListener(`click`, showAnswer)
  question.addEventListener(`keypress`, showAnswer)
})


const input = document.getElementById(`input`)
const errorImage = document.createElement(`img`)
const errorMessage = document.createElement(`p`)
const submit = document.getElementById(`submit`)

input.appendChild(errorImage)
errorImage.src = `images/icon-error.svg`
errorImage.classList.add(`errorImage`)
input.appendChild(errorMessage)
errorMessage.innerHTML = `Whoops, make sure it's an email`
errorMessage.classList.add(`errorMessage`)

const checkValidation = (e) => {
  const email = document.getElementById(`email`)
  const pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
  
  if(!email.value.match(pattern)) {
    e.preventDefault()
    email.classList.add(`emailStyle`)
    errorImage.classList.add(`display`)
    errorMessage.classList.add(`display`)
  }
}
submit.addEventListener(`click`, checkValidation)
submit.addEventListener(`keypress`, checkValidation)


const navigate = document.getElementById(`navigate`)
const closeIcon = document.getElementById(`close`)
const navigation = document.getElementById(`navigation`)

const toggleNavigation = () => {
  navigation.classList.toggle(`displayNav`)
}
navigate.addEventListener(`click`, toggleNavigation)
closeIcon.addEventListener(`click`, toggleNavigation)