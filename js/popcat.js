const popcat = document.querySelector("#popcat");
const btn = document.querySelector("#button7");

const openMouthImg = "picture/open.png";
const closeMouthImg = "picture/close.png";

const openMouthSound = new Audio("sound/open.");
//const closeMouthSound = new Audio("sound/close.mp3");
/*JFrame fr = new JFrame("calculator");
  fr.setBounds();
*/
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
    console.log('按钮被点击了');
    //closeMouthSound.play();
}

/*
因為當用戶觸摸按鈕時，touchstart事件處理程序會立即切換彈出貓的圖像和播放聲音，
而當用戶停止觸摸按鈕時，touchend事件處理程序也會立即切換彈出貓的圖像和播放聲音。
但是，因為touchstart和touchend事件可能被延遲或丟失，所以最好使用與桌面上的滑鼠事件相同的事件處理程序mousedown和mouseup
，這樣可以確保在所有情況下都能正確地處理用戶的輸入。
同時，透過preventDefault()方法來禁止觸摸屏上的滑動行為，避免因手指滑動而導致不必要的觸發。
*/
