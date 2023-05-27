const content = document.querySelector("#content");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");
const button6 = document.querySelector("#button6");

window.onload = function() {
  content.innerHTML = `
  <div class="method">
    <div class="method-Main">

      <div class="method-Main-icon">
        <img class="Main" src="picture/photo-sticker.jpg" alt="css-icon" width="50px" height="50px" style="margin: 5px;">
        <h1 class="main-page-title" style="margin-left:10px;">新莊程研社-7th</h1>
      </div>
      <div class="method-Main-info">

        <div class="method-Main-info-left-div">
          <div class="method-justify">

            <div class="method-Main-info-div2">
              <p style="font-family: 'Alkatra', cursive;text-align:center;margin:5px;font-weight: 10px;">Information</p>
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

            <div class="method-Main-info-div">
              <div class="method-Main-info-div-text">

                <div class="method-Main-info-div-text-intro">
                  <p class="method-Main-info-div-text-intro-style" style="font-size: 5px;font-family: Montserrat;">Programming Language</p>
                </div>
                <div style="display:grid;align-items: center;justify-content: center; letter-spacing: 3px;">
                  <img src="picture/java.png" alt="css-icon" width="140px" height="70px">
                </div>

              </div>
            </div>
            
          </div>
        </div>


        <div class="method-Main-info-right-div">
          <div class="method-justify">

            <div class="method-Main-info-div2" style="display: flex; justify-content: flex-start;">

              <div style="display:grid; margin:0;">

                <div class="status">
                  <div class="status-style-light">Status</div>
                  <div class="status-style">Photos</div>
                  <div class="status-style">Videos</div>
                  <img style="margin-right: 1px "class="image-circle" src="picture/point.png" width="25px" height="27px" alt="list-icon">
                </div>

                <div class="method-Main-justify" style="display: grid;">

                  <div class="status-text-div">
                    <img class="Main" src="picture/photo-sticker.jpg" alt="css-icon" width="30px" height="30px">
                    <p class="status-text">Write something to hcpc_7th ...</p>
                  </div>
                  <div>
                    <button class="share-button">Send</button>
                  </div>

                </div>

              </div>

            </div>


            <div class="method-Main-info-div2">

              <div class="status">
                <div class="status-style-light">Status</div>
                <div class="status-style">Photos</div>
                <div class="status-style">Videos</div>
                <img style="margin-right: 5px"class="image-circle" src="picture/point.png" width="25px" height="27px" alt="list-icon">
              </div>

              <div class="method-Main-justify">
                <img class="Main" src="picture/photo-sticker.jpg" alt="css-icon" width="30px" height="30px" style="margin-top:6px;margin-left:6px;">
                <p class="method-Main-info-right1"style="text-align: justify;">
                無論你是否熟悉程式語言，如果你想成為一位程式高手，那麼現在就加入程研社吧！這個社群不僅能幫助你了解程式碼的世界，還有完整且有趣的程式課程，你能夠累積實力，實現自己的夢想。此外，這裡還有各路好手，他們能和你一起切磋，讓你的程式技能得到更大的提升。歡迎加入程研社，和我們一起成為程式高手吧！
                </p>
              </div>
              

            </div>

            <div class="method-Main-info-div2">

              <div class="status">
                <div class="status-style-light">Status</div>
                <div class="status-style">Photos</div>
                <div class="status-style">Videos</div>
                <img style="margin-right: 5px"class="image-circle" src="picture/point.png" width="25px" height="27px" alt="list-icon">
              </div>
              
            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
  `;
};

