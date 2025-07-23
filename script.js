console.log('Hello JS');

function appendValue(val){
    document.querySelector('#display').value += val;
}

function calculate() {
    try {
        let result = eval(document.querySelector('#display').value);
        document.querySelector('#display').value = result;
        
    } catch (e) {
        document.querySelector('#display').value = 'invalid';
    }
    
}

function deleteLast() {
    let current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

function clearDisplay() {
    document.querySelector('#display').value = ""
}