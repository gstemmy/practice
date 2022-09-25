const text1 = document.querySelector('#text');
text1.innerHTML = text1.textContent.replace(/\S/g,"<span>$&</span>");
const ele1 = document.querySelectorAll('span');
for(var i = 1; i<ele1.length; i++){
    ele1[i].style.transform = "rotate("+i+1+"deg)";
    // ele[i].style.transform = "rotate("+i+6+"deg)";
}