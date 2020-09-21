<template>
<v-row class="row-background">
    <div class="background">
    <div class="chat">
      <div class="chat-title">
        <h1>Hotel</h1>
        <a href="https://www.gotobot.co"><h2>Powered by GoToBot</h2></a>
          <!-- <img src="https://www.gotobot.co/img/logo.a739225c.png"/> -->
          <img class="logo" src="../assets/logo-min.png"/>
        
      </div>
      <div class="messages">
        <div class="messages-content">
          <VuePerfectScrollbar id="scroll" class="scroll-area" :settings="settings">   
            <div v-for="messages in msg" :key="messages.counter">
              <!-- bot mesagges -->
              <div v-if="messages.user_id ==='1'">
                <div class="message new">
                  <figure class="avatar">
                    <img src="https://i7.pngguru.com/preview/498/917/274/5bbe2dc1a1a3a.jpg" />
                  </figure>
                  {{messages.msg}} 
                  <div class="timestamp">{{messages.time}}</div>
                </div>
              </div>
              <!-- user mesagges -->
              <div v-else>
                <div class="message message-personal">
                  {{messages.msg}}
                  <div class="timestamp">{{messages.time}}</div>
                </div>
              </div>
            </div>
            <div v-if="flag">
              <div class="message loading new">
                <figure class="avatar">
                  <img src="https://i7.pngguru.com/preview/498/917/274/5bbe2dc1a1a3a.jpg" />
                </figure>
                <span></span>
              </div>
            </div>
          </VuePerfectScrollbar> 
            </div>
      </div>
      <div class="message-box">
        <input
          type="text"
          class="message-input"
          placeholder="Type message..."
          v-model="msg_user_var"
        />
        <!-- <button class="message-submit" v-on:keyup.enter="AddNewUserMessage">Send</button> -->
        <button class="message-submit" v-on:click="AddNewUserMessage">Send</button>
      </div>
    </div>
  </div>

</v-row>

</template>
<script>
const axios = require("axios");
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  components: {
    VuePerfectScrollbar
  },
  data() {
    return {
      karlo:"karlo",
      msg: [],
      msg_user_var: "",
      counter_msg:1,
      flag: false,
      settings: {
        maxScrollbarLength: 200
      }
    };
  },
  created() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var b = h + ":" + m;
    var object = {
      time: b,
      msg: "Hello! My name is GoToBot how can i help you?",
      user_id: "1",
      flag: "0",
      counter:'1'
    };
    this.msg.push(object);
  },
  methods:{
    scrollToBottom() {
      const container = document.querySelector("#scroll");
      container.scrollTop = container.scrollHeight;
    },
    AddNewUserMessage: function() {
      this.counter_msg=this.counter_msg+1;
      var d = new Date();
      var h = d.getHours();
      var m = d.getMinutes();
      var b = h + ":" + m;
      var object = {
        time: b,
        msg: this.msg_user_var,
        user_id: "2",
        counter:this.counter_msg
      };
      /* dodaj korisnikovu poruku */
      this.msg.push(object);

      /*da se izbrise iz placeholdera nakon sta se posalje poruka */
      this.msg_user_var = "";
      /*odgovor bota*/
      this.AddNewBotMessage();
    },
    async AddNewBotMessage() {
       /* da se pokaze onaj bubble ka da bot piše  */
      /* za to nam sluzi ovaj flag jer je u divu v-if */
      this.flag=true

      /* ako ne postavim ovako inace mi nece scrollat do kraja jer se jos nista nije dodalo u div! */
      setTimeout(()=>{this.scrollToBottom()},10);
      
      /* da bubble traje neko odredeno random vrime */
      setTimeout(() => {
        this.newMsg();
      }, 50 + Math.random() * 2 * 10);
    },
    async newMsg() {

      var response = await this.BotResponse(this.msg[this.msg.length - 1].msg);
      this.counter_msg=this.counter_msg+1;
      /*spremanje bot-ovog odgovora */
      var d = new Date();
      var h = d.getHours();
      var m = d.getMinutes();
      var b = h + ":" + m;
      var object = {
        time: b,
        // msg: "odgovor!",
        msg:response.data[0].text,
        user_id: "1",
        counter:this.counter_msg
      };

      this.flag = false;

      this.msg.push(object);

      /* da scrolla na dno kad se doda nova poruka */
      setTimeout(()=>{this.scrollToBottom()},10);
    },
    async BotResponse(msg) {
      return await axios.post("https://www.gotobot.co/hotel/webhooks/rest/webhook", {
        message: msg
      });
    }
  },
   mounted(){
     var self=this
    window.addEventListener('keyup', function(event) {
      if (event.keyCode === 13) { 
        self.AddNewUserMessage()
      }
    });
    
  
  }
};
</script>
<style lang="css" scoped>
.scroll-area {
  position: relative;
  padding: 0px;
  width: 100%;
  height: 100%;
}

