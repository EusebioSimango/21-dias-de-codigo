const buttons = [...window.document.getElementsByTagName('button')]
const listOfNumbers = []

buttons.map(button => {
  button.addEventListener('click', (event) => {
    console.log(event.target)
    if (event.target.classList.contains("number") || event.target.classList.contains("operation") || event.target.classList.contains("parentheses"))
      return renderNumber(event.target)
    
    else if (event.target.classList.contains("equals"))
      return calculate()

    else if (event.target.classList.contains("ac"))
      return cleanInput()
    
    else if (event.target.classList.contains("del"))
      return deleteLastChar()

  })
})

const renderNumber = (number) => {
  const input = window.document.getElementsByClassName('input')[0]

  input.value = `${input.value}` + number.getAttribute('data-value')

}


const calculate = () => {
  const inputValue = window.document.getElementsByClassName('input')[0].value
  const resultDisplay = window.document.getElementsByClassName('result')[0]
  const result = eval(inputValue)

  resultDisplay.innerHTML = result

}

const cleanInput = () => {
  window.document.getElementsByClassName('input')[0].value = ''
}

const deleteLastChar = () => {
  const inputValue = [...window.document.getElementsByClassName('input')[0].value]
  
  
  

}