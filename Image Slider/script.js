let sliders = document.querySelectorAll('.slider'),
    prevBtn = document.querySelector('#prev'),
    nextBtn = document.querySelector('#next'),
    indicators = document.querySelector('#indicators'),
    current = 0;

nextBtn.addEventListener("click", nextImg);
prevBtn.addEventListener("click", prevImg);

//Create Bullets function
function createBullets(){
    sliders.forEach((slider) => {
        //create element li
        let li = document.createElement("li");
        //put li in the ul
        indicators.appendChild(li);
    });
}

createBullets();


let indicatorLi = document.querySelector('#indicators li');
function addActiveBullet(n){
    //remove all active class from li
    indicatorLi.forEach((li) => {
        li.classList.remove('active');
    });
    //add active class to the current li
    indicatorLi[n].classList.add('active');
}
addActiveBullet(current);

function showImg(n){
    //remove active class from all slide
    sliders.forEach((slide) => {
        slide.classList.remove('active');
    });
    //add class active to the current slide
    sliders[n].classList.add('active');
};



    function nextImg(){
        if(current < sliders.length - 1){
            current++;
        } else{
            current = 0;
        }
        showImg(current)
        addActiveBullet(current)
    };


    function prevImg(){
        if(current <= 0){
            current = sliders.length - 1;
        } else{
            current--;
        }
        showImg(current)
        addActiveBullet(current)
    };

    function bulletsBtn(){
        indicatorLi.forEach((slider) => {
            li.addEventListener('click', () => {
                current = 1;
                showImg(current);
                addActiveBullet(current);
            });
        });
    }
    bulletsBtn();


    //make slider automatic
    setInterval(() => {
        nextImg();
        addActiveBullet(current);
    }, 3000);