/*-------------------- Body --------------------*/
*{
  /* font-family: "Roboto"; */
  /* font-family:'Montserrat', sans-serif; */
  font-weight:200;
  letter-spacing: 0px;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  /* font-family:'Montserrat', sans-serif; */
  /* font-family: "Roboto"; */
  font-weight:200;
  
}
body {
  background: linear-gradient(135deg, #044f48, #2a7561);
  background-size: cover;
  /* font-family: "Open Sans", sans-serif; */
  font-size: 12px;
  line-height: 1.3;
  overflow: hidden;
}


/*-------------------- Chat --------------------*/
.row-background{
    background: -webkit-linear-gradient(to left, #f3904f, #3b4371); 
  background: linear-gradient(to left, #f3904f, #3b4371); 
}
.background{
  /* background-image:url('https://doc-0o-14-docs.googleusercontent.com/docs/securesc/p2kihqn19pn6ecqtcoksurb1980os2iu/rbd4a8o9titkik2ehhg5ou69dtdor762/1582817775000/03189379116105766972/03189379116105766972/16GBX8q464LRYI46hwddP4Pun3ZI2Zr8W?e=view&authuser=0&nonce=g1e4alubrcorq&user=03189379116105766972&hash=cdsggjchhfps11g43jeh423m5954l3gp'); */
  width:100%;
  padding-top:25px;
  padding-bottom:25px;
  /* background-color:#1fc8db;
  background-image: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%); */


  /*  ovo se koristi samo u soluciji 1!!!  */
  background: -webkit-linear-gradient(to left, #f3904f, #3b4371); 
  background: linear-gradient(to left, #f3904f, #3b4371); 


}
@media (max-width: 600px) {
  .chat{
    width:90%;
  }
}
.chat {
  border-radius:18px;
  margin: auto;
  width: 322px;
  height: 130vh;
  /* max-height: 500px; */
  max-height:60%;
  z-index: 2;
  overflow: hidden;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  flex-direction: column;


  /* solucija jedan koja ide sa pozadinon */
  background: rgba(0, 0, 0, 0.5);


  /* solucija dva koja nema pozadine ako zelimo soluciju jedan
  onda odkomentiramo ovo 2 linije iznad te na liniji 198 za pozadinu
  takoder odkomentiramo
   */
  /* background: rgba(0, 0, 0, 0.75); */

 
}
/*-------------------- Chat Title --------------------*/
.v-application--wrap{
  flex-direction:row !important;
}
.chat-title {
  flex: 0 1 45px;
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  text-transform: uppercase;
  text-align: left;
  padding: 10px 10px 10px 50px;
}
 h1, h2 {
  line-height:16px;
  font-size: 11px;
  text-align: left;
  margin:0 0 0 15px;
  color:rgba(255, 255, 255, 0.65);

  padding: 0;
}
a {
  text-decoration: none;
}
.chat-title h2 {
  color: rgba(255, 255, 255, 0.65);
  font-size: 8px;
  letter-spacing: 1px;
}
.logo{
  width:42px;
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 9px;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
.chat-title .avatar {
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 9px;
  /* border-radius: 30px; */
  width: 35px;
  height: 30px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  /* border: 2px solid rgba(255, 255, 255, 0.24); */
}
.chat-title .avatar img {
  padding-bottom:10px;
  width: 100%;
  height: auto;
}

/*-------------------- Messages --------------------*/
.messages {
  flex: 1 1 auto;
  color: rgba(255, 255, 255, 0.75);
  overflow: hidden;
  position: relative;
  width: 100%;
}
.messages .messages-content {
  position: absolute;
  top: 0;
  left: 0;
  height: 101%;
  width: 100%;
}
.messages .message {
  clear: both;
  float: left;
  padding: 6px 10px 7px;
  border-radius: 10px 10px 10px 0;
  background: rgba(0, 0, 0, 0.3);
  margin-top: 8px;
  margin-right: 17px;
  font-size: 11px;
  line-height: 1.4;
  margin-left: 35px;
  position: relative;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}
.messages .message .timestamp {
  position: absolute;
  left: 4px;
  bottom: -15px;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.3);
}

.messages .message::before {
  content: "";
  position: absolute;
  bottom: -6px;
  border-top: 6px solid rgba(0, 0, 0, 0.3);
  left: 0;
  border-right: 7px solid transparent;
}
.messages .message .avatar {
  position: absolute;
  z-index: 1;
  bottom: -15px;
  left: -35px;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: 2px solid rgba(255, 255, 255, 0.24);
}
.messages .message .avatar img {
  width: 104%;
  height: auto;
}
.messages .message.message-personal {
  float: right;
  color: #fff;
  text-align: right;
  background: linear-gradient(120deg, #248a52, #257287);
  border-radius: 10px 10px 0 10px;
}
.messages .message.message-personal::before {
  left: auto;
  right: 0;
  border-right: none;
  border-left: 5px solid transparent;
  border-top: 4px solid #257287;
  bottom: -4px;
}
.messages .message:last-child {
  margin-bottom: 30px;
}
.messages .message.new {
  transform: scale(0);
  transform-origin: 0 0;
  animation: bounce 500ms linear both;
  margin-left: 50px;
}
.messages .message.loading::before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: "";
  display: block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  z-index: 2;
  margin-top: 4px;
  animation: ball 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;
  border: none;
  animation-delay: 0.15s;
}
.messages .message.loading span {
  display: block;
  font-size: 0;
  width: 20px;
  height: 10px;
  position: relative;
}
.messages .message.loading span::before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: "";
  display: block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  z-index: 2;
  margin-top: 4px;
  animation: ball 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;
  margin-left: -7px;
}
.messages .message.loading span::after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  content: "";
  display: block;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  z-index: 2;
  margin-top: 4px;
  animation: ball 0.45s cubic-bezier(0, 0, 0.15, 1) alternate infinite;
  margin-left: 7px;
  animation-delay: 0.3s;
}
/*-------------------- Message Box --------------------*/
.message-box {
  flex: 0 1 50px;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  padding: 10px;
  position: relative;
}
.message-box .message-input {
  display:inline-block;
  background: none;
  border: none;
  outline: none !important;
  resize: none;
  color: rgba(255, 255, 255, 0.75);
  font-size: 12px;
  height: 17px;
  margin: 0;
  padding-right: 20px;
  margin-left:5px;
  /* width: 220px; */
  width:79%;
}

::placeholder {
  color: rgba(255, 255, 255, 0.65);
  opacity: 1; 
}
.message-box textarea:focus:-webkit-placeholder {
  color: transparent;
}
.message-box .message-submit {
  /* position: absolute; */
  display:inline-block;
  z-index: 1;
  top: 10px;
  right: 10px;
  color: #fff;
  border: none;
  background: #248a52;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 1;
  padding: 6px 10px;
  border-radius: 10px;
  outline: none !important;
  transition: background 0.2s ease;
}
.message-box .message-submit:hover {
  background: #1d7745;
}
/*-------------------- Custom Srollbar --------------------*/
.mCSB_scrollTools {
  margin: 1px -3px 1px 0;
  opacity: 0;
}
.mCSB_inside > .mCSB_container {
  margin-right: 0px;
  padding: 0 10px;
}
.mCSB_scrollTools .mCSB_dragger .mCSB_dragger_bar {
  background-color: rgba(0, 0, 0, 0.5) !important;
}
/*-------------------- Bounce --------------------*/
@keyframes bounce {
  0% {
    transform: matrix3d(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  4.7% {
    transform: matrix3d(0.45, 0, 0, 0, 0, 0.45, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  9.41% {
    transform: matrix3d(0.883, 0, 0, 0, 0, 0.883, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  14.11% {
    transform: matrix3d(1.141, 0, 0, 0, 0, 1.141, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  18.72% {
    transform: matrix3d(1.212, 0, 0, 0, 0, 1.212, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  24.32% {
    transform: matrix3d(1.151, 0, 0, 0, 0, 1.151, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  29.93% {
    transform: matrix3d(1.048, 0, 0, 0, 0, 1.048, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  35.54% {
    transform: matrix3d(0.979, 0, 0, 0, 0, 0.979, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  41.04% {
    transform: matrix3d(0.961, 0, 0, 0, 0, 0.961, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  52.15% {
    transform: matrix3d(0.991, 0, 0, 0, 0, 0.991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  63.26% {
    transform: matrix3d(1.007, 0, 0, 0, 0, 1.007, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  85.49% {
    transform: matrix3d(0.999, 0, 0, 0, 0, 0.999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  100% {
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
}
@keyframes ball {
  from {
    transform: translateY(0) scaleY(0.8);
  }
  to {
    transform: translateY(-10px);
  }
}
</style>