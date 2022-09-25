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
const feature = document.querySelector('.feature01');
const feature01 = document.querySelector('.feature001');
const feature001 = document.querySelector('.feature0001');
const feature1 = document.querySelector('.feature02');
const feature2 = document.querySelector('.feature002');
const feature02 = document.querySelector('.feature0002');
const featureLink = document.querySelector('.link-feats');
const design1 = document.querySelector('.design01');
const design2 = document.querySelector('.design02');
const some1 = document.querySelector('.some01');
const some2 = document.querySelector('.some02');
const some3 = document.querySelector('.some03');
const some4 = document.querySelector('.some04');
const some5 = document.querySelector('.some05');
const somes = document.querySelector('.somes');
const contactLink1 = document.querySelector('.contact-link01');
const contactLink2 = document.querySelector('.contact-link02');
const contactLink3 = document.querySelector('.contact-link03');
const contactLink4 = document.querySelector('.contact-link04');
const contactLink5 = document.querySelector('.contact-link05');
const logoRotate = document.querySelector('.logo-rotate');
const main01 = document.querySelector('.main01');
const logo = document.querySelector('.logo');
const linkBrand01 = document.querySelector('.link-brand-01');
const linkBrand02 = document.querySelector('.link-brand-02');
const linkBrand03 = document.querySelector('.link-brand-03');
const linkedin = document.querySelector('.linkedin');
const twitter = document.querySelector('.twitter');
const instagram = document.querySelector('.instagram');
const mark01 = document.querySelector('.mark01');
const mark02 = document.querySelector('.mark02');
const cases = document.querySelector('.cases');

bright.addEventListener("click", () =>{
    if(!white.classList.contains('active')){
        // bright.classList.add('active');
        body.classList.add('active');
        white.classList.add('active');
        black.classList.add('active');
        feature.classList.add('active');
        feature01.classList.add('active');
        feature1.classList.add('active');
        feature2.classList.add('active');
        feature001.classList.add('active');
        feature02.classList.add('active');
        featureLink.classList.add('active');
        design1.classList.add('active');
        design2.classList.add('active');
        some1.classList.add('active');
        some2.classList.add('active');
        some3.classList.add('active');
        some4.classList.add('active');
        some5.classList.add('active');
        somes.classList.add('active');
        contactLink1.classList.add('active');
        contactLink2.classList.add('active');
        contactLink3.classList.add('active');
        contactLink4.classList.add('active');
        contactLink4.classList.add('active');
        contactLink5.classList.add('active');
        text.classList.add('active');
        logoRotate.classList.add('active');
        main01.classList.add('active');
        logo.classList.add('active');
        linkBrand01.classList.add('active');
        linkBrand02.classList.add('active');
        linkBrand03.classList.add('active');
        linkedin.classList.add('active');
        twitter.classList.add('active');
        instagram.classList.add('active');
        mark01.classList.add('active');
        mark02.classList.add('active');
        cases.classList.add('active');
    } else{
        bright.classList.remove('active');
        body.classList.remove('active');
        white.classList.remove('active');
        black.classList.remove('active');
        feature.classList.remove('active');
        feature01.classList.remove('active');
        feature1.classList.remove('active');
        feature2.classList.remove('active');
        feature001.classList.remove('active');
        feature02.classList.remove('active');
        featureLink.classList.remove('active');
        design1.classList.remove('active');
        design2.classList.remove('active');
        some1.classList.remove('active');
        some2.classList.remove('active');
        some3.classList.remove('active');
        some4.classList.remove('active');
        some5.classList.remove('active');
        somes.classList.remove('active');
        contactLink1.classList.remove('active');
        contactLink2.classList.remove('active');
        contactLink3.classList.remove('active');
        contactLink4.classList.remove('active');
        text.classList.remove('active');
        logoRotate.classList.remove('active');
        main01.classList.remove('active');
        logo.classList.remove('active');
        linkBrand01.classList.remove('active');
        linkBrand02.classList.remove('active');
        linkBrand03.classList.remove('active');
        linkedin.classList.remove('active');
        twitter.classList.remove('active');
        instagram.classList.remove('active');
        mark01.classList.remove('active');
        mark02.classList.remove('active');
        cases.classList.remove('active');
    }
});
