const wrapper = document.querySelector('.wrapper'),
selectBtn = document.querySelector('.select-btn'),
searchInput = document.querySelector('input'),
options = document.querySelector('.option');

//Array of some countries
let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                "Brazil", "Canada", "China", "Dermark", "Ethiopia", "Finland", "France", "Germany", 
            "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia", "Maldives",
         "Mexica", "Morocco", "Napoli", "Netherland", "Nigeria", "Norway", "Pakistan", "Peru", "Russia", "Romania", "South Africa",
         "Spain", "Sri Lanka", "Sweden", "Switzerland", "Thailand", "Turkey", "Uganda", "Ukraine", "United State", 
        "Vietnam"];

function addCountry(){
    countries.forEach(country => {
        //adding each country inside li and inserting all li inside option tag
        let li = `<li onclick = "updateName(this)">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
};
addCountry();

function updateName(selectLi){
    wrapper.classList.remove('active');
    selectBtn.firstElementChild.innerText = selectLi.innerText;
};

searchInput.addEventListener("keyup", () => {
    let arr = []; //creating empty array
    let searchedVal = searchInput.value.toLowerCase();
    //returinng all countries from array which are start with user searched value
    //and mapping returned country with li and joining them
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li">${data}</li>`).join(" ");
    options.innerHTML = arr ? arr : `<p>Oops! Country not found</p>`;
});



selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle('active')
});