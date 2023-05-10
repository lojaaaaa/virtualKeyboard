const keyboard = document.querySelector('#keyboard')
const keyboardButtons = document.querySelectorAll('.keyboard__button')
const textArea = document.querySelector('#text')
const caps = document.querySelector('#caps')
let result = ''

document.addEventListener('keydown', (event) => {
    textArea.focus()
    const buttonText = event.key.toLowerCase()

    if(buttonText !== 'arrowleft' && buttonText !== 'arrowdown' && buttonText !== 'arrowright' && buttonText !== 'arrowup' && buttonText !== 'backspace'&& buttonText !== 'space' && buttonText !== 'capslock' && buttonText !== 'tab' && buttonText !== 'enter' && buttonText !== 'shift' && buttonText !== 'alt' && buttonText !== 'ctrl' && buttonText !== 'win'){
        result += buttonText
    }
    
    console.log(result)
})

keyboardButtons.forEach(function(keyboardButton){

    keyboardButton.addEventListener('click', function(event){
        console.log(event.target.firstElementChild)
        let buttonText = event.target.firstElementChild.innerText.toLowerCase()
        console.log(buttonText)
        textArea.focus()
        if (buttonText === 'del'){
            result = ''
            console.clear()
        }
        else if(buttonText === 'backspace'){
            result = result.substring(0, result.length - 1);
        }
        else if(buttonText === 'probel'){
            result += ' ' 
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
    
        console.log(result)
        textArea.value = result
        
    })
})

