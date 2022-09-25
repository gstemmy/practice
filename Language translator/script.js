const fromText = document.querySelectorAll(".from-text");
const selectTag = document.querySelectorAll("select");
const translateBtn = document.querySelectorAll("button");


selectTag.forEach((tag, id) => {
   for(const country_code in countries){
    // Selecting English by defalut as from language and hindi as to language
    let selected;
    if(id == 0 && country_code == "en-GB"){
        selected = "selected";
    }else if(id == 1 && country_code == "hi-IN"){
        selected = "selected";
    }
    let option = `<option value="${country_code}">${countries[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", option); //adding options tag inside select tag
   }
});
translateBtn.addEventListener("click", () => {
    let text = fromText.value;
    let translateFrom = selectTag[0].value; // getting fromselect tag value
    let translateTo = selectTag[1].value; // getting toselect tag value
    console.log(text, translateFrom, translateTo);
})