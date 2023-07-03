import Controls from "./controls.js";
import Timer from "./timer.js";
import { elements } from "./elements.js";
import sounds from "./sounds.js";
const {
  light,
  dark,
  timerBtnsDarkMode,
  btnSoundsDarkMode,
  displayTimer,
  minutesDisplay,
  secondsDisplay,
  btnSounds,
  btnSoundspressed,
  btnPressedForest,
  btnPressedRain,
  btnPressedCoffeeShop,
  btnPressedFireplace,
  forest,
  rain,
  coffeeShop,
  fireplace,
  timerBtns,
  btnPlay,
  btnPause,
  btnSet,
  btnStop,
  btnAddTimer,
  btnCutTimer,
} = elements;
let minutes = Number(minutesDisplay.textContent);
const sound = sounds();
const controls = Controls({
  btnStop,
  btnPause,
  btnSet,
  btnPlay,
  light,
  dark,
  seconds,
  displayTimer,
  timerBtnsDarkMode,
  btnSounds,
  btnSoundsDarkMode,
});
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});
light.addEventListener("click", function () {
  controls.btnLight();
});
dark.addEventListener("click", function () {
  controls.btnDark();
});
btnPlay.addEventListener("click", function () {
  controls.play();
  timer.countdown();
  sound.pressButton();
});
btnPause.addEventListener("click", function () {
  controls.pause();
  timer.pause();
  sound.pressButton();
});
btnStop.addEventListener("click", function () {
  controls.reset();
  timer.reset();
});
btnSet.addEventListener("click", function () {
  let newMinutes = controls.getMinutes();
  if (!newMinutes) {
    timer.reset();
    return;
  }
  minutes = Number(newMinutes);
  timer.updateDisplay(minutes, 0);
  timer.updateMinutes(minutes);
});
btnAddTimer.addEventListener("click", function () {
  timer.addTimer();
  controls.reset();
});
btnCutTimer.addEventListener("click", function () {
  timer.cutTimer();
  controls.reset();
});
/////////// BOTOES DE SONS ///////////////////
// const inputRange1 = document.querySelector('.volume');

// inputRange1.addEventListener('input',function(){
//   var volumeValue = inputRange1.value;
//   .volume = volumeValue/100;
// });

btnSounds.forEach((botao) => {
  const volumeInput = botao.querySelector(".volume");
  let controlInput = false;
  volumeInput.addEventListener("input", (event) => {
    if (event.isTrusted) {
      controlInput = true;
      sound.florestSong.volume = volumeInput.value / 100;
      sound.rainSong.volume = volumeInput.value / 100;
      sound.coffeeShopSong.volume = volumeInput.value / 100;
      sound.fireplacetSong.volume = volumeInput.value / 100;
    }
  });

  botao.addEventListener("click", function () {
    if (!controlInput) {
      const botaoId = botao.getAttribute("data-id");
      btnSounds.forEach((outroBotao) => {
        if (outroBotao !== this) {
          outroBotao.classList.remove("btnSoundspressed");
          outroBotao.setAttribute("data-pressed", "false");
          outroBotao.children
            .item(0)
            .children.item(0)
            .classList.remove("btnPressedFill");
          outroBotao.children
            .item(0)
            .children.item(0)
            .setAttribute("data-pressed", "false");
          sound.buttonPauseAudio();
        }
      });
      if (this.getAttribute("data-pressed") === "true") {
        this.classList.remove("btnSoundspressed");
        this.setAttribute("data-pressed", "false");
        this.children
          .item(0)
          .children.item(0)
          .classList.remove("btnPressedFill");
        this.children
          .item(0)
          .children.item(0)
          .setAttribute("data-pressed", "false");
        sound.buttonPauseAudio();
      } else {
        this.classList.add("btnSoundspressed");
        this.setAttribute("data-pressed", "true");
        this.children.item(0).children.item(0).classList.add("btnPressedFill");
        this.children
          .item(0)
          .children.item(0)
          .setAttribute("data-pressed", "true");
        if (botaoId == "forest") {
          sound.pressButton();
          sound.florestSongStart();
        }
        if (botaoId == "rain") {
          sound.pressButton();
          sound.rainSongStart();
        }
        if (botaoId == "coffeeShop") {
          sound.pressButton();
          sound.coffeeShopSongStart();
        }
        if (botaoId == "fireplace") {
          sound.pressButton();
          sound.fireplacetSongStart();
        }
      }
    }
    else {
      controlInput = false;
    }
  });
});
