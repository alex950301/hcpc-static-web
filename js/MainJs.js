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
        <img src="picture/usb.jpg" width= 450px;/>
      </div>
      <div class="back">
        <p >
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

button5.addEventListener("click", function() {
  content.innerHTML = `
    <div class="block3-right-box-monitor" style="background-color: yellow" >
      <p>Button 1 was clicked</p>
    </div>
  `;
});

button6.addEventListener("click", function() {
  content.innerHTML = `
    <div class="block3-right-box-monitor" style="background-color: green" >
      <p>Button 1 was clicked</p>
    </div>
  `;
});

button7.addEventListener("click", function() {
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
