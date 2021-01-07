    let total = 0
    let display = document.getElementById('display')
    let minus = document.getElementById('minus')
    let plus = document.getElementById('plus')
    let input = document.getElementById('input')
    // let plusOne = 1
    // let MinusOne = 1
    let plusOrMinus = 1
    



    function addByOneClick() {
        total = total + parseInt(input.value)
        console.log(total)

        updateCount()
    }

    function minusByOneClick() {
        total = total - parseInt(input.value)
        updateCount()
    }

    function updateCount() {
        display.innerText = total
    }

document.addEventListener('DOMContentLoaded', ()=>{
    console.log('dom content loaded')
    plus.addEventListener('click', addByOneClick)
    minus.addEventListener('click', minusByOneClick)



})