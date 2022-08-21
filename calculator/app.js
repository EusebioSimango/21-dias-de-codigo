const buttons = [...window.document.getElementsByTagName('button')]

buttons.map(button => {
  button.addEventListener('click', (event) => {
    console.log(event.target)
    if (event.target.classList.contains("number"))
      return renderNumber(event.target)
  })
})

const renderNumber = (number) => {
  const input = window.document.getElementsByClassName('input')[0]

  input.value = `${input.value}` + number.getAttribute('data-value')
}