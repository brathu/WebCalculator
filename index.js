var output = document.getElementById('out');

function info() {
    alert('You can also use youre Keyboard!\nSpace cleares all chars btw');
}

function clearOut() {
    output.innerHTML = null;
}


function theOperator(operation) {
    output.innerHTML += operation;
}

function result() {
    output.innerHTML = eval(output.innerHTML);

}

//all usable characters
let chars = '1234567890+-/*.'

document.addEventListener('keydown', (e) => {
    console.log(e.key)
    if(e.keyCode == 13) {
        result();

    } else if(e.keyCode == 8) {
        output.innerHTML = output.innerHTML.slice(0, -1); 

    } else if(e.keyCode == 32){
        output.innerHTML = '';

    } else if(chars.includes(e.key)){
        theOperator(e.key);
    }
});