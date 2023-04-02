const content = document.querySelector("#content");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector("#button7");

/*content.addEventListener("click", function(event) {
  content.addEventListener("click", function(event) {
    if (event.target.matches("#button1, #button2, #button3")) {
      button1.style.backgroundColor = "";
      button2.style.backgroundColor = "";
      button3.style.backgroundColor = "";

      event.target.style.backgroundColor = "yellow";
    }

    if (event.target.matches("#button4, #button5, #button6, #button7")) {
      button4.style.backgroundColor = "";
      button5.style.backgroundColor = "";
      button6.style.backgroundColor = "";
      button7.style.backgroundColor = "";

      event.target.style.backgroundColor = "blue";
    }
});*/
window.onload = function() {
  content.innerHTML = `
  <div class="block3-right-box-monitor">
    獎項 大獎_USB×1
    </br/>
    抽獎辦法 訂閱YouTube，以及在貼文下方留有@一位朋友的留言(是否要@越多人中獎機率越高?)
    </br/>
    時間 2/22公布(張貼海報+ig貼文)(時間配合連假)
    </br/>
    注意事項 再議
    </br/>
    聯繫方式 3/1(三) 公布得獎名單，請與三日之內用ig聯繫我們
    </p>
  </div>
  `;
};

button1.addEventListener("click", function() {
  content.innerHTML = `
    <div class="card">
      <div class="front">
        <img src="picture/poster.png" width= 450px;/>
      </div>
      <div class="back">
        <p style="color: white">
        我們非常高興宣布，我們的獨家大獎是一個USB！只要在我們的YouTube頻道訂閱，並在貼文下方@一位朋友，
        您就有機會贏得這個大獎！不管您@多少人，每位參加者只有一次機會贏得獎品，所以勝出的機率均等。
        我們將在2/22公佈得獎名單，所以請留意我們的海報和ig貼文！
        如果您是贏家，請在三日內與我們用ig聯繫，以便領取獎品。
        再次感謝您參加我們的活動，祝您好運！
        </p>
      </div>
    </div>
  `;
});
/*
<div class="usb-picture">
  <img src="picture/usb.jpg" width= 300px;/>
</div>
<div>
  <p>USB抽獎</p>
</div>
*/
button2.addEventListener("click", function() {
  content.innerHTML = `
  <div>

    <div class="aboutUs-bar">

      <div class="aboutUs-shape">
          <div class="aboutUs-box">
              <img class="aboutUs-picture" src="picture/ig.jfif" />
              <p class="aboutUs-name">Instagram</p>
              <p class="aboutUs-box-text">
                hcpc_7th
              </p>
              <a href="https://www.instagram.com/hcpc_7th?utm_source=qr" target="_blank">
                <button class="aboutUs-button"><strong>LINK</strong></button>
              </a>
          </div>
      </div>

      <div class="aboutUs-shape">
          <div class="aboutUs-box">
              <img class="aboutUs-picture" src="picture/yt.jfif" />
              <p class="aboutUs-name">Youtube</p>
              <p class="aboutUs-box-text">
                HCPC_7th
              </p>
              <a href="https://www.youtube.com/channel/UC9hv97XnCJfMWuX94X2VefQ" target="_blank">
                <button class="aboutUs-button"><strong>LINK</strong></button>
              </a>
            </div>
      </div>

      <div class="aboutUs-shape">
          <div class="aboutUs-box">
              <img class="aboutUs-picture" src="picture/dc.png" />
              <p class="aboutUs-name">Discord</p>
              <p class="aboutUs-box-text">
                  新莊程研7th
              </p>
              <a href="https://discord.gg/SSatzTay" target="_blank">
                <button class="aboutUs-button"><strong>LINK</strong></button>
              </a>
          </div>
      </div>

    </div>

  </div>
  `;
});

button3.addEventListener("click", function() {
  content.innerHTML = `
    <div class = "contact">
      <h1>------------ 聯絡我們 ------------</h2>

      <div class="contact-info">
        <div class="contact-div-shadow" style="margin-bottom: 5px; border: none; color: gray;">
          <img class="contact-picture" src="picture/add-icon.png"/>
          <p class="contact-bar" >請聯絡我們的IG : hcpc_7th </p>
        </div>
        <div class="contact-div-shadow" style="margin-bottom: 5px; border: none; color: gray;">
          <img class="contact-picture" src="picture/email.png"/>
          <p class="contact-bar" >我們的電子郵件 : hcshprogram07@gmail.com</p>
        </div>
        <div class="contact-div-shadow" style="margin-bottom: 5px; border: none; color: gray;">
          <img class="contact-picture" src="picture/home.png"/>
          <p class="contact-bar" >我們的地址 : 新北市新莊區242中平路135號</p>
        </div>

      </div>
    </div>
  `;
});

