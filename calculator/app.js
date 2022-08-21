const buttons = [...window.document.getElementsByTagName('button')]
const listOfNumbers = []

buttons.map(button => {
  button.addEventListener('click', (event) => {
    console.log(event.target)
    if (event.target.classList.contains("number") || event.target.classList.contains("operation") || event.target.classList.contains("parentheses"))
      return renderNumber(event.target)
    
    else if (event.target.classList.contains("operation"))
      return pushToListOfNumbers(event.target)
    
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

  var a = input.value
}

const pushToListOfNumbers = (number) => {
  const input = window.document.getElementsByClassName('input')[0]
  // listOfNumbers.push(input.value)
}

const calculate = () => {
  const inputValue =[...window.document.getElementsByClassName('input')[0].value]
  console.log(inputValue)
  const list = []
  var acc = ''
  var newList = []
  inputValue.map(digit => {
    console.log(String(Number(digit)))
    if (String(Number(digit)) != 'NaN') list.push(Number(digit))
    else list.push(digit)
  })

  list.map((num, i) => {
    console.log('len -', acc.length)
    if (acc.length > 0) {
      acc += String(num)
      console.log('acc =', acc)
      return
    }
    console.log('now: ', i, '-', acc)
    if (num = '+')
      if (list[i+1])
        console.log('adding', list[i+1])
        newList.push(acc)
        newList.push(num)
        return acc = ''
        
    
    
  })
  console.log(newList)
  console.log('result: ', acc)
}

const cleanInput = () => {
  window.document.getElementsByClassName('input')[0].value = ''
}

const deleteLastChar = () => {
  const inputValue = [...window.document.getElementsByClassName('input')[0].value]
  
  
  

}