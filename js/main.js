let elImg = document.querySelectorAll('.game__choose-img');
let elGameDiv = document.querySelector('.main__game');

let imgArr = [
   "./img/qaychi.svg",
   "./img/qudu.svg",
   "./img/qogoz.svg"
];

elImg.forEach(item => {

      item.addEventListener('click', () => {
         for (let i of imgArr) {
            if (item.src == imgArr[i[1]]) {
               elGameDiv.innerHTML = `<div class="game__win">
               <div class="main__txts txts row between">
                  <span class="txts__txt">YOU PICKED</span>
                  <span class="txts__txt">THE HOUSE PICKED</span>
               </div>
               <div class="game__imgs row between">
                  <div class="">
                     <img class="game__img" src="./img/qaychi.svg" alt="qaychi">
                  </div>
                  <div>
                     <img class="game__img" src="./img/qudu.svg" alt="qaychi">
                  </div>
               </div>
               </div>`;
               console.log(12);
            }
         }
         
      })
   
})