button4.addEventListener("click", function() {
  content.innerHTML = `
  <div>
    <div>
      <div class="method">
        <div class="method-Main">
          <div class="method-Main-icon">
            <img class="Main" src="picture/photo-sticker.jpg" alt="css-icon" width="50px" height="50px" style="margin: 5px">
            <p>新莊程研社-7th</p>
          </div>
          <div class="method-Main-info">

            <div class="method-Main-info-left-div">
              <div class="method-justify">

                <div class="method-Main-info-div">
                  <p class="method-Main-info-div2">Information</p>
                </div>

                <div class="method-Main-info-div">
                  <div class="method-Main-info-div-text">
                    <div class="method-Main-info-div-text-intro">
                      <p class="method-Main-info-div-text-intro-style">Member</p>
                    </div>
                    <div style="display:grid;align-items: center;justify-content: center; letter-spacing: 3px;">
                      <p class="method-Main-info-left1">社長 | 蕭建凱 |</p>
                      <p class="method-Main-info-left1">副社 | 楊姿霖 |</p>
                      <p class="method-Main-info-left1">教學 | 廖偉丞 |</p>
                      <p class="method-Main-info-left1">總務 | 劉勁成 |</p>
                      <p class="method-Main-info-left1">美宣 | 方子宸 |</p>
                      <p class="method-Main-info-left1">文書 | 饒翊琦 |</p>
                      <p class="method-Main-info-left1">公關 | 吳育全 |</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>


            <div class="method-Main-info-right-div">
              <div class="method-justify">


                <div class="method-Main-info-div2">
                  <p class="method-Main-info-right1">
                  無論你是否熟悉程式語言，如果你想成為一位程式高手，那麼現在就加入程研社吧！
                  這個社群不僅能幫助你了解程式碼的世界，還有完整且有趣的程式課程，你能夠累積實力，實現自己的夢想。
                  此外，這裡還有各路好手，他們能和你一起切磋，讓你的程式技能得到更大的提升。
                  歡迎加入程研社，和我們一起成為程式高手吧！
                  </p>
                </div>

                <div class="method-Main-info-div2">
                  <p class="method-Main-info-right1">
                  每次社課都會錄影，供想學習的同學觀看。即便你不是社員，我們也歡迎你跟我們一起討論程式設計。
                  此外，課程資源會同步在YouTube，記得要去追蹤訂閱喔。
                  </p>
                </div>

                <div class="method-Main-info-div3">
                  sdsd
                </div>


              </div>
            </div>



          </div>



        </div>
      </div>
    </div>
  </div>
  `;
});

button5.addEventListener("click", function() {
  content.innerHTML = `
  <div>
    <div>
      <div class="method">
        <div>
          <p>Button 1 was clicked</p>
          <p>Button 1 was clicked</p>
          <p>Button 1 was clicked</p>
          <p>Button 1 was clicked</p>
          <p>Button 1 was clicked</p>
          <p>Button 1 was clicked</p>
          <p>Button 1 was clicked</p>
          <p>Button 1 was clicked</p>
          <p>Button 1 was clicked</p>
          <p>Button 1 was clicked</p>
          <p>Button 1 was clicked</p>
          <p>Button 1 was clicked</p>
          <p>Button 1 was clicked</p>
          <p>Button 1 was clicked</p>
          <p>Button 1 was clicked</p>
          <p>Button 1 was clicked</p>
          <p>Button 1 was clicked</p>
        </div>
      </div>
    </div>
  </div>
  `;
});

button6.addEventListener("click", function() {
  content.innerHTML = `
    <div class="webinfo">
      <div class="webinfo-image">
        <img src="picture/css.png" alt="css-icon" width="180px">
        <img src="picture/html.png" alt="html-icon" width="180px">
        <img src="picture/js.png" alt="js-icon" width="180px">
      </div>
      <div class="webinfo-image-github" style="margin-left: 20px">
        <img src="picture/github.png" alt="css-icon" width="180px">
        <p class="webinfo-github">
          Power by Github
        </p>
      </div>
    </div>
  `;
});

button7.addEventListener("click", function() {
  content.innerHTML = `
    <div class="block3-right-box-monitor" style="background-color: green" >
      <p>Button 1 was clicked</p>
    </div>
  `;
});
