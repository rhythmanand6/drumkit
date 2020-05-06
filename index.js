  var numberofDrum = document.querySelectorAll(".drum").length;
  for(var i = 0 ; i<  numberofDrum ; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click" ,  function(){
    var buttonInnerHTMl = this.innerHTMl;

    makeSound(buttonInnerHTMl);
    buttonAnimation(buttonInnerHTMl);

    } );
}

document.addEventListener("keypress" , function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case "r":
    var tom1 = new Audio("sounds/tom1.mp3");
    tom1.play();
      break;

      case "h":
      var tom2 = new Audio("sounds/tom2.mp3");
      tom2.play();
        break;

        case "y":
        var tom3 = new Audio("sounds/tom3.mp3");
        tom3.play();
          break;

        case "t":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
          break;

        case "m":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
          break;
        case "j":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();

          break;
    default:
}
}

function buttonAnimation(currentkey){
  var activeButton = document.querySelector("."+ currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);


}
