// COunt value is zero
let count = 0;

// its function increment

function increment() {
    count++,   
    updateDisplay();
}


// its decerement fucntion


function decrement(){
    count--;
    updateDisplay();
}


function updateDisplay(){
    document.getElementById("count").innerText = count;
}