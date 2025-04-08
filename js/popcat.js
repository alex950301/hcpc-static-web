const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#button7");

const openMouthImg = "picture/open.png";
const closeMouthImg = "picture/close.png";

const openMouthSound = new Audio("sound/open.mp3");
const closeMouthSound = new Audio("sound/close.mp3");

btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mouseup", closeMouth);

btn.addEventListener("touchstart", function(event) {
    event.preventDefault();
    openMouth();
})

btn.addEventListener("touchend", function(event) {
    event.preventDefault();
    closeMouth();
})

function openMouth() {
    popcat.src = openMouthImg;
    openMouthSound.play();
}

function closeMouth() {
    popcat.src = closeMouthImg;
    console.log('按钮被點擊了');
    //closeMouthSound.play();
}
