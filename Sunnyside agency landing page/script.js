function menuToggle(){
    document.getElementById('menu-overlay').classList.toggle('active')
};


const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        cleareTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args)
    };
};


var target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight + 3) / 4);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
        } else{
            element.classList.remove(animationClass)
        }
    })
    setTimeout(animeScroll, 100);
};

animeScroll();

if(target.length){
    window.addEventListener("scroll", function() {
        animeScroll();
        // console.log(dsadsa)
    });
}
// if(target.length){
//     window.addEventListener("scroll", debounce(function() {
//         animeScroll();
//         console.log(dsadsa)
//     }, 200));
// };