button1.addEventListener("click", function() {
  content.innerHTML = `
    <div class="method">
    
      <div class="container">
        <div class="box">
            <span></span>
            <div class="content">
                <h2>第五次社團課</h2>
                <p>主題 : 作品發表</p>
                <p>日期 : 5月26日<p>
            </div>
        </div>
        <div class="box">
            <span></span>
            <div class="content">
                <h2>第六次社團課</h2>
                <p>主題 : 同樂會</p>
                <p>日期 : 6月9日</p>
            </div>
        </div>
        <div class="box">
            <span></span>
            <div class="content">
                <h2>社團特色USB抽獎</h2>
                <p>大家可以踴躍參加喔</p>
                <p>日期 : 5月27日 ~ 6月2日</p>
            </div>
        </div>
      </div>

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
              <a href="https://discord.gg/JjXYPJ7fhJ" target="_blank">
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
      <h1>---------- 聯絡我們 ----------</h2>

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
      <div class="method">
        <div class="method-Main">

          <div class="method-Main-icon">
            <img class="Main" src="picture/photo-sticker.jpg" alt="css-icon" width="50px" height="50px" style="margin: 5px;">
            <h1 class="main-page-title" style="margin-left:10px;">新莊程研社-7th</h1>
          </div>
          <div class="method-Main-info">

            <div class="method-Main-info-left-div">
              <div class="method-justify">

                <div class="method-Main-info-div2">
                  <p style="font-family: 'Alkatra', cursive;text-align:center;margin:5px;font-weight: 10px;">Information</p>
                </div>

                <div class="method-Main-info-div">
                  <div class="method-Main-info-div-text">
                    <div class="method-Main-info-div-text-intro">
                      <p class="method-Main-info-div-text-intro-style">Member</p>
                    </div>
                    <div style="display:grid;align-items: center;justify-content: center; letter-spacing: 3px;">
                      <p>指導老師 : 廖勝雍</p>
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

                <div class="method-Main-info-div">
                  <div class="method-Main-info-div-text">

                    <div class="method-Main-info-div-text-intro">
                      <p class="method-Main-info-div-text-intro-style" style="font-size: 5px;font-family: Montserrat;">Programming Language</p>
                    </div>
                    <div style="display:grid;align-items: center;justify-content: center; letter-spacing: 3px;">
                      <img src="picture/java.png" alt="css-icon" width="140px" height="70px">
                    </div>

                  </div>
                </div>
                
              </div>
            </div>


            <div class="method-Main-info-right-div">
              <div class="method-justify">

                <div class="method-Main-info-div2" style="display: flex; justify-content: flex-start;">

                  <div style="display:grid; margin:0;">

                    <div class="status">
                      <div class="status-style-light">Status</div>
                      <div class="status-style">Photos</div>
                      <div class="status-style">Videos</div>
                      <img style="margin-right: 1px "class="image-circle" src="picture/point.png" width="25px" height="27px" alt="list-icon">
                    </div>

                    <div class="method-Main-justify" style="display: grid;">

                      <div class="status-text-div">
                        <img class="Main" src="picture/photo-sticker.jpg" alt="css-icon" width="30px" height="30px">
                        <p class="status-text">Write something to hcpc_7th ...</p>
                      </div>
                      <div>
                        <button class="share-button">Send</button>
                      </div>

                    </div>

                  </div>

                </div>


                <div class="method-Main-info-div2">

                  <div class="status">
                    <div class="status-style-light">Status</div>
                    <div class="status-style">Photos</div>
                    <div class="status-style">Videos</div>
                    <img style="margin-right: 5px"class="image-circle" src="picture/point.png" width="25px" height="27px" alt="list-icon">
                  </div>

                  <div class="method-Main-justify">
                    <img class="Main" src="picture/photo-sticker.jpg" alt="css-icon" width="30px" height="30px" style="margin-top:6px;margin-left:6px;">
                    <p class="method-Main-info-right1"style="text-align: justify;">
                    無論你是否熟悉程式語言，如果你想成為一位程式高手，那麼現在就加入程研社吧！這個社群不僅能幫助你了解程式碼的世界，還有完整且有趣的程式課程，你能夠累積實力，實現自己的夢想。此外，這裡還有各路好手，他們能和你一起切磋，讓你的程式技能得到更大的提升。歡迎加入程研社，和我們一起成為程式高手吧！
                    </p>
                  </div>
                  

                </div>

                <div class="method-Main-info-div2">

                  <div class="status">
                    <div class="status-style-light">Status</div>
                    <div class="status-style">Photos</div>
                    <div class="status-style">Videos</div>
                    <img style="margin-right: 5px"class="image-circle" src="picture/point.png" width="25px" height="27px" alt="list-icon">
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
    <div class="card">
      <div class="front">
        <img src="picture/poster1.png" width= 450px;/>
      </div>
      <div class="back">
      <img src="picture/poster2.png" width= 450px;/>
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


/*
button7.addEventListener("click", function() {
  content.innerHTML = `
    <div class="block3-right-box-monitor" style="background-color: green" >
      <p>Button 1 was clicked</p>
    </div>
  `;
});
*/
