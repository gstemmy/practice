// const text = document.querySelector('#text');
// text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");
// const ele = document.querySelectorAll('span');
// for(var i = 1; i<ele.length; i++){
//     ele[i].style.transform = "rotate("+i+8+"deg)";
// }
// text.innerHTML = text.innerText.split("").map(
//         (char,i) =>
//     `<span style="transform:rotate(${i+20}deg);">${char}</span>`
// ).join("");

const text =document.querySelector(".text p");

text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");
const ele = document.querySelectorAll('span');
for(var i = 1; i<ele.length; i++){
    ele[i].style.transform = "rotate("+i+5+"deg)";
}