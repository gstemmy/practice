const text =document.querySelector(".text p");

    text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");
    const ele = document.querySelectorAll('span');
    for(var i = 1; i<ele.length; i++){
        ele[i].style.transform = "rotate("+i+0+"deg)";
}
const bright = document.querySelector('.bright');
const body = document.querySelector('body');
const header = document.querySelector('nav');
const about = document.querySelector('.about');
const core = document.querySelector('.core');
const work = document.querySelector('.work');
const school = document.querySelector('.school');
const info = document.querySelector('.info');
const contactDown = document.querySelector('.contact-down');


bright.addEventListener("click", () => {
    bright.classList.toggle('active');
    body.classList.toggle('active');
    header.classList.toggle('active');
    about.classList.toggle('active');
    core.classList.toggle('active');
    work.classList.toggle('active');
    school.classList.toggle('active');
    info.classList.toggle('active');
    contactDown.classList.toggle('active');
});



const text1 = document.querySelector('#text');
text1.innerHTML = text1.textContent.replace(/\S/g,"<span>$&</span>");
const ele1 = document.querySelectorAll('span');
for(var i = 1; i<ele1.length; i++){
    ele1[i].style.transform = "rotate("+i+1+"deg)";
    // ele[i].style.transform = "rotate("+i+6+"deg)";
};

const text2 = document.querySelector('#text1');
text2.innerHTML = text2.textContent.replace(/\S/g,"<span>$&</span>");
const ele2 = document.querySelectorAll('span');
for(var i = 1; i<ele2.length; i++){
    ele2[i].style.transform = "rotate("+i+1+"deg)";
    // ele[i].style.transform = "rotate("+i+6+"deg)";
};

const text3 = document.querySelector('#text2');
text3.innerHTML = text3.textContent.replace(/\S/g,"<span>$&</span>");
const ele3 = document.querySelectorAll('span');
for(var i = 1; i<ele3.length; i++){
    ele3[i].style.transform = "rotate("+i+1+"deg)";
    // ele[i].style.transform = "rotate("+i+6+"deg)";
};
const text4 = document.querySelector('#text3');
text4.innerHTML = text4.textContent.replace(/\S/g,"<span>$&</span>");
const ele4 = document.querySelectorAll('span');
for(var i = 1; i<ele4.length; i++){
    ele4[i].style.transform = "rotate("+i+1+"deg)";
    // ele[i].style.transform = "rotate("+i+6+"deg)";
};
const text5 = document.querySelector('#text4');
text5.innerHTML = text5.textContent.replace(/\S/g,"<span>$&</span>");
const ele5 = document.querySelectorAll('span');
for(var i = 1; i<ele5.length; i++){
    ele5[i].style.transform = "rotate("+i+1+"deg)";
    // ele[i].style.transform = "rotate("+i+6+"deg)";
};


