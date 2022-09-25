const quoteText = document.querySelector('.quote');
const authorName = document.querySelector('.author .name')
const quoteBtn = document.querySelector('button');
const soundBtn = document.querySelector('.sound');
const copyBtn = document.querySelector('.copy');
const twitterBtn = document.querySelector('.twitter');

// random quote function
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerHTML = "Loading quote...";
    // fetching random quote/data from the API and parsing it into Javascript object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        // console.log(result);
        quoteText.innerHTML = result.content;
        authorName.innerHTML = result.author;
        quoteBtn.innerHTML = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click", ()=>{
    // the SpeechSynthesisUtterance is a web speech api that represent a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML} by ${authorName.innerHTML}`);
    SpeechSynthesis.speak(utterance); // speak method of SpeechSynthesis speaks the utternance
});


copyBtn.addEventListener("click", ()=>{
    // copying the qoute text on coptyBtn click
    // writeText() property writes the specified text string to the system clipboard
    navigator.clipboard.writeText(quoteText.innerHTML);
});


twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerHTML}`;
    window.open(tweetUrl, "_blank"); // opening a new twitter tab with passing quote in the url
});
quoteBtn.addEventListener("click", randomQuote);