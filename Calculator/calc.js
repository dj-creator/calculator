let buttons = document.getElementsByClassName("button")
console.log(buttons)
let operators = document.getElementsByClassName("operator")

for(let i = 0; i < buttons.length; i++){
    // go through each button
    buttons[i].addEventListener('click', function() {
        // tell the buttons what to do when you click them
        let text = document.getElementById('type').innerText;
        // new text is old text with new number
        newText = text + buttons[i].innerText;
        document.getElementById('type').innerText = newText;
    })
}

for(let i = 0; i < operators.length; i++){
    // go through each operator
    operators[i].addEventListener('click', function() {
        // tell the buttons what to do when you click them
        let text = document.getElementById('type').innerText;
        // new text is old text with new operator
        newText = text + operators[i].innerText;
        document.getElementById('type').innerText = newText;
    })
}

document.getElementById('equal-sign').addEventListener('click', function(){
   let nig = document.getElementById('type').innerText;
   nig = eval(nig)  //eval does math for you

   document.getElementById('type').innerText = nig;
})

document.getElementById('clear-all').addEventListener('click',function(){
    document.getElementById('type').innerText = ""
})

document.getElementById('clear').addEventListener('click',function(){
    let text = document.getElementById('type').innerText;
    text = text.substring(0, text.length-1)
    // console.log(text)
    document.getElementById('type').innerText = text;
})