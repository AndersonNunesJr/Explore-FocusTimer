
export default function  reset({
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
    btnSoundsDarkMode
})
{
  function  btnLight() {
    light.classList.add("hide");
    dark.classList.remove("hide");
    document.body.setAttribute("data-darkmode", false);
    seconds.setAttribute("data-darkmode", false);
    displayTimer.setAttribute("data-darkmode", false);
    timerBtnsDarkMode.forEach((element) => {
      element.setAttribute("data-darkmode", false);
    });
    btnSounds.forEach((element) => {
      element.setAttribute("data-darkmode", false);
    });
    btnSoundsDarkMode.forEach((element) => {
      element.setAttribute("data-darkmode", false);
    });
  }
  function btnDark() {
    light.classList.remove("hide");
    dark.classList.add("hide");
    document.body.setAttribute("data-darkmode", true);
    seconds.setAttribute("data-darkmode", true);
    displayTimer.setAttribute("data-darkmode", true);
    timerBtnsDarkMode.forEach((element) => {
      element.setAttribute("data-darkmode", true);
    });
    btnSounds.forEach((element) => {
      element.setAttribute("data-darkmode", true);
    });
    btnSoundsDarkMode.forEach((element) => {
      element.setAttribute("data-darkmode", true);
    });
  }
  function play(){
    btnPlay.classList.add("hide");
    btnPause.classList.remove("hide");
    btnSet.classList.add("hide");
    btnStop.classList.remove("hide");
  }
  function pause() {
    btnPause.classList.add("hide");
    btnPlay.classList.remove("hide");
  }
  function reset(){
    btnStop.classList.add("hide");
    btnPause.classList.add("hide");
    btnSet.classList.remove("hide");
    btnPlay.classList.remove("hide");
  }
function  getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
      return false;
    }  
   return Number(newMinutes);
}

  return {reset, play, pause ,btnDark,btnLight,getMinutes};
}