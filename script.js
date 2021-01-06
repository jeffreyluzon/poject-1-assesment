    let total = document.getElementById('total')
    let minus = document.getElementById('minus')
    let plus = document.getElementById('plus')
    let input = document.getElementById('input')
    // let plusOne = 1
    // let MinusOne = 1
    let plusOrMinus = 1

    function addByOneClick() {
        input.value = plusOrMinus+=1
        console.log('addedOne')
    }

    function MinusByOneClick() {
        input.value = plusOrMinus-=1
        console.log('MinusOne')
    }

    function addToTheTotal () {
        
        total.value = (plusOrMinus - 1)
        total.innerHTML =`${total.value}`
        // console.log(i)
    }

    function minusToTheTotal () {
        
        total.value = plusOrMinus
        total.innerHTML =`${total.value}`
        // console.log(i)
    }
document.addEventListener('DOMContentLoaded', ()=>{
    console.log('dom content loaded')
    plus.addEventListener('click', addByOneClick)
    plus.addEventListener('click', addToTheTotal )
    minus.addEventListener('click', MinusByOneClick)
    minus.addEventListener('click', minusToTheTotal)



})