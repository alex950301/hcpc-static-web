const content = document.querySelector("#content");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

window.onload = function() {
  content.innerHTML = `
    <div class="block3-right-box-monitor" style="background-color: purple;">
      <p>Main page, please click the button on top</p>
    </div>
  `;
};

button1.addEventListener("click", function() {
  content.innerHTML = `
    <div class="block3-right-box-monitor">
      <p>Button 1 was clicked</p>
    </div>
  `;
});

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
              <a href="https://www.instagram.com/hcpc_7th?utm_source=qr" target="_blank" >
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
              <a href="https://www.youtube.com/channel/UC9hv97XnCJfMWuX94X2VefQ" target="_blank" >
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
              <a href="https://discord.gg/SSatzTay" target="_blank" >
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
    <div class="block3-right-box-monitor" style="background-color: red;">
      <p>Button 3 was clicked</p>
    </div>
  `;
});

/* 背景正常顯示
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const monitor = document.getElementById("monitor");

button1.addEventListener("click", function() {
  document.getElementById("monitor").style.display = "block";
  monitor.style.backgroundColor = "red";
});

button2.addEventListener("click", function() {
  document.getElementById("monitor").style.display = "block";
  //monitor.innerHTML = "fuck!";
  monitor.style.backgroundColor = "#d6d6d6";
});

button3.addEventListener("click", function() {
  document.getElementById("monitor").style.display = "block";
  monitor.style.backgroundColor = "blue";
});*/
