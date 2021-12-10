let elImg = document.querySelectorAll('.game__choose-img');
let elGameDiv = document.querySelector('.main__game');
let count = document.querySelector('.num');

let imgArr = [
   {
      img: "http://127.0.0.1:5500/img/qaychi.svg"
   },
   {
      img: "http://127.0.0.1:5500/img/qudu.svg"
   },
   {
      img: "http://127.0.0.1:5500/img/qogoz.svg"
   }
];

elImg.forEach(item => {

   item.addEventListener('click', (e) => {

      let arr = ['qaychi', 'qudu', 'qogoz'];
      let bot = arr[Math.floor(Math.random() * 3)];
      console.log(bot);

      elGameDiv.innerHTML = `<div class="game__win">
            <div class="main__txts txts row between">
               <span class="txts__txt">YOU PICKED</span>
               <span class="txts__txt">THE HOUSE PICKED</span>
            </div>
            <div class="game__imgs row between">
               <div>
                  <img class="game__img" src="${imgArr[2].img}" alt="qaychi">
               </div>
               <span class="game__wdl">Win !</span>
               <div>
               <img class="game__img" src="	https://qogoz-byabdusamad.netlify.app/img/${bot}.svg" alt="qaychi">
               </div>
            </div>
            </div>`;
      
      if (e.target.src == imgArr[0].img) {

         if (bot == 'qaychi') {
            elGameDiv.innerHTML = `<div class="game__win">
            <div class="main__txts txts row between">
               <span class="txts__txt">YOU PICKED</span>
               <span class="txts__txt">THE HOUSE PICKED</span>
            </div>
            <div class="game__imgs row between">
               <div>
                  <img class="game__img" src="${imgArr[0].img}" alt="qaychi">
               </div>
               <span class="game__wdl">Draft</span>
               <div>
               <img class="game__img" src="http://127.0.0.1:5500/img/${bot}.svg" alt="qaychi">
               </div>
            </div>
            </div>`;
         } else if (bot == 'qudu') {
            elGameDiv.innerHTML = `<div class="game__win">
            <div class="main__txts txts row between">
               <span class="txts__txt">YOU PICKED</span>
               <span class="txts__txt">THE HOUSE PICKED</span>
            </div>
            <div class="game__imgs row between">
               <div>
                  <img class="game__img" src="${imgArr[0].img}" alt="qaychi">
               </div>
               <span class="game__wdl">Loooose (</span>
               <div>
               <img class="game__img" src="http://127.0.0.1:5500/img/${bot}.svg" alt="qaychi">
               </div>
            </div>
            </div>`;
         } else {
            elGameDiv.innerHTML = `<div class="game__win">
            <div class="main__txts txts row between">
               <span class="txts__txt">YOU PICKED</span>
               <span class="txts__txt">THE HOUSE PICKED</span>
            </div>
            <div class="game__imgs row between">
               <div>
                  <img class="game__img" src="${imgArr[0].img}" alt="qaychi">
               </div>
               <span class="game__wdl">Win !</span>
               <div>
               <img class="game__img" src="http://127.0.0.1:5500/img/${bot}.svg" alt="qaychi">
               </div>
            </div>
            </div>`;
            count.appendChild(document.createTextNode(+1));
         }
      }
      if (e.target.src == imgArr[1].img) {

         if (bot == 'qudu') {
            elGameDiv.innerHTML = `<div class="game__win">
            <div class="main__txts txts row between">
               <span class="txts__txt">YOU PICKED</span>
               <span class="txts__txt">THE HOUSE PICKED</span>
            </div>
            <div class="game__imgs row between">
               <div>
                  <img class="game__img" src="${imgArr[1].img}" alt="qaychi">
               </div>
               <span class="game__wdl">Draft</span>
               <div>
               <img class="game__img" src="http://127.0.0.1:5500/img/${bot}.svg" alt="qaychi">
               </div>
            </div>
            </div>`;
         } else if (bot == 'qogoz') {
            elGameDiv.innerHTML = `<div class="game__win">
            <div class="main__txts txts row between">
               <span class="txts__txt">YOU PICKED</span>
               <span class="txts__txt">THE HOUSE PICKED</span>
            </div>
            <div class="game__imgs row between">
               <div>
                  <img class="game__img" src="${imgArr[1].img}" alt="qaychi">
               </div>
               <span class="game__wdl">Loooose (</span>
               <div>
               <img class="game__img" src="http://127.0.0.1:5500/img/${bot}.svg" alt="qaychi">
               </div>
            </div>
            </div>`;
         } else {
            elGameDiv.innerHTML = `<div class="game__win">
            <div class="main__txts txts row between">
               <span class="txts__txt">YOU PICKED</span>
               <span class="txts__txt">THE HOUSE PICKED</span>
            </div>
            <div class="game__imgs row between">
               <div>
                  <img class="game__img" src="${imgArr[1].img}" alt="qaychi">
               </div>
               <span class="game__wdl">Win !</span>
               <div>
               <img class="game__img" src="http://127.0.0.1:5500/img/${bot}.svg" alt="qaychi">
               </div>
            </div>
            </div>`;
            count.appendChild(document.createTextNode(+1));
         }
      }
      if (e.target.src == imgArr[2].img) {

         if (bot == 'qogoz') {
            elGameDiv.innerHTML = `<div class="game__win">
            <div class="main__txts txts row between">
               <span class="txts__txt">YOU PICKED</span>
               <span class="txts__txt">THE HOUSE PICKED</span>
            </div>
            <div class="game__imgs row between">
               <div>
                  <img class="game__img" src="${imgArr[2].img}" alt="qaychi">
               </div>
               <span class="game__wdl">Draft</span>
               <div>
               <img class="game__img" src="http://127.0.0.1:5500/img/${bot}.svg" alt="qaychi">
               </div>
            </div>
            </div>`;
         } else if (bot == 'qudu') {
            elGameDiv.innerHTML = `<div class="game__win">
            <div class="main__txts txts row between">
               <span class="txts__txt">YOU PICKED</span>
               <span class="txts__txt">THE HOUSE PICKED</span>
            </div>
            <div class="game__imgs row between">
               <div>
                  <img class="game__img" src="${imgArr[2].img}" alt="qaychi">
               </div>
               <span class="game__wdl">Win !</span>
               <div>
               <img class="game__img" src="http://127.0.0.1:5500/img/${bot}.svg" alt="qaychi">
               </div>
            </div>
            </div>`;
            count.appendChild(document.createTextNode(+1));
         } else {
            elGameDiv.innerHTML = `<div class="game__win">
            <div class="main__txts txts row between">
               <span class="txts__txt">YOU PICKED</span>
               <span class="txts__txt">THE HOUSE PICKED</span>
            </div>
            <div class="game__imgs row between">
               <div>
                  <img class="game__img" src="${imgArr[2].img}" alt="qaychi">
               </div>
               <span class="game__wdl">Loooose (</span>
               <div>
               <img class="game__img" src="http://127.0.0.1:5500/img/${bot}.svg" alt="qaychi">
               </div>
            </div>
            </div>`;
         }
      }
   })
})



