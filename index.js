let input = document.getElementById('Age').value

let output = document.getElementById('AtD')

let btn = document.getElementById('calc')

function ageToDays() {
    input = document.getElementById('Age').value
    let answer = 365.25 * input 
    console.log(answer.toFixed(2));
    output.value = answer.toFixed(2)
}
btn.addEventListener('click',ageToDays)