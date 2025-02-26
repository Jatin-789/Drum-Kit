var buttons = document.querySelectorAll(".drum");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;

        drumBeat(buttonInnerHTML);

        drumAnimation(buttonInnerHTML);
    })

    document.addEventListener("keydown", function(event){
        drumBeat(event.key);
        drumAnimation(event.key);
    })
};

function drumBeat(key){
    switch (key) {
        case "w":
            var audio = new Audio("crash.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("snare.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("tom-4.mp3");
            audio.play();
            break;

        default:
            break;
    }
}

function drumAnimation(key){
    var activeKey = document.querySelector("." + key);
    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed");
    }, 100);
}