// If pause button is clicked, then pause becomes true and subsequent actions follow
pause = false
let timer = setInterval( () => {counter.innerText = parseInt(counter.innerText) + 1}, 1000);
//


// Action for leaving comments
const newForm = document.querySelector("#comment-form")
const textBox = document.querySelector("#comment-form > input[type=text]")
const list = document.querySelector("#list") 

newForm.addEventListener('submit', ev => {
  ev.preventDefault()
  list.insertAdjacentHTML("beforeend", `${textBox.value} <br>`)
  newForm.reset()
});
//


// Actions for buttons
const minusButton = document.querySelector("#\\-")
const addButton = document.querySelector("#\\+")
const likeButton = document.querySelector("#\\<3")
const pauseButton = document.querySelector("#pause")
const submitButton = document.querySelector("#submit")
const likes = document.querySelector("body > ul.likes")
const counter = document.querySelector("#counter")


document.addEventListener('click', event => {
  if(event.target === minusButton){
    counter.innerText = parseInt(counter.innerText) - 1
  } else if(event.target === addButton){
    counter.innerText = parseInt(counter.innerText) + 1
  } else if(event.target === pauseButton) {
    minusButton.disabled = !minusButton.disabled
    addButton.disabled = !addButton.disabled
    likeButton.disabled = !likeButton.disabled
    submitButton.disabled = !submitButton.disabled
      if(!pause){
        timer = setInterval( () => {counter.innerText = parseInt(counter.innerText) + 1}, 1000);
        pauseButton.innerText = "pause"
      } else{
        clearInterval(timer);
        pauseButton.innerText = "resume"
      }
  } else if(event.target === likeButton){
      const likedNumber = likes.querySelector(`li[data-like-id="${counter.innerText}"]`)
      if(likedNumber) {
          const likedNumberCounter = likedNumber.querySelector("span")
          likedNumberCounter.innerText = parseInt(likedNumberCounter.innerText) + 1
          likedNumberCounter.innerText = likedNumberCounter.innerText + " times"
      } else {
          likes.insertAdjacentHTML("beforeend", 
            `<li data-like-id="${counter.innerText}">${counter.innerText} has been liked <span>1 time</span></li>`)
      }
  }
})
//