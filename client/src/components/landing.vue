<template>
  <div class="app">
    <div ref="home" class="main">
      <v-layout>
        <v-flex md7 xs7>
          <div class="logos">
            <img class="logo1" src="../assets/images/logo-min.png" alt="GoToBot logo" />
            <img class="logo2" src="../assets/images/logologo1.png" alt="Gotobot logo v3"/>
            <img class="logo3" src="../assets/images/logologo.png" alt="Gotobot logo v2"/>
          </div>
        </v-flex>
        <v-flex md5 xs5>

            <!-- ode pocinje -->
            <div id="mob-nav">
              <a v-on:click="sidebar" class="navicon"></a>
            </div>
          <!-- ode zavrsava -->
            <label class="rocker">
              <input type="checkbox" v-model="checkbox" v-on:input="checkboxfunc" />
              <span class="switch-left">eng</span>
              <span class="switch-right">hrv</span>
            </label>
       </v-flex>
      </v-layout>
      <div id="definition">
          <div class="wrapper">
            <v-layout wrap>
              <v-flex class="home-page-padding" md5 sm12 xs12 order-md-1 order-sm-2 order-xs2 >
                <p class="h1-main">
                  {{$t('opis')}}
                  <br>
                  <span
                    style="font-size:40px;"
                    class="txt-rotate"
                    data-period="100"
                    data-rotate='["Hotel.", "Hostel.", "Apartment."]'
                  ></span>
                </p>
                <p class="h2-main">{{$t('opis2')}}</p>
                <v-btn
                  x-large
                  color="success"
                  dark
                  id="button-main"
                  v-on:click="ScrollTo('contact')"
                >{{$t('chatbot')}}</v-btn>
              </v-flex>
              <v-flex md7 sm12 xs12 order-md-2 order-sm-1 order-xs1>
                <img
                  class="home_mob"
                  src="../assets/images/home_mob-min.png"
                  alt="mobile phone mockup chat"
                />
              </v-flex>
            </v-layout>
          </div>

        

          <div class="toggle">
            <ul class="accordion-menu">
              <li>
                <div class="dropdownlink" v-on:click="ScrollTo('benefits')">
                  <i>
                  <svg style="width:18px;height:18px;" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" class="svg-inline--fa fa-chart-line fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z">
                  </path></svg> 
                  </i>
                  {{$t('about')}}
                 
                </div>
  
              </li>
               <li>
                <div class="dropdownlink" v-on:click="ScrollTo('how-does-it-work')">
                <i>
                <svg style="width:18px;height:18px;" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cogs" class="svg-inline--fa fa-cogs fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"></path></svg>
                </i>
                {{$t('how it works')}}
                </div>

              </li>
              <li>
                <div class="dropdownlink"  v-on:click="ScrollTo('contact')">
                <i>
                <svg style="width:18px;height:18px;" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" class="svg-inline--fa fa-paper-plane fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg>  
                </i> 
                {{$t('contact us')}}
                </div>

              </li>
              <li>
                <div class="dropdownlink setLanguages">
                    <div id="eng" v-on:click="setEnglish">
                      <img src="../assets/images/UK.png"/> ENG
                    </div>
                    <div id="hrv" v-on:click="setCroatian">
                      <img src="../assets/images/HR.png"/> HRV
                    </div>
                </div>
 
              </li>
            </ul>
                <!-- <ul class="social">
                    <li><a href="https://github.com/Kirbaba"><i class="fa fa-github"></i></a></li>
                    <li><a href="https://twitter.com/VladKirbaba"><i class="fa fa-twitter"></i></a></li>
                  <li> <a href="https://www.facebook.com/VladislavKirbaba"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="https://vk.com/vladislavkirbaba"> <i class="fa fa-vk"></i></a></li>
                </ul>-->
              </div>
      </div>
    </div>
    <div class="body-div">
      <div id="how-we-do-it">
        <h1 style="margin-bottom:45px;" ref="benefits">{{$t('benefiti')}}</h1>
        <v-layout row wrap>
          <v-flex md4 sm12 xs12 order-xs2 order-md-1>
            <v-layout row wrap>
              <v-flex class="how-we-do-it-height" md12 sm6 xs12>
                <svg
                  class="how-we-do-it-img img1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="682.667"
                  height="682.667"
                  viewBox="0 0 512 512"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M237.5.6c-25.1 2.6-47.1 7.2-66.5 13.9C85.8 44.3 20.8 119.9 4.6 208.4 2 222.2 0 240.6 0 250.2v5.8h22v-7.3c0-3.9.7-12.9 1.5-19.9 6.1-52 29.4-100.5 66-137.3 30.3-30.4 67.1-51.5 108-62 22.6-5.8 33-7 60.5-6.9 21.8.1 26.1.4 39 2.7 32.4 5.8 63 17.9 89.1 35.2 9.8 6.5 24.3 17.8 26.9 20.9 1.3 1.7 1.1 1.8-4 1.2-9.1-1.1-41.9-3.6-46-3.6h-3.9l-.3 10.2c-.2 5.7-.2 10.5-.1 10.7.2.4 91.6 8.1 92 7.7.1-.1-1-21.5-2.5-47.6l-2.7-47.5-10.5.4c-5.8.2-10.7.5-10.9.7s.2 11.4.8 25c.7 13.5 1 24.8.7 25.1-.2.3-3.3-1.9-6.8-4.9-35.4-30-83-50.7-130.8-56.8C279.1.9 244.4-.1 237.5.6zm-83 156c-11.1 2.3-24.1 9.2-32.3 17.2-7.9 7.7-16.7 19.2-15.5 20.3.4.4 6.4 3.9 13.3 7.8l12.5 7.1 3.5-4.3c6.4-7.8 12.5-12.8 19.9-16.5 7-3.5 8.1-3.7 16.5-3.7 7.2.1 10.1.5 13.9 2.3 6.9 3.1 12.3 7.7 15.5 13 2.3 4 2.7 5.8 2.7 12.2 0 6.3-.5 8.6-3.1 14-5.1 10.7-13.9 20.7-54.6 61.5L108 326.6V355h135.1l-.6-31.5-43.9-.3-43.8-.2 27.8-28.3c47.5-48.1 52.9-56.5 52.9-82.7 0-11.7-.3-14.4-2.4-20-6.4-17.5-21.7-30.6-41.2-35.4-8.2-2-27.6-2-37.4 0zm183.2 7.1l-70.7 114V307h85v50h31l.2-24.8.3-24.7 11.8-.3 11.7-.3v-29.8l-23.5-.6-.3-17.8-.2-17.7h-31v36h-47.2l1.4-2.3c5.6-8.7 67.9-111.8 68.4-113.1.6-1.4-1.1-1.6-17-1.6H340l-2.3 3.7zM490 262.9c0 29.1-9.4 67.2-24 96.7-33.5 67.9-95.9 114.3-171.5 127.5-15.5 2.7-44.6 3.6-61 2-45-4.5-86.8-21.4-123-49.6-4.4-3.4-8.9-7.2-9.9-8.4l-1.9-2.1 4.4.5c3.6.4 20.4 1.8 46.4 3.8l3 .2.5-10.5c.3-5.8.4-10.6.3-10.8-.1-.4-91.7-8.1-92-7.8-.1.1 1 21.7 2.5 48l2.7 47.8 10.5-.7c5.8-.4 10.7-.9 10.9-1.1s-.2-11.4-.8-25c-.7-13.5-1.1-24.8-.9-24.9.2-.2 4.6 3 9.8 7.2 32.9 26.2 72.5 44.2 113.5 51.8 108.6 19.9 216.3-30.8 270.3-127.2 18.6-33.3 29.7-71.9 31.8-111.6l.7-12.7H490v6.9z"
                  />
                </svg>
                <h2 class="how-we-do-it-h1">{{$t('instant response')}}</h2>
                <p class="how-we-do-it-p">{{$t('insant response msg')}}</p>
              </v-flex>
              <v-flex class="how-we-do-it-height" md12 sm6 xs12>
                <svg
                  class="how-we-do-it-img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="682.667"
                  height="682.667"
                  viewBox="0 0 512 512"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M176 1.5C75.7 14 0 99.4 0 200c0 76.8 44.8 147.4 114.7 180.7 59.9 28.5 131.7 25 188.1-9.3l7.5-4.5 69.6 69.4c65.2 65 70 69.5 76.1 72.3 5.7 2.5 7.7 2.9 16 2.9 8.6 0 10.1-.3 16.2-3.2 9.3-4.4 15.1-10 19.6-19.1 3.5-7.2 3.7-8.1 3.7-17.1 0-8.4-.4-10.4-2.9-16.1-2.8-6.1-7.3-10.9-72.3-76.1l-69.4-69.6 4.5-7.5c34.8-57.3 37.9-129.5 8.2-190.3C342.1 35.9 260-8.9 176 1.5zm42.8 19.6c55.8 6.1 105.9 37.8 134.6 85.1 43.4 71.5 32.6 161.9-26.3 220.9-15.4 15.3-30.1 25.7-50.1 35.3-68.4 32.8-150 18.7-204.1-35.3C6.4 260.5 2.2 155.2 63.3 83.2c37.8-44.6 97.5-68.5 155.5-62.1zm150.6 319.8l13.9 13.9-6.8 7.5c-3.7 4.1-10.1 10.5-14.2 14.2l-7.5 6.8-14-14-13.9-14 13.8-14 14.3-14.2c.3 0 6.8 6.2 14.4 13.8zM489.3 462c3.4 5.3 3.1 15.3-.5 20.7-5 7.5-13.7 10.7-22.8 8.3-4.1-1.1-8.9-5.6-50.6-47.2l-46.1-46 14.1-14.2 14.1-14.3 44.8 44.6 47 48.1zM184.5 40.6c-71 7.6-127.7 59.5-141.7 129.9-3.2 15.7-3.2 43.3 0 59 9.2 46.3 35.8 84 76.2 108.3 14.6 8.7 32 15.3 51 19.3 15.2 3.2 43.8 3.3 59.6.1 65.3-13.1 114.6-62.3 127.6-127.5 3.2-16.1 3.2-43.3 0-59.4C344.2 105.4 295 55.9 230.5 43c-9.8-2-36.8-3.4-46-2.4zM226 62.5c18.4 3.6 36.8 11.2 53 22 4.1 2.7 12.7 10.2 19.1 16.5 21.2 20.9 33.7 44.2 39.6 73.6 2.4 12.3 2.4 38.5 0 50.8-5.8 29-18.2 52.3-39.1 73.2-20.6 20.7-44.1 33.2-73.2 39.1-13.5 2.6-39.5 2.4-53.4-.6-28.1-6-50.4-18.3-71-39-6.3-6.4-13.8-15-16.5-19.1-10.8-16.3-18.3-34.4-22.1-53.5-2.5-12.4-2.5-38.6 0-51 3.8-19.1 11.3-37.4 22.1-53.5 6.3-9.3 21.6-25.4 30.9-32.4 19.5-14.6 43-24.3 66.8-27.5 10-1.3 33.5-.6 43.8 1.4zm-30.9 18.8c-4.7 2.8-6.3 8.5-3.7 13.6 1.8 3.3 5.4 5.1 10.6 5.1 6.9 0 19.2 2.1 27.5 4.7 26.3 8.2 47.3 26.3 60.3 52 4.6 9.2 6.3 11.6 9 12.9 4.4 2.1 9.6.4 12.3-4 2.5-4 2-6.7-3.1-17.5-18.7-39.1-57.6-65.3-100.5-67.6-7.6-.4-10.6-.2-12.4.8zm110 110.1c-8.7 4.8-5 18.6 4.9 18.6 5.1 0 10-4.9 10-9.9 0-7.5-8.3-12.4-14.9-8.7z"
                  />
                </svg>
                <h2 class="how-we-do-it-h1">{{$t('fast search')}}</h2>
                <p class="how-we-do-it-p">{{$t('fast search msg')}}</p>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex md4 sm12 xs12 order-xs1 order-md-2>
            <!-- <img class="how-does-it-look-img" src="../assets/images/iphone1.gif" /> -->
            <video class="how-does-it-look-img" autoplay loop muted playsinline>
              <source src="../assets/images/mp4-1.mp4" type="video/mp4" />
            </video>
          </v-flex>

          <v-flex md4 sm12 xs12 order-xs3 order-md-3>
            <v-layout row wrap>
              <v-flex class="how-we-do-it-height best_experiences" md12 sm6 xs12>
                <svg
                  class="how-we-do-it-img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="682.667"
                  height="682.667"
                  viewBox="0 0 512 512"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M184.3 2.4c-2.6 2.1-5.1 8-15.8 35.9l-12.8 33.3-34.6 6.8-36.7 7.8C82 87.3 79 92 79 94.7c0 1 5.2 16.9 11.6 35.3 9.6 27.8 11.3 33.8 10.4 35.4-.7 1-10 12.7-20.8 26-22.1 27.2-24.2 30-24.2 33 0 5.4 3.3 7.9 34.2 26.4l30.5 18.3.8 35.9c.5 23.4 1.1 36.6 1.9 38.1.6 1.2 2.3 3.1 3.8 4.2l2.7 2 47.4-7.3c.4 0 .7 36.5.7 81.1 0 73.9.1 81.3 1.7 83.9 2.6 4.5 8.1 6.2 12.5 3.9 1.1-.6 15.5-11 32-23l31.2-22.5c.8-.3 14.7 9.3 31.8 21.9l32.5 23.6c4.6 2.4 10.2.6 12.8-4.3 1.4-2.8 1.6-7.8 1.3-48.3l-.3-45.3-2.7-2.6c-3.7-3.7-9.9-3.7-13.6 0l-2.7 2.6-1 68.8-23.7-17.5-23.8-17.5V433c0-13.3-.1-14-2.5-16.8-3-3.6-6.9-4.5-11.2-2.7-5 2.1-5.7 4.6-6.3 19.9l-.5 14-19.1 14-23.8 17.4-4.6 3.3V338h2.4c1.9 0 7.1 5.4 24.5 25.5 25.3 29.1 25.4 29.2 29.2 30 5.3 1.2 8.8-1.9 31.4-28.1l23.2-26.5c.8-.7 12.8.8 37.3 4.7l36 5.8 2.8-2.1c1.5-1.1 3.2-3 3.8-4.2.8-1.5 1.4-14.7 1.9-38.1l.8-35.9 30.5-18.3c30.9-18.5 34.2-21 34.2-26.4 0-3-2.1-5.8-24.2-33l-20.8-26c-.9-1.6.8-7.6 10.4-35.4 6.4-18.4 11.6-34.3 11.6-35.3 0-2.7-3-7.4-5.4-8.5-1.2-.6-17.7-4-36.7-7.8l-34.6-6.8-12.8-33.3C329.3 1.3 328.1-.8 321.2.4c-1.9.3-17.4 8.2-34.4 17.6L256 35.1 225.2 18C208.2 8.6 192.7.7 190.8.4c-2.7-.5-4-.1-6.5 2zm39.6 37.8c14 7.8 27.1 14.7 29 15.4 4.7 1.6 4.4 1.7 36.8-16.3 14.7-8.1 26.7-14.2 27.2-13.7.4.5 5.8 14.2 12 30.4 7.5 19.8 12 30.2 13.6 31.6 1.8 1.7 8.8 3.4 34.4 8.4 21.9 4.3 32.1 6.7 32.1 7.5 0 .7-4.6 14.5-10.2 30.6-5.6 16.2-10.1 30.9-10.1 32.7.1 1.8.8 4.1 1.5 5 7.8 9.1 39.8 49.3 39.8 49.9 0 .4-12.6 8.4-28 17.6-20 12-28.4 17.6-29.4 19.5-1 2-1.5 10.8-1.9 35.1l-1.1 32.8c-.2.2-14.7-1.9-32.2-4.7-17.8-2.8-33.1-4.8-34.6-4.4-2.1.4-8.4 7-24.5 25.5-11.9 13.7-21.9 24.9-22.3 24.9s-10.2-11-21.9-24.4c-12.7-14.7-22.3-24.8-24-25.6-2.5-1-7.8-.4-35.1 4l-32.6 4.7c-.3-.2-.7-15-1.1-32.8-.4-24.3-.9-33.1-1.9-35.1-1-1.9-9.4-7.5-29.4-19.5-15.4-9.2-28-17.1-28-17.6 0-.4 9.1-12 20.3-25.8 11.1-13.7 20.5-26.2 20.9-27.6.5-2-1.1-7.9-6.3-23.2-12-34.8-14.3-42-13.8-42.5.2-.2 14.6-3.2 31.9-6.5 21.2-4.1 32.3-6.7 34-8 1.9-1.4 5.3-9.1 14.2-32.2L195 25.1c0-.7 4.5 1.6 28.9 15.1zm16.6 40.9c-11.8 1.7-23.8 5.7-26.7 8.9-3.9 4.2-3.8 9.1.1 13.1 3.6 3.5 7.2 3.7 16.3.9 47.8-14.9 99.5 14.2 112.9 63.5 3.2 11.5 3.2 33.5 0 45-8.6 31.6-33 56-64.6 64.6-11.5 3.2-33.5 3.2-45 0-31.8-8.6-56.1-33-64.7-65.1-3.3-12.2-3.2-30.6.1-44.1 2.1-8.5 2.3-10.1 1.1-12.8-3-7.4-13.9-8-17.6-.9-2.6 5.1-5.5 19.2-6.1 30.3-2.1 38.8 16.4 75.2 49.2 97 43.3 28.9 101.1 23 138-14 52-52 39.3-138.9-25.5-174.3-19.3-10.5-45.6-15.2-67.5-12.1zm-60.7 30.2c-7.9 6.4-4 17.7 6 17.7 5.6 0 10.6-6.4 9.5-12.3-.7-3.7-5.7-7.7-9.6-7.7-1.8 0-4.4 1-5.9 2.3zm71.2 30.1c-1.9 1.3-9 8.3-15.7 15.5-11 11.7-12.3 13.5-12.3 16.7 0 5.2 4.4 9.4 10 9.4 3.5 0 4.8-.7 9-4.6l5-4.7V221h-6.7c-8.3 0-11.2 1.4-13.6 6.3-1.8 3.6-1.8 3.8 0 7.4 1 2.1 2.9 4.3 4.3 5 3.3 1.7 49.1 1.8 52.3.2 7.5-3.9 7.5-13.9 0-17.8-1.2-.6-5.3-1.1-9.2-1.1H267v-37.1c0-32.8-.2-37.4-1.7-39.9-3.1-5.4-8.8-6.4-14.3-2.6zm69.5 229.5c-6.4 2.7-8.1 11-3.2 15.8 6 6.1 16.2 1.9 16.2-6.7 0-6.6-7.2-11.6-13-9.1z"
                  />
                </svg>
                <h2 class="how-we-do-it-h1">{{$t('best experiences')}}</h2>
                <p class="how-we-do-it-p">{{$t('best experiences msg')}}</p>
              </v-flex>
              <v-flex class="how-we-do-it-height" md12 sm6 xs12>
                <svg
                  class="how-we-do-it-img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="682.667"
                  height="682.667"
                  viewBox="0 0 512 512"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M134 .9c-9.5 3-18.5 11.4-21.3 20.1-1.6 4.8-1.7 22.4-1.7 235l1.7 235c2.1 6.5 8.9 14.2 15.7 17.8l5.1 2.7h245l5.1-2.7c6.8-3.6 13.6-11.3 15.7-17.8 1.6-4.8 1.7-22.4 1.7-235l-1.7-235c-2.1-6.5-8.9-14.2-15.7-17.8L378.5.5l-121-.2C191 .2 135.4.5 134 .9zm242 17.9c1.9.9 4.5 3.2 5.7 5.1 2.1 3.1 2.3 4.6 2.3 15.2V51H128V39.1c0-10.6.2-12.1 2.3-15.2C135.2 16.5 126 17 256 17c108.9 0 116.7.1 120 1.8zm8 220.2v171H128V68h256v171zm0 216.9c0 28.3 0 28.9-2.3 32.2-4.9 7.4 4.3 6.9-125.7 6.9s-120.8.5-125.7-6.9c-2.3-3.3-2.3-3.9-2.3-32.2V427h256v28.9zM207.5 28.5c-3.4 3.3-3.4 8.3.1 11.6l2.6 2.4h92l2.4-2.8c3.1-3.7 3.1-8.1-.1-11.2l-2.4-2.5h-92.2l-2.4 2.5zm136.7-.5c-3 2.8-3.6 6.2-1.8 9.8 2.1 4 6.3 5.5 13.7 5 5.3-.4 6.6-.9 8.7-3.3 1.9-2.3 2.3-3.6 1.8-6.4-.9-5.6-3.5-7.1-12.5-7.1-6.4 0-8.1.4-9.9 2zM238.4 436.4c-10.1 3.2-16.4 12.1-16.4 23.4 0 8.5 1.5 13.3 5.9 18.3 5.9 7 9.1 7.9 28.1 7.9s22.2-.9 28.1-7.9c4.4-5 5.9-9.8 5.9-18.3 0-11.5-6.3-20.3-16.8-23.4-5.8-1.8-29.1-1.8-34.8 0zm32 17.7c2.1 1.6 2.6 2.9 2.6 6.3 0 2.3-.7 5.2-1.6 6.4-1.4 2.1-2.2 2.2-15.4 2.2s-14-.1-15.4-2.2c-.9-1.2-1.6-4.1-1.6-6.4 0-3.4.5-4.7 2.6-6.3 2.4-1.9 4-2.1 14.4-2.1s12 .2 14.4 2.1z"
                  />
                </svg>
                <h2 class="how-we-do-it-h1">{{$t('direct on mobile')}}</h2>
                <p class="how-we-do-it-p">{{$t('direct on mobile msg')}}</p>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </div>
      <div id="how-does-it-work" ref="how-does-it-work">
        <h1 class="how-does-it-work-h12">{{$t('usage')}}</h1>

        <v-layout row wrap class="layout123">
          <v-flex md4 xs12>
            <div class="grid">
              <div></div>
              <div>
                <!-- <img class="how-does-it-work-img" src="../assets/images/direct_on_mobile-min.png" alt="mobile phone icon" /> -->
                <svg
                  class="how-does-it-work-img"
                  xmlns="http://www.w3.org/2000/svg"
                  width="682.667"
                  height="682.667"
                  viewBox="0 0 512 512"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M134 .9c-9.5 3-18.5 11.4-21.3 20.1-1.6 4.8-1.7 22.4-1.7 235l1.7 235c2.1 6.5 8.9 14.2 15.7 17.8l5.1 2.7h245l5.1-2.7c6.8-3.6 13.6-11.3 15.7-17.8 1.6-4.8 1.7-22.4 1.7-235l-1.7-235c-2.1-6.5-8.9-14.2-15.7-17.8L378.5.5l-121-.2C191 .2 135.4.5 134 .9zm242 17.9c1.9.9 4.5 3.2 5.7 5.1 2.1 3.1 2.3 4.6 2.3 15.2V51H128V39.1c0-10.6.2-12.1 2.3-15.2C135.2 16.5 126 17 256 17c108.9 0 116.7.1 120 1.8zm8 220.2v171H128V68h256v171zm0 216.9c0 28.3 0 28.9-2.3 32.2-4.9 7.4 4.3 6.9-125.7 6.9s-120.8.5-125.7-6.9c-2.3-3.3-2.3-3.9-2.3-32.2V427h256v28.9zM207.5 28.5c-3.4 3.3-3.4 8.3.1 11.6l2.6 2.4h92l2.4-2.8c3.1-3.7 3.1-8.1-.1-11.2l-2.4-2.5h-92.2l-2.4 2.5zm136.7-.5c-3 2.8-3.6 6.2-1.8 9.8 2.1 4 6.3 5.5 13.7 5 5.3-.4 6.6-.9 8.7-3.3 1.9-2.3 2.3-3.6 1.8-6.4-.9-5.6-3.5-7.1-12.5-7.1-6.4 0-8.1.4-9.9 2zM238.4 436.4c-10.1 3.2-16.4 12.1-16.4 23.4 0 8.5 1.5 13.3 5.9 18.3 5.9 7 9.1 7.9 28.1 7.9s22.2-.9 28.1-7.9c4.4-5 5.9-9.8 5.9-18.3 0-11.5-6.3-20.3-16.8-23.4-5.8-1.8-29.1-1.8-34.8 0zm32 17.7c2.1 1.6 2.6 2.9 2.6 6.3 0 2.3-.7 5.2-1.6 6.4-1.4 2.1-2.2 2.2-15.4 2.2s-14-.1-15.4-2.2c-.9-1.2-1.6-4.1-1.6-6.4 0-3.4.5-4.7 2.6-6.3 2.4-1.9 4-2.1 14.4-2.1s12 .2 14.4 2.1z"
                  />
                </svg>
                <h2 class="how-does-it-work-h1">{{$t('phone')}}</h2>
                <p class="how-does-it-work-p">{{$t('phone msg')}}</p>
              </div>
            </div>
          </v-flex>

          <v-flex md4 xs12>
            <div class="grid">
              <div>
                <p class="how-does-it-work-plus">+</p>
              </div>
              <div>
                <img class="how-does-it-work-img" src="../assets/images/qrt-min.png" alt="QR code" />
                <h2 class="how-does-it-work-h1">{{$t('qr code')}}</h2>
                <p class="how-does-it-work-p">{{$t('qr code msg')}}</p>
              </div>
            </div>
          </v-flex>

          <v-flex md4 sm12>
            <div class="grid">
              <div>
                <p class="how-does-it-work-plus">=</p>
              </div>
              <div>
                <svg
                  class="how-does-it-work-img"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="682.667"
                  height="682.667"
                  viewBox="0 0 512 512"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M247 1.6c-18 3.8-35.7 17.7-43.9 34.4-7 14.4-7.1 14.8-7.1 83.7V181h-14.2c-16.6 0-29.6 1.9-42 6-35.3 11.9-63.6 41-73.9 76.2-1.4 4.6-2.8 7.8-3.6 7.8-1 0-1.3-9-1.3-46.3v-46.2l5.1-2.5c16.9-8 27.3-28.4 24.1-47.1-6.2-36.3-49.7-50.3-75.7-24.4-17.4 17.2-17.9 43.7-1.2 62.1 2.8 3.1 7.3 6.5 11.2 8.5l6.5 3.4v94.4l-5.7 2.8c-7.1 3.4-16.9 13-20.2 19.6-4.8 9.9-5.1 13-5.1 49.9 0 22.1.4 36.6 1.1 40 3.7 17 17.7 31.1 34.7 34.7 2.9.6 10.3 1.1 16.5 1.1h11.2l2.3 8.1c9.8 35.2 38.4 65 74 76.9 17.7 5.9 19.2 6 115.7 6 96.6 0 99.2-.1 116.5-6 35.8-11.9 64.4-41.6 74.2-76.9l2.3-8.1h11.2c13.8 0 19.9-1.2 28.5-5.7 11.3-5.9 20-17.4 22.7-30.1 1.5-7.1 1.5-71.2 0-78.4-2.7-12.8-12.6-25.6-24.1-31-7.6-3.6-14.3-4.8-27.1-4.8h-11.3l-2.3-7.7c-1.2-4.3-3.8-11-5.6-15l-3.4-7.3h8.2c11.3 0 20.7-2.2 30.7-7.1 16.9-8.3 30.7-26 34.5-44.4 2.2-10.3 2.2-127.7 0-138-5-24-26-45-50-50C450.4-.6 256.9-.6 247 1.6zm214.1 31.5c7.9 3.7 13.3 9 17.1 16.7l3.3 6.7v128l-3.3 6.7c-3.8 7.7-9.2 13-17.1 16.7l-5.6 2.6-189 1-19.7 9.7-20.3 9.8c-.3 0-.4-39.3-.3-87.3l.3-87.2 2.6-5.5c4.6-9.9 12-16.3 22.2-19.6 3.4-1 23.5-1.2 104.2-1.1l100 .2 5.6 2.6zM53 123c4.5 2.3 8 8 8 13 0 7.6-7.4 15-15.1 15-7.3 0-14.9-7.6-14.9-15 0-4.8 3.5-10.7 7.8-12.9 4.8-2.6 9.3-2.6 14.2-.1zm143 112c0 22.2.2 24.4 2 28 2.3 4.6 8.1 8 13.3 8 2.4 0 12.5-4.5 33.6-15l30.2-15H401l3.5 4.7c5.4 7.4 10.1 17 13.2 26.8l2.8 9v130l-2.8 8.8c-9.1 29.3-29.1 49.3-58.4 58.4l-8.8 2.8h-189l-8.8-2.8c-29.3-9.1-49.3-29.1-58.4-58.4l-2.8-8.8v-130l2.8-8.8c6.2-19.8 17.7-35.9 33.3-46.4 16.6-11.3 30.1-15.1 54.2-15.2l14.2-.1v24zM61 346v45h-9.6c-8.1 0-10.3-.4-13.6-2.2-7.6-4.3-7.8-5.2-7.8-42.8 0-31.2.1-33.3 2-37 3.1-6.1 7.5-7.9 19.3-8H61v45zm413-43a13.4 13.4 0 0 1 6 6c1.9 3.7 2 5.8 2 37s-.1 33.3-2 37c-3.1 6.1-7.8 8-19.5 8H451v-90h9.5c7.6 0 10.4.4 13.5 2z"
                  />
                  <use xlink:href="#B" />
                  <use xlink:href="#B" y="60" />
                  <use xlink:href="#C" />
                  <use xlink:href="#C" x="150" />
                  <path
                    d="M218.6 393.4c-10 6-9.9 19.7.2 25.4 3.9 2.2 4.6 2.2 37.1 2.2 31.3 0 33.4-.1 37.1-2 4.5-2.3 8-8 8-13s-3.5-10.7-8-13c-3.7-1.9-5.8-2-37.2-2-33.2 0-33.3 0-37.2 2.4z"
                  />
                  <defs>
                    <path
                      id="B"
                      d="M264.6 78.4c-10 6-9.9 19.7.2 25.4l4 2.2h85.1c83.4 0 85.3 0 89.1-2 4.5-2.3 8-8 8-13s-3.5-10.7-8-13c-3.8-2-5.7-2-89.2-2h-85.3l-3.9 2.4z"
                    />
                    <path
                      id="C"
                      d="M173.6 303.4c-6.8 4.1-7.5 6.5-7.6 27.4 0 21.1.8 24 7.8 28 4.9 2.7 9.1 2.8 14.2.2 7-3.6 8-7 8-28s-1-24.4-8-28c-5.2-2.6-9.6-2.5-14.4.4z"
                    />
                  </defs>
                </svg>
                <h2 class="how-does-it-work-h1">{{$t('conversation')}}</h2>
                <p class="how-does-it-work-p">{{$t('conversation msg')}}</p>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </div>
    </div>

    <div ref="contact" class="container-contact">
      <div class="wrap-contact">
        <span class="contact-form-symbol">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="65.333" height="52" viewBox="0 0 49 39" preserveAspectRatio="xMidYMid meet"><path d="M1.7 1.8C.3 3.4 0 6.2 0 19.7c0 14.2.2 16.2 1.8 17.6C3.4 38.8 6.5 39 24.7 39c19.1 0 21.1-.2 22.6-1.8 1.4-1.6 1.7-4.4 1.7-17.9 0-14.2-.2-16.2-1.8-17.6C45.6.2 42.5 0 24.3 0 5.2 0 3.2.2 1.7 1.8zm44.8 17.7v17h-44l-.3-16c-.1-8.7 0-16.5.2-17.2.4-1.1 5.1-1.3 22.3-1.1l21.8.3v17zM8 8.6c0 .5 2.3 3.2 5 5.9l5 4.9-5 5.1c-2.7 2.8-5 5.5-5 6s2.5-1.5 5.5-4.5l5.5-5.4 5.4 5.4 5.6-5.4 5.5 5.4c3 3 5.8 5.1 6.2 4.7s-1.8-3.2-4.7-6.2L31.6 19l5.4-5.5c3-3 5-5.5 4.4-5.5-.5 0-4.3 3.4-8.4 7.5S25.1 23 24.5 23c-.5 0-4.5-3.5-8.7-7.7C11.5 11 8 8 8 8.6z"/></svg> -->
          <img src="../assets/images/symbol-01-min.png" />
        </span>

        <span class="contact-form-title">
          {{$t('sounds interesting')}}
          <br />
          <b>{{$t('contact us')}}</b>
          {{$t('get your chatbot')}}
        </span>

        <div class="wrap-input">
          <input class="contact-input" type="text" placeholder="Name" name="name" v-model="name" />
          <span class="focus-input"></span>
        </div>

        <div class="wrap-input">
          <input
            class="contact-input"
            type="text"
            name="email"
            placeholder="Email Address"
            v-model="email"
          />
          <span class="focus-input"></span>
        </div>

        <div class="wrap-input">
          <textarea
            class="contact-input"
            name="message"
            placeholder="Write Us A Message"
            v-model="contact_message"
          ></textarea>

          <span class="focus-input"></span>
        </div>

        <div class="contact-btn">
          <v-btn
            style="width:220px;"
            x-large
            elevation="10"
            color="success"
            dark
            v-on:click="send_email"
          >{{$t('send now')}}</v-btn>
        </div>
      </div>
    </div>

    <div id="footer">
      <v-layout row wrap>
        <v-flex md8 sm12>
          <div class="grid-list">
            <div id="logo-footer-div">
              <img class="logo-footer" src="../assets/images/logo-min.png" alt="GoToBot logo" />
            </div>
            <div id="footer-p-div">
              <p class="footer-p hover-1" v-on:click="ScrollTo('home')">{{$t('home')}}</p>
              <p class="footer-p" v-on:click="ScrollTo('benefits')">{{$t('about')}}</p>
              <p class="footer-p" v-on:click="ScrollTo('how-does-it-work')">{{$t('how it works')}}</p>
              <p class="footer-p" v-on:click="ScrollTo('contact')">{{$t('contact us')}}</p>
            </div>
          </div>
        </v-flex>
        <v-flex md4 sm12 xs12>
          <div>
            <p class="footer-all-rights">Copyright © 2020 Gotobot. All rights reserved.</p>
          </div>
        </v-flex>
      </v-layout>
    </div>

    <!-- <beautiful-chat
        :participants="participants"
        :titleImageUrl="titleImageUrl"
        :onMessageWasSent="onMessageWasSent"
        :messageList="messageList"
        :newMessagesCount="newMessagesCount"
        :isOpen="isChatOpen"
        :close="closeChat"
        :icons="icons"
        :open="openChat"
        :showEmoji="true"
        :showFile="true"
        :showTypingIndicator="showTypingIndicator"
        :colors="colors"
        :alwaysScrollToBottom="alwaysScrollToBottom"
        :messageStyling="messageStyling"
        @onType="handleOnType"
        @edit="editMessage"
    />-->
  </div>
