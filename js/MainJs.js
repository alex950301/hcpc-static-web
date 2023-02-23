const content = document.querySelector("#content");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");
const button7 = document.querySelector("#button7");


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
        <p>
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
              <p style="color: gray; font-family: Arial; margin-left: 8px; margin-top: 0px; margin-bottom: 18px;">
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
              <p style="color: gray; font-family: Arial; margin-left: 8px; margin-top: 0px; margin-bottom: 18px;">
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
              <p style="color: gray; font-family: Arial; margin-left: 8px; margin-top: 0px; margin-bottom: 18px;">
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

        <div class="contact-div-shadow" style="margin-bottom: 5px;">
          <img class="contact-picture" src="picture/add-icon.png" style="margin-left: 2px;"/>
          <p class="contact-bar">請聯絡我們的IG : hcpc_7th </p>
        </div>
        <div class="contact-div-shadow" style="margin-bottom: 5px;">
          <img class="contact-picture" src="picture/email.png"/ width: 25px;>
          <p class="contact-bar">我們的電子郵件 : hcshprogram07@gmail.com</p>
        </div>
        <div class="contact-div-shadow" style="margin-bottom: 5px;">
          <img class="contact-picture" src="picture/home.png"/>
          <p class="contact-bar">我們的地址 : 新北市新莊區242中平路135號</p>
        </div>

      </div>
    </div>
  `;
});




button4.addEventListener("click", function() {
  content.innerHTML = `
    <div class="block3-right-box-monitor" style="background-color: red" >
      <p>Button 1 was clicked</p>
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
    <div class="block3-right-box-monitor" style="background-color: blue" >
      <p>Button 1 was clicked</p>
    </div>
  `;
});