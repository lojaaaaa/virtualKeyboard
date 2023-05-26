// объявление переменных
const keyboard = document.querySelector('#keyboard')
const keyboardButtons = document.querySelectorAll('.keyboard__button')
const textArea = document.querySelector('#text')
const caps = document.querySelector('#caps')

const changeLang = document.querySelector('#change-lang')
const changeTheme = document.querySelector('#change-theme')
const settings = document.querySelector('#settings')

const panel = document.querySelector('#panel')
const panelCross = document.querySelector('#panel-cross')
const inputRange = document.querySelector('#input-range')
const inputValue = document.querySelector('#input-value')

let start = parseFloat(inputRange.min)
let end = parseFloat(inputRange.max)
let step = parseFloat(inputRange.step)


inputValue.innerText = inputRange.value
inputRange.addEventListener('input', (e)=>{
    inputValue.innerText = inputRange.value
    textArea.style.fontSize = inputRange.value +'px'
})

let result = ''

// событие по нажатию на клавиатуру
document.addEventListener('keydown', (event) => {
    textArea.focus()
    result = textArea.value
    // получаем клавишу
    const buttonText = event.key.toLowerCase()
    console.log(buttonText)
    if(buttonText !== 'arrowleft' && buttonText !== 'arrowdown' && buttonText !== 'arrowright' && buttonText !== 'arrowup' && buttonText !== 'backspace' && buttonText !== 'space' && buttonText !== 'capslock' && buttonText !== 'tab' && buttonText !== 'enter' && buttonText !== 'shift' && buttonText !== 'alt' && buttonText !== 'control' && buttonText !== 'win'&& buttonText !== 'delete'){
        result += event.key
    }
    if(buttonText === 'delete' || buttonText === 'backspace'){
        result = ''
    }


})

// Для каждой кнопки виртуальной клавиатуры добавляем событие по клику
keyboardButtons.forEach(function(keyboardButton){
    keyboardButton.addEventListener('click', function(event){
        textArea.focus()
        result = textArea.value
        let buttonText = event.target.firstElementChild.innerText.toLowerCase()

        // получаем текст клавиши
        if (changeLang.classList.contains('keyboard__change-lang--active')){
            buttonText = event.target.lastElementChild.innerText.toLowerCase()
        }
        
        // очистка
        if (buttonText === 'del'){
            result = ''
            console.clear()
        }
        // удаление одного символа
        else if(buttonText === 'backspace'){
            result = result.substring(0, result.length - 1);
        }
        else if(buttonText === 'probel'){
            result += ' ' 
        }
        else if(buttonText === 'tab'){
            result += '    ' 
        }
        else if(buttonText === 'enter'){
            result += '\n' 
        }
        else if(buttonText === 'caps lock'){
            caps.classList.toggle('caps--active')
        }
        else if(buttonText !== 'left' && buttonText !== 'down' && buttonText !== 'right' && buttonText !== 'up' &&buttonText !== 'space' && buttonText !== 'caps lock' && buttonText !== 'tab' && buttonText !== 'enter' && buttonText !== 'shift' && buttonText !== 'alt' && buttonText !== 'ctrl' && buttonText !== 'win'){
            if (caps.classList.contains('caps--active')){
                buttonText = buttonText.toUpperCase()
            }
            result += buttonText
        }
        
        textArea.value = result
        
    })
})

changeLang.addEventListener('click', (e)=>{
    changeLang.classList.toggle('keyboard__change-lang--active')
})
settings.addEventListener('click', (e)=>{
    settings.classList.toggle('keyboard__settings--active')
    panel.classList.toggle('panel--active')
})
changeTheme.addEventListener('click', (e)=>{
    changeTheme.classList.toggle('keyboard__change-theme--active')
    textArea.classList.toggle('keyboard__text--active')
})
panelCross.addEventListener('click', e =>{
    panel.classList.toggle('panel--active')
    settings.classList.toggle('keyboard__settings--active')
})