</template>

<script>
// import CloseIcon from "vue-beautiful-chat/src/assets/close-icon.png";
// import OpenIcon from "vue-beautiful-chat/src/assets/logo-no-bg.svg";
// import FileIcon from "vue-beautiful-chat/src/assets/file.svg";
// import CloseIconSvg from "vue-beautiful-chat/src/assets/close.svg";
const axios = require("axios");

export default {
  name: "landing",
  data() {
    // this.$i18n.locale = "en";
    return {
      locale: "en",
      checkbox: true,
      newUser: true,
      landinguser: true,
      user_id: "",
      email: "",
      name: "",
      contact_message: "",
      loopNum: 0,
      isDeleting: false,
      txt: ""
      //   icons: {
      //     open: {
      //       img: OpenIcon,
      //       name: "default"
      //     },
      //     close: {
      //       img: CloseIcon,
      //       name: "default"
      //     },
      //     file: {
      //       img: FileIcon,
      //       name: "default"
      //     },
      //     closeSvg: {
      //       img: CloseIconSvg,
      //       name: "default"
      //     }
      //   },
      //   participants: [
      //     {
      //       id: "user1",
      //       name: "Matteo",
      //       imageUrl: "https://avatars3.githubusercontent.com/u/1915989?s=230&v=4"
      //     },
      //     {
      //       id: "user2",
      //       name: "Support",
      //       imageUrl:
      //         "https://avatars3.githubusercontent.com/u/37018832?s=200&v=4"
      //     }
      //   ],
      //   titleImageUrl:
      //     "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
      //   messageList: [
      //     {
      //       type: "text",
      //       author: `user1`,
      //       data: { text: `Hello I am gotobot do you have any questions?` }
      //     }
      //   ],
      //   newMessagesCount: 0,
      //   isChatOpen: false, // to determine whether the chat window should be open or closed
      //   showTypingIndicator: "", // when set to a value matching the participant.id it shows the typing indicator for the specific user
      //   colors: {
      //     header: {
      //       bg: "#4e8cff",
      //       text: "#ffffff"
      //     },
      //     launcher: {
      //       bg: "#4e8cff"
      //     },
      //     messageList: {
      //       bg: "#ffffff"
      //     },
      //     sentMessage: {
      //       bg: "#4e8cff",
      //       text: "#ffffff"
      //     },
      //     receivedMessage: {
      //       bg: "#eaeaea",
      //       text: "#222222"
      //     },
      //     userInput: {
      //       bg: "#f4f7f9",
      //       text: "#565867"
      //     }
      //   }, // specifies the color scheme for the component
      //   alwaysScrollToBottom: true, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      //   messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    };
  },
  props: {
    msg: String
  },
  mounted() {
    // if (this.$route.query.id === undefined) {
    //   // something to add
    // } else {
    //   this.isChatOpen = true;
    // }¸
    // this checks if there is multiple text that you want to animate

    /*text carousel */
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        this.TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  },
  methods: {

    /*text carousel */
    TxtRotate: function(el, toRotate, period) {
      var period1 = parseInt(period, 10) || 2000;

      //ovo gleda jel counter dosa do kraja //
      if (this.loopNum == toRotate.length) {
        this.loopNum = 0;
      }

      //ovo gleda koja je ric //
      var i = this.loopNum % toRotate.length;

      var fullTxt = toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

      var delta = 300 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = period1;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      var that = this;
      setTimeout(function() {
        that.TxtRotate(el, toRotate, period);
      }, delta);
    },
    setEnglish(){
      this.$i18n.locale="en";
    },
    setCroatian(){
      this.$i18n.locale="hrv";
    },
    sidebar(){
      var elements = document.querySelector(".navicon");
      var elements1=document.querySelector(".toggle");
      elements1.classList.toggle('toggle--active');
      elements.classList.toggle('navicon--active');
    },
    ScrollTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
    checkboxfunc: function() {
      if (this.checkbox === false) {
        this.$i18n.locale = "en";
      } else if (this.checkbox === true) {
        this.$i18n.locale = "hrv";
      }
    },
    send_email: async function() {
      await axios.post("https://www.gotobot.co/ ", {
        email: this.email,
        name: this.name,
        message: this.contact_message
      });
      alert("Mail Sent!");
    }

    // async newUserCheck() {
    //   if (this.newUser) {
    //     if (this.$route.query.id === undefined) {
    //       /* new user from landing */

    //       this.user_id=await axios.get(`http://localhost:9000/api/users/new-web-user-landing`);
    //       this.newUser = false;
    //       // eslint-disable-next-line no-console
    //       console.log(this.user_id);
    //     } else {
    //       /* samo prvi put mu spremi id kad posalje novu poruku */
    //       this.user_id = await axios.get(
    //       /* new user from some apartment */
    //         `http://localhost:9000/api/users/new-web-user-apartment/${this.$route.query.id}`
    //       );
    //       // eslint-disable-next-line no-console
    //       console.log(this.user_id);
    //       this.landinguser = false;
    //       this.newUser = false;
    //     }
    //   }
    // },
    // sendMessage(text) {
    //   if (text.length > 0) {
    //     this.newMessagesCount = this.isChatOpen
    //       ? this.newMessagesCount
    //       : this.newMessagesCount + 1;
    //     this.onMessageWasSent({
    //       author: "user1",
    //       type: "text",
    //       data: { text: "akjsdkkačsdkčlasdčlk" }
    //     });
    //   }
    // },
    // async onMessageWasSent(message) {
    //   // called when the user sends a message
    //   var odg=''
    //   this.messageList = [...this.messageList, message];
    //   await this.newUserCheck();
    //   if (this.landinguser) {
    //     odg = await this.MessageResponselanding(message.data.text, this.user_id.data.user_id);
    //   } else {
    //     odg = await this.MessageResponseApartment(message.data.text, this.user_id.data.user_id);
    //   }

    //   this.messageList = [
    //     ...this.messageList,
    //     {
    //       author: "user1",
    //       type: "text",
    //       data: { text: odg.data }
    //     }
    //   ];
    // },
    // openChat() {
    //   // called when the user clicks on the fab button to open the chat
    //   this.isChatOpen = true;
    //   this.newMessagesCount = 0;
    // },
    // closeChat() {
    //   // called when the user clicks on the botton to close the chat
    //   this.isChatOpen = false;
    // },
    // handleScrollToTop() {
    //   // called when the user scrolls message list to top
    //   // leverage pagination for loading another page of messages
    // },
    // handleOnType() {
    //   // console.log("Emit typing event");
    // },
    // editMessage(message) {
    //   const m = this.messageList.find(m => m.id === message.id);
    //   m.isEdited = true;
    //   m.data.text = message.data.text;
    // },
    // async MessageResponseApartment(poruka, user_id) {
    //   return await axios.post("http://localhost:9000/parseWeb/2", {
    //     data: poruka,
    //     user_id: user_id
    //   });
    // },
    // async MessageResponselanding(poruka,user_id) {
    //   return await axios.post("http://localhost:9000/parseWeb", {
    //     data: poruka,
    //     user_id:user_id
    //   });
    // }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
@import "../assets/css/main.css";
</style>
