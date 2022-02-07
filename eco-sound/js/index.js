
const audio = document.querySelector('audio');
const playBtn = document.querySelector('.control');
const tema = document.querySelectorAll('[data-bird]');
const logo = document.querySelector('.header_logo');
const mainImag = document.querySelector('.video-img');

function playAudio() {
  audio.currentTime = 0;
  audio.play();
}

function play() {
  var audio = new Audio('audio');
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

for (var i = 0; i < tema.length; i++) {
  tema[i].addEventListener("click", function() {
    
    if(playBtn.className == 'control play'){  
      playBtn.classList.remove('play');
      playBtn.classList.toggle('pause');
     
  } 
  });
}
for(var j = 0; j < tema.length; j++){
  tema[j].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
     this.className += " active";
  })
}
const buttonClick = () => {    
  if (playBtn.className == 'control play'){
    playBtn.classList.remove('play')
    playBtn.classList.toggle('pause');
    audio.currentTime = 0;
    audio.play();
    }else{
      playBtn.classList.remove('pause');
      playBtn.classList.toggle('play');
      audio.pause();
  }
}
playBtn.addEventListener('click', buttonClick);
  class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }
    forest(){
      return mainImag.src = `./assets/img/forest.jpg`,
      audio.src = `./assets/audio/forest.mp3`,
      audio.play();

      
    }
    solovey() {
     return mainImag.src = `./assets/img/solovey.jpg`,
            audio.src = `./assets/audio/solovey.mp3`,
            audio.play();
    }

    drozd() {
     return mainImag.src = `./assets/img/drozd.jpg`,
           audio.src = `./assets/audio/drozd.mp3`,
           audio.play();
    }

    malinovka() {
     return mainImag.src = `./assets/img/zarynka.jpg`,
     audio.src = `./assets/audio/zarynka.mp3`,
     audio.play();
    
    }
    javaronok() {
     return mainImag.src = `./assets/img/javoronok.jpg`,
     audio.src = `./assets/audio/javoronok.mp3`,
     audio.play();
     
    }
    slavka() {
      return mainImag.src = `./assets/img/slavka.jpg`,
      audio.src = `./assets/audio/slavka.mp3`,
      audio.play();
    
      
     }
    onClick(event) {
      let action = event.target.dataset.bird;
      if (action) {
        this[action]();
      }
    }
  }

  new Menu(menuMain);
console.log("Вроде все работает")