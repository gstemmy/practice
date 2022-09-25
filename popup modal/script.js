// target the wallet
/*let wallets = document.querySelector('.wallet-link').children;
let modal = document.getElementsByClassName('modal');
let manualSet = document.querySelector('.set');

// loop through the wallet and add listener
for(let i = 0; i < wallets.length; i++){
    wallets[i].onclick = function() {  
       this.innerHTML  = "<div class='loader'></div>";

       setTimeout(()=>{
        manualSet.classList.add('active');
       }, 2000)
    }
}

// let closeBtn = document.querySelector('.close');

// closeBtn.onclick = function(){
//     closeBtn.parentElement.parentElement.remove();
// }

let closeErrBtn = document.querySelector('.set .close');

closeErrBtn.onclick = function(){
    manualSet.classList.remove('active');
} */

// target the wallet
let wallets = document.querySelector(".wallet-link").children;
const modalContainer = document.querySelector(".modal-bg");
let modal = document.getElementsByClassName("modal");
let errorMsg = document.querySelector(".errBg");
let walletBtn = document.querySelector("#nav-wallet");
let closeBtn = document.querySelector(".close");
let closeErrBtn = document.querySelector(".set .close");

// to display the modal
walletBtn.addEventListener("click", () => {
  modalContainer.classList.add("active");
});

// to close the modal
closeBtn.onclick = function () {
  modalContainer.classList.remove("active");
};

// loop through the wallet and add listener
for (let i = 0; i < wallets.length; i++) {
  wallets[i].onclick = function () {
    let old = this.innerHTML;
    this.innerHTML = "<div class='loader'></div>";

    setTimeout(() => {
      errorMsg.classList.add("active");
      this.innerHTML = old;
    }, 2000);
  };
}


// to close the errBg
closeErrBtn.onclick = function () {
  errorMsg.classList.remove("active");
  // modalContainer.classList.remove('active');
};
