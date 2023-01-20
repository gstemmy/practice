// prompt('What is your Name')
const text =document.querySelector(".text p");

text.innerHTML = text.textContent.replace(/\S/g,"<span>$&</span>");
const ele = document.querySelectorAll('span');
for(var i = 1; i<ele.length; i++){
    ele[i].style.transform = "rotate("+i+0+"deg)";
}
const imageChange = document.querySelector('.img-change');
const imageChange1 = document.querySelector('.img-change1');
const icon = document.querySelector('.icon');
const icon1 = document.querySelector('.icon1');

icon.addEventListener("click", () =>{
    imageChange.classList.toggle('active');
    imageChange1.classList.toggle('active');
    imageChange.style.display = 'block';
    imageChange1.style.display = 'none';
});
icon1.addEventListener("click", () =>{
    imageChange1.classList.toggle('actives');
    imageChange.classList.toggle('actives');
    imageChange.style.display = 'none';
    imageChange1.style.display = 'block';
});



const white = document.querySelector('.white');
const black = document.querySelector('.black');
const body = document.querySelector('body');
const bright = document.querySelector('.bright');
const main = document.querySelector('.main');
const feature = document.querySelector('.feature');
const design = document.querySelector('.design');
const some = document.querySelector('.some');
const contactdown = document.querySelector('.contact-down');

const logoRotate = document.querySelector('.logo-rotate');
const textbrigh = document.querySelector('.textbrigh');

textbrigh.addEventListener("click", () =>{
    if(!white.classList.contains('active')){
        textbrigh.innerHTML = '<img src="/images/sun-solid-24.png" alt="">';
        textbrigh.classList.add('active');
        body.classList.add('active');
        white.classList.add('active');
        black.classList.add('active');
        logoRotate.classList.add('active');
        main.classList.add('active');
        feature.classList.add('active');
        design.classList.add('active');
        some.classList.add('active');
        contactdown.classList.add('active');
        
    } else{
        textbrigh.innerHTML = '<img src="/images/moon-solid.png" alt="">';
        textbrigh.classList.remove('active');
        body.classList.remove('active');
        white.classList.remove('active');
        black.classList.remove('active');
        logoRotate.classList.remove('active');
        main.classList.remove('active');
        feature.classList.remove('active');
        design.classList.remove('active');
        some.classList.remove('active');
        contactdown.classList.remove('active');
    }
});
bright.addEventListener("click", () =>{
    if(!white.classList.contains('active')){
        // bright.classList.add('active');
        textbrigh.innerHTML = '<img src="/images/sun-solid-24.png" alt="">';
        textbrigh.classList.add('active');
        body.classList.add('active');
        white.classList.add('active');
        black.classList.add('active');
        logoRotate.classList.add('active');
        main.classList.add('active');
        feature.classList.add('active');
        design.classList.add('active');
        some.classList.add('active');
        contactdown.classList.add('active');
    
    } else{
        textbrigh.innerHTML = '<img src="/images/moon-solid.png" alt="">';
        textbrigh.classList.remove('active');
        body.classList.remove('active');
        white.classList.remove('active');
        black.classList.remove('active');
        logoRotate.classList.remove('active');
        main.classList.remove('active');
        feature.classList.remove('active');
        design.classList.remove('active');
        some.classList.remove('active');
        contactdown.classList.remove('active');
    }
});




// var counter = 1;
// setInterval(function(){
//     document.getElementById('radio' + counter).checked = true;
//     counter++;
//     if(counter > 4){
//         counter = 1;
//     }
// }, 5000);

// harborger
const harborger = document.querySelector(".harborger");
const link = document.querySelector(".link");

harborger.addEventListener("click", () => {
    harborger.classList.toggle("active");
    link.classList.toggle("active");
});


var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slide");
    // var x = document.querySelector('.slide');

    for( i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    myIndex++;
    if( myIndex > x.length ){
        myIndex = 1
    }
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000);
}