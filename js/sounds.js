export default function () {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
  const florestSong = new Audio("./sons/Floresta.wav")

  const rainSong = new Audio(
    "./sons/Chuva.wav"
  );
  const coffeeShopSong = new Audio(
    "./sons/Cafeteria.wav"
  );
  const fireplacetSong = new Audio(
    "./sons/Lareira.wav"
  );
  
   function buttonPauseAudio(){
     florestSong.pause();
     rainSong.pause();
     fireplacetSong.pause();
     coffeeShopSong.pause();
   }
  function pressButton (){
   buttonPressAudio.play();
  }
  function timeEnd(){
    kitchenTimer.play();
  }
  function  florestSongStart(){
    florestSong.loop = true;
    florestSong.play();
   }
  function  rainSongStart(){
    rainSong.loop = true;
    rainSong.play();
   }
  function  coffeeShopSongStart(){
   coffeeShopSong.loop = true;
   coffeeShopSong.play ();
   }
  function  fireplacetSongStart(){ 
    fireplacetSong.loop = true;
    fireplacetSong.play(); 
  }


  return {
    pressButton,
    timeEnd,
    florestSongStart,
    rainSongStart,
    coffeeShopSongStart, 
    fireplacetSongStart,
    buttonPauseAudio,
    florestSong,
    rainSong,
    coffeeShopSong,
    fireplacetSong
  };
}
