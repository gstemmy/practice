const textEl = document.getElementById('text');
const textEl1 = document.getElementById('text1');
const speedEl = document.getElementById('speed');
const txt = "Hi, i am Saheed";
// const txt1 = "Saheed";
let idx = 1;
let speed = 500;
writeText();
function writeText() {
    textEl.innerHTML = txt.slice(0, idx);
    // textEl1.innerHTML = txt1.slice(0, idx);
    idx++;
     // for auto text effect
    // if(idx > txt.length){
    //     idx = 1
    // }
    // if(idx > txt1.length){
    //     idx = 1
    // }


    setTimeout(writeText, speed)
};

// optional
speedEl.addEventListener('input', (e) => 
speed = 300 / e.target.value)

